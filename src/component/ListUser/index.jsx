import React from "react";
import cl from "./index.module.css";
import ItemUser from "../ItemUser";
import { Container } from "@mui/material";

export default function ListUser({ users, dispatch }) {
    return (
        <Container maxWidth='sm'>
            <ul className={cl.list}>
                {users.map((user) => (
                    <ItemUser key={user.id} dispatch={dispatch} user={user} />
                ))}
            </ul>
        </Container>
    );
}
