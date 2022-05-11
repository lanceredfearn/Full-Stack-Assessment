import axios from "axios";
import {useEffect, useState} from "react";
import Header from "./componenents/Header";
import {Grid} from "@mui/material";
import BookList from "./componenents/BookList";
import NewBookDialogue from "./componenents/NewBookDialogue";
import EditBookDialog from "./componenents/EditBookDialog";

document.body.style.backgroundImage = "url('https://i.guim.co.uk/img/media/d305370075686a053b46f5c0e6384e32b3c00f97/0_50_5231_3138/master/5231.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=c83f68b473db6bb72cd8d50beb04addc')";
function App() {
    const [bookList, setBookList] = useState([]);
    const [isAddingNewBook, setIsAddingNewBook] = useState(false);
    const [isEditingBook, setIsEditingBook] = useState(false);
    const [editedBook, setEditedBook] = useState(0);

    const fetchData = async () => {
        const result = await axios('http://localhost:8080/books')
        setBookList(result.data)

    }
    useEffect(() => {
        fetchData()
    }, []);


    return (
        <>
            <Header setIsAddingNewBook={setIsAddingNewBook}/>
            {isAddingNewBook ?
                <NewBookDialogue isAddingNewBook={isAddingNewBook} setIsAddingNewBook={setIsAddingNewBook}
                                 fetchData={fetchData}/> :
                <></>}
            <Grid container>
                <BookList setIsEditingBook={setIsEditingBook} isEditingBook={isEditingBook} setEditedBook={setEditedBook} setIsAddingNewBook={setIsAddingNewBook} fetchData={fetchData} bookList={bookList}/>
                {isEditingBook ?
                <EditBookDialog editedBook={editedBook} isEditingBook={isEditingBook} setIsEditingBook={setIsEditingBook} fetchData={fetchData}/> :
                <></>}
            </Grid>
        </>
    );
}

export default App;
