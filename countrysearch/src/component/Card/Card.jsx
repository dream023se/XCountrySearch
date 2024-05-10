import React from 'react'
import styles from './Card.module.css';
const Card = ({data}) => {
  return (
    <div className={styles.countryCard}>
        
      <img className={styles.cardImage} src={data.flags.png} alt={data.flags.alt}/>
      <h2>{data.name.common}</h2>
    </div>
  )
}

export default Card
