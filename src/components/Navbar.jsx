import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';

import navImg1 from '../assets/mulhere.png';
import navImg2 from '../assets/weher.png';

// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "Cursos",
      to: "/about"
    },
    {
        text: "Login",
        to: "/contact"
    },
    {
        text:"Quiz",
        to: "/quiz"
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'purple', 
        }}
        elevation={0}
        >
            <StyledToolbar>
                
                <img src={navImg1} alt="mulheres conectadas" style={{
                        width: "15%",
                        height: "120px",
                        marginBottom: -2,
                        marginTop: 10,
                        align : 'left',
                    }} />
                <img src={navImg2} alt="mulheres conectadas" style={{  width: "10%",
                        height: "89px",
                        marginBottom: -2,
                        marginTop: 10,
                        align : 'left',
                    }} />

                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: 'purple',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
