import { Box, IconButton, InputBase, Typography, useMediaQuery } from '@mui/material'
import { Favorite, Login, Logout, Search, ShoppingBag } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../../state'

const Navbar = () => {
    const navigate = useNavigate();
    const isNonMobileScreen = useMediaQuery("(min-width:800px)");
    const auth = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(setLogout());
    }
    return (
        <Box sx={{
            backgroundColor: "secondary.light",
            p: "0.5rem 2rem",
            display: "flex",
            justifyContent: "space-between",
        }
        } >
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
                alignItems: "center"
            }}>
                <Typography
                    variant='h2'
                    onClick={() => navigate("/")}
                    sx={{
                        "&:hover": {
                            color: 'primary.light',
                            cursor: "pointer",
                        },
                    }}>
                    Navbar
                </Typography>
                {isNonMobileScreen &&
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "9px",
                        gap: "3rem",
                        padding: "0.1rem 1.5rem",
                        backgroundColor: "secondary.main",
                        '&:hover': {
                            backgroundColor: 'secondary.dark',
                            opacity: [0.9, 0.8, 0.7]
                        }

                    }}>
                        <InputBase placeholder="Search..." />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </Box>}
            </Box>
            <Box sx={{
                backgroundColor: "secondary.light",
                p: "0.5rem 2rem",
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem"
            }
            }>
                <IconButton onClick={() => auth ? navigate('/cart') : navigate('/auth')}>
                    <ShoppingBag sx={{ fontSize: "25px" }} />
                </IconButton>
                <IconButton>
                    <Favorite sx={{ fontSize: "25px" }} />
                </IconButton>
                <IconButton onClick={() => auth ? handleLogout() : navigate('/auth')}>
                    {auth ? <Logout sx={{ fontSize: "25px" }} /> : <Login sx={{ fontSize: "25px" }} />}
                </IconButton>
            </Box>
        </Box >
    )
}

export default Navbar