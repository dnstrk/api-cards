import { Input, TextField } from "@mui/material";
import React from "react";
import cl from "./index.module.css";

export default function InputSearch({ dispatch, filterValue, users }) {
    function filterUsers(value) {
        dispatch({ type: "SET_FILTER", setFilter: value });
    }

    return (
        <Input
            onChange={(e) => filterUsers(e.target.value)}
            className={cl.input}
            placeholder="Search"
        />
    );
}
