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

export default function EditBookDialog({ isEditingBook, setIsEditingBook, fetchData, editedBook }) {
    const [titleUpdate, setTitleUpdate] = useState("");
    const [authorUpdate, setAuthorUpdate] = useState("");

    const handleSubmit = async () => {
        const res = await axios.patch("http://localhost:8080/books/" + editedBook,
            {"title" : titleUpdate, "author" : authorUpdate})
        fetchData()
        setIsEditingBook(false)
    };

    return (
        <div>
            <Dialog open={isEditingBook} onClose={() => setIsEditingBook(false)}>
                <DialogTitle>Book Editor</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the appropriate information to edit this book
                    </DialogContentText>
                    <TextField
                        required
                        error
                        autoFocus
                        margin="dense"
                        id="title"
                        label="New Title"
                        type="title"
                        fullWidth
                        variant="standard"
                        onChange={(ev) => setTitleUpdate(ev.target.value)}
                    />
                    <TextField
                        required
                        error
                        autoFocus
                        margin="dense"
                        id="author"
                        label="New Author"
                        type="author"
                        fullWidth
                        variant="standard"
                        onChange={(ev) => setAuthorUpdate(ev.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsEditingBook(false)}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
                <DialogContentText style={{margin: 10, fontStyle: "oblique"}}>

                </DialogContentText>
            </Dialog>
        </div>
    );
}
