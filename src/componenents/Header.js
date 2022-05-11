import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 64,
    },
}));

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{backgroundColor: "orange"}}>
                <StyledToolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: 'flex-end', fontSize: 60, textAlign: "center" }}
                    >
                        Redfearn's Book Shop
                    </Typography>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}
