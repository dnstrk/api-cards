import React from "react";
import cl from "./index.module.css";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

export default function CardUser({ user, dispatch }) {
    function back() {
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
                            Email: 
                            <a
                                className={cl.email}
                                href={"mailto:" + user.email}
                            >
                                {' '}{user.email}
                            </a>
                            <br /> <a className={cl.phone} href={"tel:+"+user.phone}>Number: {user.phone}</a>
                        </div>
                    </div>
                    <div className={cl.cardBorder}>
                        <span className={cl.title}>Company:</span>
                        <div className={cl.info}>
                            {user.company.name} <br /> {user.company.bs}
                        </div>
                        <span className={cl.title}>Site:</span>
                        <div className={cl.info}>
                            <a href={"https://" + user.website} target="_blank">
                                {user.website}
                            </a>
                        </div>
                    </div>
                </div>
                <Button onClick={back} className={cl.btn} variant="outlined">
                    Back
                </Button>
            </div>
        </Container>
    );
}
