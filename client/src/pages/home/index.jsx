import { Box, Grid, useMediaQuery } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Items from '../../components/Items'
import { setProducts } from '../../state'
import Navbar from '../navbar'

const Home = () => {
    const dispatch = useDispatch();
    const isNonMobileScreens = useMediaQuery("(min-width:800px)");
    const products = useSelector(state => state.products);

    const getItems = async () => {
        const res = await fetch("http://localhost:3001/products", {
            method: "GET"
        });
        const data = await res.json();
        dispatch(setProducts({ products: data.product }))
    }

    useEffect(() => {
        getItems() // eslint-disable-next-line
    }, [])

    return (
        <Box >
            <Navbar />
            <Box p={isNonMobileScreens ? '0 10%' : undefined}>
                <Grid container mt={1} spacing={0} rowGap='1rem' >

                    {products.length ? products.map(({ _id, title, price, description, category, image }) => {
                        return (<Items
                            key={_id}
                            productId={_id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />)
                    }) : ""}

                </Grid>
            </Box>

        </Box>
    )
}

export default Home