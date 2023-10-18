import React from "react";
import cl from "./index.module.css";

export default function ItemUser({ user, dispatch }) {
    function showCard() {
        dispatch({ type: "SHOW_CARD", payload: user });
    }

    return (
        <li className={cl.item}>
            <button className={cl.button} onClick={showCard}>
                <div className={cl.name}>
                    <span>{user.name}</span> <span>{user.email}</span>
                </div>

                <span>({user.username})</span>
            </button>
        </li>
    );
}
