import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCart } from '../state';


const Items = ({ productId, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(state => state.user);

  return (
    <Grid md={2} xs={6} p='1rem'>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={image}
            alt="green iguana"
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'space-around' }}>
          <Button
            onClick={() => auth ? dispatch(setCart()) : navigate('/auth')}
            variant='outlined'
            size="small"
            color="primary">
            Add
          </Button>
          <Button
            variant='outlined'
            size="small"
            color="secondary">
            Wish
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default Items;