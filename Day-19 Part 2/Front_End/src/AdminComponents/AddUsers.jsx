import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, Divider, IconButton, List, ListItem, ListItemText, TextField, Tooltip, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import store from '../features/storage';
import { setBooks, setEvents, setUsers } from '../features/admin';


export default function AddUsers({ setOpen }) {

    const [cart, setCart] = useState([])
    const [id, setId] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)

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

    const addUser = () => {
        const user = {
            id: id,
            name: name,
            email: email,
        }

        console.log(user)

        store.dispatch(setUsers(user))
        setOpen(false)  
    }

    return (
        <Box sx={{ width: '500px', height: '300px', backgroundColor: 'white' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Tooltip title='close'>
                    <IconButton sx={{ '&:hover': { color: 'red' } }} onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ pr: 3, pl: 3 }}>
                <Box>
                    <TextField onChange={(e) => setId(e.target.value)} size='small' type='number' id='book-id' label='User ID' name='invoice-id' autoFocus required />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <TextField onChange={(e) => setName(e.target.value)} size='small' id='Title' label='Name' name='Title' required />
                        <TextField onChange={(e) => setEmail(e.target.value)} size='small' id='Author' label='Email' name='Author' required />
                    </Box>
                </Box>

                <Box sx={{ mt: 8, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        onClick={addUser}
                        color='error'
                        variant='outlined'
                    >Add</Button>
                </Box>
            </Box>
        </Box>
    )
}
