import React from 'react'
import styles from './Card.module.css';
const Card = ({imgUrl,name,altUrl}) => {
  return (
    <div className={styles.countryCard}>
        
      <img className={styles.cardImage} src={imgUrl} alt={altUrl}/>
      <h2>{name}</h2>
    </div>
  )
}

export default Card
