import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCart } from '../state';


const Items = () => {
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
            image="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg"
            alt="green iguana"
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species,
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