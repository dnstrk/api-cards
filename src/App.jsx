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
    });

 
    function home() {
        dispatch({ type: "SHOW_LIST" });
    }

    return (
        <div>
            <Header home={home}/>
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
                    {/* <button onClick={card}>card</button> */}
                </div>
                {state.error ? (
                    <Alert severity="error">{state.errorMsg}</Alert>
                ) : null}
                {state.usersVisible ? <ListUser users={state.users} dispatch={dispatch} /> : null}
                {state.cardVisible ? <CardUser user={state.card} dispatch={dispatch}/> : null}
            </div>
        </div>
    );
}

export default App;
