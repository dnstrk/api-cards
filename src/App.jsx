import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./component/Header";
import axios from "axios";
import { Alert, Container } from "@mui/material";
import ListUser from "./component/ListUser";
import CardUser from "./component/CardUser";
import { reducer, InitialState } from "./component/reduser";

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

    useEffect(() => {
        dispatch({ type: "FILTERED_LIST" });
    }, [state.filterValue, state.users]);

    function home() {
        dispatch({ type: "SHOW_LIST" });
        dispatch({ type: "RESET_FILTER" });
    }

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
                {state.error ? (
                    <Alert
                        sx={{ width: "20%", margin: "auto" }}
                        severity="error"
                    >
                        {state.errorMsg}
                    </Alert>
                ) : null}
                {state.usersVisible ? (
                    <ListUser users={state.filteredUsers} dispatch={dispatch} />
                ) : null}
                {state.cardVisible ? (
                    <>
                        <CardUser
                            user={state.card}
                            users={state.users}
                            dispatch={dispatch}
                        />
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default App;
