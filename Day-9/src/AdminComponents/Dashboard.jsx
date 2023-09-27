import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
// import userPng from '../data/images/user-avatar.png'
// import workerPng from '../data/images/worker-avatar.png'
import EastIcon from '@mui/icons-material/East';
// import orderImg from '../data/images/person-shopping.jpg'
// import favImg from '../data/images/pngwing.com.png'
import SidePanel from './SidePanel';
import store from '../features/storage'


export default function Dashboard(props) {
    
    const users = store.getState().admin.users
    const books = store.getState().admin.books
    const events = store.getState().admin.events

    return (
        <Box sx={{ mt: '95px', height: 'calc(100vh - 95px)', display: 'flex' }}>
            <SidePanel />
            <Box sx={{ m: 5, display: 'flex', gap: 5 }}>
                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Users'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={
                                <Typography>{ users.length }</Typography>
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

                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Books'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={
                                <Typography>{books.length}</Typography>
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

                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
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
                </Card>
            </Box>
        </Box>
    )
}
