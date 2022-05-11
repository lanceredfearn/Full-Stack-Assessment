import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import axios from "axios";
import {DeleteForever, Edit, EditAttributes, Favorite, FavoriteBorder, FavoriteOutlined} from "@mui/icons-material";

export default function BookListTable({bookList, fetchData, setEditedBook, setIsEditingBook, isEditingBook }) {

    const handleClick = async (Id, favorite) => {
        const res = await axios.patch("http://localhost:8080/books/" + Id,
            {"favorite": !favorite})
        fetchData()
    }

    const handleDelete = async (Id) => {
        const res = await axios.delete("http://localhost:8080/books/" + Id)
        fetchData()
    }

    const handleEdit = (Id) => {
        setEditedBook(Id)
        setIsEditingBook(true)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontSize: 20}}>Title</TableCell>
                        <TableCell align="right" style={{fontSize: 20}}>Favorite</TableCell>
                        <TableCell align="right" style={{fontSize: 20}}>Delete</TableCell>
                        <TableCell align="right" style={{fontSize: 20}}>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bookList.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.favorite ?
                                    <strong>{row.title}</strong>
                                    :
                                    <>{row.title}</>
                                }
                            </TableCell>
                            <TableCell align="right">
                                {<Button onClick={() => handleClick(row.id, row.favorite)}>
                                    {row.favorite ?
                                    <Favorite
                                        color={'error'}
                                        fontSize={"large"}
                                    /> :
                                    <FavoriteBorder
                                        color={'error'}
                                        fontSize={'large'}
                                        />}
                                </Button>}
                            </TableCell>
                            <TableCell align="right">
                                {<Button>
                                    <DeleteForever
                                        color={'error'}
                                        fontSize={"large"}
                                        onClick={() => handleDelete(row.id)}
                                    />
                                </Button>}
                            </TableCell>
                            <TableCell align="right">
                                {<Button>
                                    <Edit
                                        color={'error'}
                                        fontSize={"large"}
                                        onClick={() => handleEdit(row.id)}
                                    />
                                </Button>}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}