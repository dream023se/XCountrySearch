import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './Cards.module.css'
import Box from '@mui/material/Box'

const Cards = ({data}) => {
  return (
    <div>
        <Box className={styles.cardContainer}>
      <Card className={styles.customCard}>
      <CardActionArea>
        <CardMedia
        className={styles.cardImage}
          component="img"
          height="100"
          width="90"
          image={data.flags.png}
          alt={data.flags.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {data.name.common}
          </Typography>
          <Typography className={styles.cardText} color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </div>
  )
}

export default Cards