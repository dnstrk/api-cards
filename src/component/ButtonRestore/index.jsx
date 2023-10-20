import { Button } from "@mui/material";
import React, { useState } from "react";
import cl from "./index.module.css";

export default function ButtonRestore({ restore }) {
    return (
        <Button onClick={restore} className={cl.btn} variant="outlined">
            Restore
        </Button>
    );
}
