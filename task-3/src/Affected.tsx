import axios from "axios";
import React, { useEffect, useState } from "react";
import './Affected.css'


interface CountryData {
  country: string;
  population :number;
  cases: number;
  deaths: number;
  recovered: number;
}
export const Affected: React.FC = (): JSX.Element => {
    const [country,setCountry]=useState<string>('India');
    const [countryData,setCountryData]=useState<CountryData | null>(null)

    useEffect(()=>{
        
        const fetchData=async()=>{
            console.log("hello");
            const response=await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);

            setCountryData(response.data)
            console.log(response.data);
            console.log(countryData);
        }
        fetchData();
    },[])

    const handleCountryChange=(event:any)=>{
        setCountry(event.target.value);
    }
  return (
    <div className="first">
      <h1> Affected </h1>

      <div>
        <label htmlFor="countrySelect">Select Country:</label>
        <select id="countrySelect" value={country} onChange={handleCountryChange}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          
        </select>
      </div>

      {countryData && (
        <div className="countrydata">
          <h2>{countryData.country}</h2>
          <p>Population: <span>{countryData.population}</span></p>
          <p>Cases: <span>{countryData.cases}</span></p>
          <p>Deaths: <span>{countryData.deaths}</span></p>
          <p>Recovered: <span>{countryData.recovered}</span></p>
        </div>
      )}



    </div>
  );
};
