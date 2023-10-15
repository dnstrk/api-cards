import React from "react";
import cl from "./index.module.css";
import { Container } from "@mui/material";

export default function CardUser({ user, dispatch }) {
    function home() {
        dispatch({ type: "SHOW_LIST" });
    }

    return (
        <Container maxWidth="md">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={cl.cardWrap}>
                    <div className={cl.cardBorder}>
                        <span className={cl.title}>User:</span>
                        <div className={cl.info}>
                            {user.name} / {user.username}
                        </div>
                        <hr />
                        <span className={cl.title}>Address:</span>
                        <div className={cl.info}>
                            {user.address.city} : {user.address.street} :{" "}
                            {user.address.suite}
                        </div>
                        <hr />

                        <span className={cl.title}>Contacts:</span>
                        <div className={cl.info}>
                            Email: {user.email} <br /> Number: {user.phone}
                        </div>
                    </div>
                    <div className={cl.cardBorder}>
                        <span className={cl.title}>Company:</span>
                        <div className={cl.info}>
                            {user.company.name} <br /> {user.company.bs}
                        </div>
                        <span className={cl.title}>Site:</span>
                        <div className={cl.info}>
                            <a href={"https://" + user.website}>
                                {user.website}
                            </a>
                        </div>
                    </div>
                </div>
                <button onClick={home} className={cl.homeBtn}>
                    To All users
                </button>
            </div>
        </Container>
    );
}
