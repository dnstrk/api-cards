import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./component/Header";
import axios from "axios";
import { Alert } from "@mui/material";
import ListUser from "./component/ListUser";
import CardUser from "./component/CardUser";

const InitialState = {
    users: [],
    usersVisible: true,
    error: false,
    errorMsg: null,
    card: [],
    cardVisible: false,
    filterValue: "",
    filteredUsers: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                ...state,
                error: false,
                users: action.payload,
            };
        case "FETCH_ERROR":
            return {
                ...state,
                error: true,
                errorMsg: action.payload,
                usersVisible: false,
            };
        case "SHOW_LIST":
            return {
                ...state,
                cardVisible: false,
                usersVisible: true,
            };
        case "SHOW_CARD":
            return {
                ...state,
                card: action.payload,
                cardVisible: true,
                usersVisible: false,
            };
        case "SET_FILTER":
            return {
                ...state,
                filterValue: action.setFilter,
            };
        case "FILTERED_LIST":
            return {
                ...state,
                filteredUsers: action.payload,
            };
        case "RESET_FILTER":
            return {
                ...state,
                filterValue: "",
            };
        default:
            return { ...state };
    }
}

async function fetchUsers(dispatch) {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (e) {
        dispatch({ type: "FETCH_ERROR", payload: e.message });
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, InitialState);

    useEffect(() => {
        fetchUsers(dispatch);
    }, []);

    // useEffect(() => {
    //     dispatch({ type: "FILTERED_LIST", payload: filteredUsers });
    // }, [state.filterValue]);
    useEffect(() => {
        dispatch({ type: "FILTERED_LIST", payload: filteredUsers });
    }, [state.filterValue]);
    

    function home() {
        dispatch({ type: "SHOW_LIST" });
        dispatch({ type: "RESET_FILTER" });
    }


    //FILTER BLOCK
    function filter(users, query) {
        const filteredList = users.filter((user) => {
            return user.name.toLowerCase().includes(query);
        });
        return filteredList;
    }
    const filteredUsers = filter(state.users, state.filterValue);
    state.filteredUsers = filteredUsers

    

    return (
        <div>
            <Header
                dispatch={dispatch}
                filterValue={state.filterValue}
                users={state.users}
                home={home}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "50px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                    }}
                >
                </div>
                {state.error ? (
                    <Alert severity="error">{state.errorMsg}</Alert>
                ) : null}
                {state.usersVisible ? (
                    <ListUser users={state.filteredUsers} dispatch={dispatch} />
                ) : null}
                {state.cardVisible ? (
                    <CardUser user={state.card} dispatch={dispatch} />
                ) : null}
            </div>
        </div>
    );
}

export default App;
