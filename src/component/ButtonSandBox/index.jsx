import { Button } from "@mui/material";
import React, { useState } from "react";
import cl from "./index.module.css";

export default function ButtonSandBox({ handleEdit, isEdit }) {
    return (
        <Button onClick={handleEdit} className={cl.btn} variant="outlined">
            {isEdit ? "Edit" : "Save"}
        </Button>
    );
}
