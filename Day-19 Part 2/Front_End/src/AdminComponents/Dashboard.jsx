import React, { useEffect, useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import SidePanel from './SidePanel';
import store from '../features/storage'
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom';


export default function Dashboard(props) {
    
    const[userCount, setUserCount] = useState();
    const[bookCount, setBookCount] = useState();

    const token = localStorage.getItem('jwtToken');

    const headers = {
        'Authorization': `Bearer ${token}`
      };

    useEffect(() => {
        fetchBooksCount();
        fetchUsersCount();
    }, []);

    const fetchBooksCount = async () => {
        try {   
            console.log(headers);
            const response = await axios.get('http://localhost:8080/api/v1/book/bookCount', { headers : headers});
            setBookCount(response.data);
        } catch (error) {
            console.error('Error fetching books count:', error);
        }
    };

    const fetchUsersCount = async () => {
        try {   
            console.log(headers);
            const response = await axios.get('http://localhost:8080/api/v1/user/userCount', { headers : headers});
            setUserCount(response.data);
        } catch (error) {
            console.error('Error fetching user count:', error);
        }
    };

    return (
        
        <Box sx={{ mt: '95px', height: 'calc(100vh - 95px)', display: 'flex' }} >
            <SidePanel />
            <Box sx={{ m: 5, display: 'flex', gap: 5 }}>
            <Link to='/adminUsers'>
                <Card sx={{ maxWidth: 345, maxHeight: 180 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Users'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={ 
                                <Typography>{ userCount }</Typography>
                            }
                        />
                        <CardMedia
                            component='img'
                            height='180'
                            // image={orderImg}
                            sx={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography variant='body2'>
                                This User card is used to track and manage individual users. It includes all of the relevant information about the users.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
                
                <Link to='/adminBooks'>
                <Card sx={{ maxWidth: 345, maxHeight: 180 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Books'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={
                                <Typography>{ bookCount }</Typography>
                            }
                        />
                        <CardMedia
                            component='img'
                            height='180'
                            // image={workerPng}
                            sx={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography variant='body2'>
                                This order card is used to manage individual books. It includes all of the relevant information about the books.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>

                    {/* <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                        <CardActionArea>
                            <CardHeader
                                title='Events'
                                action={
                                    <IconButton>
                                        <EastIcon />
                                    </IconButton>
                                }
                                subheader={
                                    <Typography>{events.length}</Typography>
                                }
                            />
                            <CardMedia
                                component='img'
                                height='180'
                                // image={userPng}
                                sx={{ objectFit: 'contain' }}
                            />
                            <CardContent>
                                <Typography variant='body2'>
                                    This order card is used to track and manage individual events. It includes all of the relevant information about the events.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card> */}
            </Box>
        </Box>
    )
}
