import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState,} from "react";
import SpotCard from './SpotCard';
const CountrySpot = () => {
    const {name} = useParams();
    const [countryList, setCountryList] = useState([])
    useEffect(()=>{
      
        fetch(`https://tourism-tourisspots.vercel.app/countries-spot/${name}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            
            setCountryList(data)
        //    return setLoadding(false)
           
        })
    },[]);
  return (
    <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-4">
        {
                countryList.map(spot=><SpotCard key={spot._id} spotData={spot}></SpotCard>)
        }
    </div>
  );
};

export default CountrySpot;
