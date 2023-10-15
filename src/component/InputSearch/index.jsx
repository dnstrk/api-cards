import { Input } from "@mui/material";
import React from "react";
import cl from "./index.module.css";

export default function InputSearch({ dispatch, filterValue, users }) {
    function filterUsers(value) {
        dispatch({ type: "SET_FILTER", setFilter: value });
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Input
                value={filterValue}
                onChange={(e) => filterUsers(e.target.value)}
                className={cl.input}
                placeholder="Search"
            />
        </div>
    );
}
