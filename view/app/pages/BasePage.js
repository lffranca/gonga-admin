import React from 'react'
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Copyright from "../components/Copyright";

function BasePage(props) {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar/>
            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                {props.children}
                <Copyright sx={{pt: 4}}/>
            </Container>
        </Box>
    )
}

export default BasePage
