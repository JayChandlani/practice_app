import { Typography, Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Form from './Form';

const Auth = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { palette } = useTheme()
    return (
        <Box backgroundColor={palette.background.alt} width='100%' height={"100vh"}>
            <Box sx={{
                backgroundColor: "secondary.light",
                p: "0.5rem 2rem",
                textAlign: "center"
            }}>
                <Typography variant='h2'>
                    Navbar
                </Typography>
            </Box>
            <Box
                width={isNonMobileScreens ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={palette.primary.dark}
            >
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                    Welcome to Socipedia, the Social Media for Sociopaths!
                </Typography>
                <Form />
            </Box>
        </Box>
    )
}

export default Auth