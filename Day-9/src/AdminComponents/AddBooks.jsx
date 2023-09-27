import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, Divider, IconButton, List, ListItem, ListItemText, TextField, Tooltip, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import store from '../features/storage';
import { setBooks, setEvents, setUsers } from '../features/admin';


export default function AddBooks({ setOpen }) {

    const [cart, setCart] = useState([])
    const [id, setId] = useState(null)
    const [title, setTitle] = useState(null)
    const [author, setAuthor] = useState(null)
    const [genre, setGenre] = useState(null)

    const options = store.getState().admin.genre

    const handleRemove = (item) => {
        const newCart = cart.filter(function (product) {
            return product !== item
        })
        
        setCart(newCart)
    }

    // const calculateAmount = () => {
    //     let price = 0.00

    //     cart?.map(item => (
    //         price += item?.price * item?.quantity
    //     ))

    //     setTotalPrice(price)
    // }

    const addBook = () => {
        const book = {
            id: id,
            title: title,
            author: author,
            genre: genre
        }

        console.log(book)

        store.dispatch(setBooks(book))
        setOpen(false)  
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
                    <TextField onChange={(e) => setId(e.target.value)} size='small' type='number' id='book-id' label='Book ID' name='invoice-id' autoFocus required />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <TextField onChange={(e) => setTitle(e.target.value)} size='small' id='Title' label='Title' name='Title' required />
                        <TextField onChange={(e) => setAuthor(e.target.value)} size='small' id='Author' label='Author' name='Author' required />
                    </Box>
                </Box>
                <Autocomplete
                    id='products-autocomplete'
                    size='small'
                    options={options}
                    getOptionLabel={option => option}
                    sx={{ mt: 3 }}
                    onChange={(e, value) => {
                        if (value !== null) {
                            const item = {
                                id: value['id'],
                                title: value['title'],
                                price: value['price'],
                                quantity: 1
                            }
                            setCart([...cart, item])
                        }
                    }}
                    renderInput={ params => (
                        <TextField { ...params } size='small' id='products' label='Genre' name='products' required />
                    )}
                />

                <Box sx={{ mt: 8, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        onClick={addBook}
                        color='error'
                        variant='outlined'
                    >Add</Button>
                </Box>
            </Box>
        </Box>
    )
}
