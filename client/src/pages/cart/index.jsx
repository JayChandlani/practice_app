
import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartItems from '../../components/CartItems';

const Cart = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box sx={{
        backgroundColor: "secondary.light",
        p: "0.5rem 2rem",
        textAlign: "center"
      }}>
        <Typography
          variant='h2'
          onClick={() => navigate('/')}
          sx={{
            '&:hover': {
              backgroundColor: 'secondary.dark',
              cursor: 'pointer'
            }
          }}>
          Navbar
        </Typography>
      </Box>
      <Grid container mt={1} spacing={0} rowGap='1rem' >
        <CartItems />
      </Grid >
    </Box>
  )
}

export default Cart