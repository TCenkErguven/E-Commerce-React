import * as React from 'react';
import Category from '../Category/Category';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import "../../styles.css";
import Box from '@mui/material/Box';



export default function Product(props) {

    return (
        <Card sx={{ maxWidth: 700, height: 500 }} className='card'>

            <CardMedia
                className='cardMedia'
                component="img"
                image={
                    props.item === undefined
                        ? "https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
                        : props.item.imageUrls[0]
                    //Diğer picler gelecek
                }
                alt="Product Pic"
            />
            <CardContent>
                <div className='cardPrice'>
                    {props.item === undefined
                        ? "Most impressive item at the market"
                        : props.item.price + " TL"}
                </div>
                <Box display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {props.item === undefined
                        ? "Most impressive item at the market"
                        : props.item.categoryNames.map((element) => (
                            <Category item={element} />
                        ))}
                </Box>
                <Typography className='cardContent'>
                    {props.item === undefined
                        ? "Most impressive item at the market"
                        : props.item.description}
                </Typography>

            </CardContent>
            <div className='cardAddDrop'>
                <Button className='cardAddDropButtonAdd' >
                    <AddIcon style={{
                        color: "#C07F00"
                    }} />
                </Button>
                <Button className='cardAddDropButtonDrop'>
                    <RemoveIcon style={{
                        color: "#000000"
                    }} />
                </Button>

            </div>
        </Card >
    );
}