import React, { useState } from "react";
import cl from "./index.module.css";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import ButtonSandBox from "../ButtonSandBox";

export default function CardUser({ user, dispatch }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleEdit() {
        setIsEditing(!isEditing);
    }

    function back() {
        dispatch({ type: "SHOW_LIST" });
    }

    function handleChangeUser(user) {
        dispatch({ type: "CHANGED", card: user });
    }

    // const [test, setTest] = useState('123')

    return (
        <Container maxWidth="md">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={cl.cardWrap}>
                    <div className={cl.cardBorder}>
                        <span className={cl.title}>User:</span>

                        <input
                            readOnly={isEditing}
                            type="text"
                            className={cl.info}
                            value={user.name}
                            onChange={(e) => {
                                handleChangeUser({
                                    ...user,
                                    name: e.target.value,
                                });
                            }}
                        ></input>

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
                                {" "}
                                {user.email}
                            </a>
                            <br />
                            Number:{" "}
                            <a className={cl.phone} href={"tel:+" + user.phone}>
                                {user.phone}
                            </a>
                        </div>
                    </div>
                    <div className={cl.cardBorder}>
                        <span className={cl.title}>Company:</span>
                        <div className={cl.info}>
                            {user.company.name} <br /> {user.company.bs}
                        </div>
                        <span className={cl.title}>Site:</span>
                        <div className={cl.info}>
                            <a
                                className={cl.site}
                                href={"https://" + user.website}
                                target="_blank"
                            >
                                {user.website}
                            </a>
                        </div>
                    </div>
                </div>
                <Button onClick={back} className={cl.btn} variant="outlined">
                    Back
                </Button>
                <ButtonSandBox handleEdit={handleEdit} />
            </div>
        </Container>
    );
}
