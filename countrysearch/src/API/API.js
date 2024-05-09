import axios from 'axios';



export const getCountryFlag=async()=>{
   
    try{
    const response=await axios.get(`https://restcountries.com/v3.1/all`)

    return response.data;
    }
    catch(e)
    {
        console.log('Error fetching data:', e.message);
        
    }
}
