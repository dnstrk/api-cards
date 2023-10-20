import React, { useState } from "react";
import cl from "./index.module.css";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import ButtonSandBox from "../ButtonSandBox";

export default function CardUser({ user, dispatch }) {
    const [isEditing, setIsEditing] = useState(true);
    console.log(user.id);
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
        <Container maxWidth="lg">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={cl.cardWrap}>
                    <div className={cl.cardBorder}>
                        <span className={cl.title}>User:</span>
                        <div className={cl.info}>
                            <input
                                readOnly={isEditing}
                                type="text"
                                className={cl.editInp}
                                value={user.name}
                                onChange={(e) => {
                                    handleChangeUser({
                                        ...user,
                                        name: e.target.value,
                                    });
                                }}
                            ></input>
                        </div>
                        <hr />
                        <span className={cl.title}>Address:</span>

                        <div className={cl.info}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                City:
                                <input
                                    readOnly={isEditing}
                                    type="text"
                                    className={cl.editInp}
                                    value={user.address.city}
                                    onChange={(e) => {
                                        handleChangeUser({
                                            ...user,
                                            address: {
                                                city: e.target.value,
                                                street: user.address.street,
                                                suite: user.address.suite,
                                            },
                                        });
                                    }}
                                ></input>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                Street:
                                <input
                                    readOnly={isEditing}
                                    type="text"
                                    className={cl.editInp}
                                    value={user.address.street}
                                    onChange={(e) => {
                                        handleChangeUser({
                                            ...user,
                                            address: {
                                                city: user.address.city,
                                                street: e.target.value,
                                                suite: user.address.suite,
                                            },
                                        });
                                    }}
                                ></input>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                Suite:
                                <input
                                    readOnly={isEditing}
                                    type="text"
                                    className={cl.editInp}
                                    value={user.address.suite}
                                    onChange={(e) => {
                                        handleChangeUser({
                                            ...user,
                                            address: {
                                                city: user.address.city,
                                                street: user.address.street,
                                                suite: e.target.value,
                                            },
                                        });
                                    }}
                                ></input>
                            </div>
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
                        <hr/>
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
                <ButtonSandBox isEdit={isEditing} handleEdit={handleEdit} />
                <button>restore</button>
            </div>
        </Container>
    );
}
