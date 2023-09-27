import React from 'react'
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import { Link, useHistory } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupIcon from '@mui/icons-material/Group';
import ReportIcon from '@mui/icons-material/Report';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import store from '../features/storage';
import { logout } from '../features/admin';


export default function SidePanel(props) {
    
    const history = useHistory()
    // const worker = store.getState().store.worker

    return (
        <Paper sx={{ position: 'static', height: '100%', width: '275px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={3}>
            <List sx={{ mt: 6 }}>
                {/* dashboard */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/admin'>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItemButton>
                </ListItem>

                {/* users */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/adminUsers'>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary='Users' />
                    </ListItemButton>
                </ListItem>

                {/* books */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/adminBooks'>
                        <ListItemIcon>
                            <EngineeringIcon />
                        </ListItemIcon>
                        <ListItemText primary='Books' />
                    </ListItemButton>
                </ListItem>

                {/* events */}
                {/* <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/adminEvents'>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary='Events' />
                    </ListItemButton>
                </ListItem> */}
            </List>

            {/* logout */}
            <Button startIcon={<LogoutIcon />} sx={{ width: '100%', mb: 12, textTransform: 'capitalize', letterSpacing: '.15rem', color: 'red' }}
                onClick={() => {
                    store.dispatch(logout())
                    history.push('/login')
            }}>Logout</Button>
        </Paper>
    )
}
