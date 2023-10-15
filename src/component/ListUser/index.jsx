import React from "react";
import cl from './index.module.css'
import ItemUser from "../ItemUser";


export default function ListUser({users, dispatch}) {

    return (
        <ul className={cl.list}>
            {users.map((user) => (
                <ItemUser key={user.id} dispatch={dispatch} user={user}/>
            ))}
        </ul>
    );
}
