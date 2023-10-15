import { Box, Container, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import cl from "./index.module.css";
import NavHeader from "../NavHeader";

export default function Header({home, dispatch, filterValue, users}) {
    return (
        <Box className={cl.box}>
            <Container maxWidth="md">
                <NavHeader dispatch={dispatch} filterValue={filterValue} users={users} home={home} />
            </Container>
        </Box>
    );
}
