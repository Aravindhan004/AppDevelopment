import React, { useState } from 'react'
import SidePanel from './SidePanel'
import { Backdrop, Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NewOrder from './AddBooks';
import store from '../features/storage';
import AdminNavbar from './AdminNavbar';
import AddBooks from './AddBooks';
import AddUsers from './AddUsers';


export default function Users() { 
    const [open, setOpen] = useState(false)
    
    const headCells = [
        {
            id: 'user_id',
            numeric: true,
            disablePadding: true,
            label: 'User ID'
        },
        {
            id: 'name',
            numeric: false,
            disablePadding: false,
            label: 'Name'
        },
        {
            id: 'email',
            numeric: true,
            disablePadding: true,
            label: 'Email'
        },
        // {
        //     id: 'dop',
        //     numeric: true,
        //     disablePadding: true,
        //     label: 'DOP'
        // }
    ]

    const rows = store.getState().admin.users

    return (
        <>
            <AdminNavbar />
            <Box sx={{ mt: '95px', height: 'calc(100vh - 95px)', width: '100%', display: 'flex' }}>
                <SidePanel />
                <Box sx={{ height: '100%', width: 'calc(100% - 325px)' }}>
                    <Button onClick={() => setOpen(true)} sx={{ mt: 5, ml: 4 }} color='primary' variant='contained' startIcon={<AddShoppingCartIcon />}>Add Users</Button>

                    <Backdrop
                        sx={{ color: '#fff', zIndex: 1 }}
                        open={open}
                    >
                        <AddUsers setOpen={setOpen} />
                    </Backdrop>

                    <Box sx={{ mt: 8, ml: 3, mr: 3, overflowY: 'scroll', maxHeight: '700px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        headCells?.map((headCell, id) => (
                                            <TableCell
                                                key={id}
                                                align='left'
                                                padding={headCell.disablePadding ? 'none' : 'normal'}
                                            >
                                                { headCell.label }
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rows?.map((row, id) => (
                                        <TableRow key={id} hover >
                                            <TableCell scope='row'>{row?.id}</TableCell>
                                            <TableCell>{row?.name}</TableCell>
                                            <TableCell>{row?.email}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
