import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
import { product } from "../../app/models/product";
interface props{
    product:product;
}
export default function ProductCard({product}:props){
    return(
<Card>
    <CardHeader
    avatar={
        <Avatar sx={{bgcolor: 'primary.main'}}>
            {product.name.charAt(0).toUpperCase()}
        </Avatar>
    }
    title={product.name }
    titleTypographyProps={{
        sx:{fontWeight:'bold',color:'primary.main'}
    }}
    />

      <CardMedia
        sx={{height:140,backgroundSize:'contain',bgcolor:'primary.main'}}
        image={product.pictureUrl}
        title={product.name }
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5" >
          $ {(product.price/100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand}/{product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>

    )
}