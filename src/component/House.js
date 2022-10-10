import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
export default function House(props) {
  const itemtitle={
    fontSize:"18px",
    fontWeight : 'bold',
    margin: "20px",
    flexDirection: 'column',
    alignItems: 'center',
    height:"150px",
    width: '200px',
    overflow : 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    webkitLineClamp: '5',
    webkitBoxOrient: 'vertical'
  }
  const intro={
    fontSize:"18px",
    fontWeight : 'bold',
    margin: "20px",
    flexDirection: 'column',
    alignItems: 'center',
    height:"160px",
    width: '1000px',
    overflow : 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    webkitLineClamp: '6',
    webkitBoxOrient: 'vertical'
  }
  return (

      <div className="flex items-center justify-left">
          <picture className="flex items-center justify-left max-w-[200px] sm:max-w-[250px] aspect-square m-2">
            <img
              src={`${props.url}`}
              alt={props.name}
              loading="lazy"
              className="w-full h-full rounded-full shadow-lg object-cover"
            ></img>
          </picture>
          <div className="g-info" style={itemtitle}>
          <div className="text-xl md:text-2xl font-medium">{props.name}</div>
            <div className="text-md md:text-lg font-normal">價格:{props.price}</div>
            <div className="text-md md:text-lg font-normal"><StarIcon/>{props.score}</div>
            <div className="text-md md:text-lg font-normal"><LocationOnIcon/>台北市</div>
          </div>
            <div className="g-info" style={intro}>{props.intro}</div>
        </div>

  );
}
