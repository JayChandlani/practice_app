import { Box, Grid, useMediaQuery } from '@mui/material'
import Items from '../../components/Items'
import Navbar from '../navbar'

const Home = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:800px)");
    
    return (
        <Box >
            <Navbar />
            <Box p={isNonMobileScreens ? '0 10%' : undefined}>
                <Grid container mt={1} spacing={0} rowGap='1rem' >
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                </Grid>
            </Box>

        </Box>
    )
}

export default Home