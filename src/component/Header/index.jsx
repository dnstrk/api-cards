import { Box, Container, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import cl from "./index.module.css";
import NavHeader from "../NavHeader";

export default function Header({home}) {
    return (
        <Box className={cl.box}>
            <Container maxWidth="md">
                <NavHeader home={home} />
            </Container>
        </Box>
    );
}
