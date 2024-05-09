import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'
import styles from './Countries.module.css';
const Countries = ({data}) => {
    console.log(data)
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
    const filteredCountries = data.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      
    );
  return (
    <>
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search for countries..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
    <div className={styles.row}>
      {data.length>0?(filteredCountries.map((items)=><Card data={items}/>)):("No Data Available")}
    </div>
    </>
  )
}

export default Countries;