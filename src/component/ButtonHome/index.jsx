import { Button } from "@mui/material";
import React from "react";
import cl from "./index.module.css";

export default function ButtonHome({home}) {
    return (
        <Button onClick={home} className={cl.btn} variant="outlined">
            Home
        </Button>
    );
}
