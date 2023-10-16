import React, { useEffect, useState } from 'react'
import SidePanel from './SidePanel'
import { Backdrop, Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NewOrder from './AddBooks';
import store from '../features/storage';
import AdminNavbar from './AdminNavbar';
import AddBooks from './AddBooks';
import AddUsers from './AddUsers';
import axios from 'axios';


export default function Users() { 
    const [users, setUsers] = useState([]);

    const token = localStorage.getItem('jwtToken');

    const headers = {
        'Authorization': `Bearer ${token}`
      };

    useEffect(() => {
        fetchUsers();
    }, []); 

    const fetchUsers = async () => {
        try {   
            console.log(headers);
            const response = await axios.get('http://localhost:8080/api/v1/user/get', { headers : headers});
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (uid) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/user/delete/${uid}`, { headers : headers});
            fetchUsers();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <>
            <AdminNavbar />
            <Box sx={{ mt: '95px', height: 'calc(100vh - 95px)', width: '100%', display: 'flex' }}>
                <SidePanel />
                <Box sx={{ height: '100%', width: 'calc(100% - 325px)' }}>

                    <Box sx={{ mt: 8, ml: 3, mr: 3, overflowY: 'hidden', maxHeight: '700px' }}>
                        <Table sx={{ backgroundColor : 'whitesmoke'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>User ID</TableCell>
                                    <TableCell>User Name</TableCell>
                                    <TableCell>Email ID</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    users.map((user) => (
                                        <TableRow key={user.uid} hover >
                                            <TableCell>{user.uid}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                            <button onClick={() => deleteUser(user.uid)} style={{ borderRadius: 5, backgroundColor: 'red', padding: 3, color: 'white' }}>Restrict</button>
                                        </TableCell>
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
