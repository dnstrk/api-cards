import { Button } from "@mui/material";
import React, { useState } from "react";
import cl from "./index.module.css";

export default function ButtonSandBox({handleEdit}) {


    return (
        <Button onClick={handleEdit} className={cl.btn} variant="outlined">
            SandBox
        </Button>
    );
}
