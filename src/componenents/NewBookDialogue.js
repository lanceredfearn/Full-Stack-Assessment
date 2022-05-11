import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import {useState} from "react";
import {Favorite} from "@mui/icons-material";

export default function NewBookDialogue({ isAddingNewBook, setIsAddingNewBook, fetchData }) {
    const [titleUpdate, setTitleUpdate] = useState("");
    const [authorUpdate, setAuthorUpdate] = useState("");

    const handleSubmit = async () => {
        const res = await axios.post("http://localhost:8080/books",
            {"title" : titleUpdate, "author" : authorUpdate})
        fetchData()
        setIsAddingNewBook(false)
    };

    return (
        <div>
            <Dialog open={isAddingNewBook} onClose={() => setIsAddingNewBook(false)}>
                <DialogTitle>New Book</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please input the following fields:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="title"
                        type="title"
                        fullWidth
                        variant="standard"
                        onChange={(ev) => setTitleUpdate(ev.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="author"
                        label="author"
                        type="author"
                        fullWidth
                        variant="standard"
                        onChange={(ev) => setAuthorUpdate(ev.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsAddingNewBook(false)}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
                <DialogContentText style={{margin: 10, fontStyle: "oblique"}}>
                    New books are not added to your favorites by default. If you really love this book, you should
                    make sure to click the {<Favorite color={'error'}/>} icon in the Book List! Your book title will
                    appear in bold when you favorite it!
                </DialogContentText>
            </Dialog>
        </div>
    );
}
