import React from 'react';
import {Card, Grid} from "@mui/material";
import Button from "@mui/material/Button";
import {Add, DeleteForever, Favorite} from "@mui/icons-material";
import Box from "@mui/material/Box";
import axios from "axios";
import Header from "./Header";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import BookListTable from "./BookListTable";

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 64,
    },
}));

const BookList = ({bookList, fetchData, setIsAddingNewBook, setEditedBook, isEditingBook, setIsEditingBook}) => {

    const handleClick = async (Id, favorite) => {
        const res = await axios.patch("http://localhost:8080/books/" + Id,
            {"favorite": !favorite})
        fetchData()
    }

    const handleDelete = async (Id) => {
        const res = await axios.delete("http://localhost:8080/books/" + Id)
        fetchData()
    }

    return (
        <Grid item fontSize={24} style={{marginTop: 6}} xs={12}>
            <Card sx={{flexGrow: 1}} elevation={24}>
                <AppBar position="static" elevation={24} style={{backgroundColor: "orange"}}>
                    <StyledToolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{mr: 2}}
                            onClick={() => setIsAddingNewBook(true)}
                        >
                            <Add elevation={24} fontSize={"large"}/> Add Book
                        </IconButton>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, alignSelf: 'flex-end', fontSize: 36, textAlign: "center"}}
                        >
                            Book List
                        </Typography>
                    </StyledToolbar>
                </AppBar>
            </Card>

                    <BookListTable setIsEditingBook={setIsEditingBook} isEditingBook={isEditingBook} setEditedBook={setEditedBook} bookList={bookList} fetchData={fetchData}/>
        </Grid>
    );
};

export default BookList;
