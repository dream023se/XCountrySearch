import logo from './logo.svg';
import './App.css';
import {getCountryFlag}  from './API/API';
import Countries from './component/Countries/Countries'
import { useEffect } from 'react';
import { useState } from 'react';
function App() {

  const[flagData,setflagData]=useState([])
  
  const getData = async()=>{
    const response= await getCountryFlag();
    setflagData(response)
  }
  useEffect(()=>{
    getData();
  },[])
    return (
      <>
      <Countries data={flagData}/>
      </>
     
    );
  }
  


export default App;
//https://x-country-search-ecru.vercel.app/
