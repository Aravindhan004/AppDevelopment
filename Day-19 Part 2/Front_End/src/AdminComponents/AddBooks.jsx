import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, Divider, IconButton, List, ListItem, ListItemText, TextField, Tooltip, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import store from '../features/storage';
import { setBooks, setEvents, setUsers } from '../features/admin';
import axios from 'axios';


export default function AddBooks({ setOpen }) {

    const [book, setBook] = useState({})

    const options = store.getState().admin.genre

    const addNewBook = async () => {
        console.log(book)

        const token = localStorage.getItem('jwtToken');

        const headers = {
            'Authorization': `Bearer ${token}`
        };
        
        try {
            await axios.post('http://localhost:8080/api/v1/book/createBook', book, { headers : headers});
            setOpen(false)
            window.location.reload()
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }

    return (
        <Box sx={{ width: '500px', height: '350px', backgroundColor: 'white' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Tooltip title='close'>
                    <IconButton sx={{ '&:hover': { color: 'red' } }} onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ pr: 3, pl: 3 }}>
                <Box>
                    {/* <TextField onChange={(e) => setId(e.target.value)} size='small' type='number' id='book-id' label='Book ID' name='invoice-id' autoFocus required /> */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <TextField onChange={(e) => setBook({... book, bookname: e.target.value})} size='small' id='Bookname' label='Bookname' name='Bookname' required />
                        <TextField onChange={(e) => setBook({...book, authorname: e.target.value})} size='small' id='Authorname' label='Authorname' name='Authorname' required />
                    </Box>
                    <TextField sx={{ mt: 3 }} onChange={(e) => setBook({...book, dop: e.target.value})} size='small' id='dop' label='dop' name='dop' required />
                </Box>
                {/* <Autocomplete
                    id='products-autocomplete'
                    size='small'
                    options={options}
                    getOptionLabel={option => option}
                    sx={{ mt: 3 }}
                    onChange={(e, value) => {
                        if (value !== null) {
                            setBook({...book, genre: value})
                        }
                    }}
                    renderInput={ params => (
                        <TextField { ...params } size='small' id='products' label='Genre' name='products' required />
                    )}
                /> */}

                <Box sx={{ mt: 8, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        onClick={addNewBook}
                        color='error'
                        variant='outlined'
                    >Add</Button>
                </Box>
            </Box>
        </Box>
    )
}
