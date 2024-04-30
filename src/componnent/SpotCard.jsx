import React from 'react';
import { Link } from 'react-router-dom';

const SpotCard = ({spotData}) => {

// console.log(spotData);


    const {_id, userEmail, image, tourists_spot_name, country_Name, location, cost, seasonality, travel_time} = spotData;




    return (
        <div className=''>
         <div className=' bg[#000000ad] shadow-2xl mt-5 '>
         <div><img className='h-52 w-full' src={image} alt="" /></div>
           <div className='p-5'>
            <h1 className='text-4xl'>{tourists_spot_name}</h1>
            <p>{country_Name}</p>
            <p>{location}</p>
            <p>{seasonality}</p>
            <p>{travel_time}</p>
            <p>{userEmail}</p>
           </div>
           <div className='flex justify-end'>
            <Link to={`/details/${_id}`} className='py-1 px-5 text-orange-500'>Details</Link>
           </div>
           
         </div>
         
        </div>
    );
};

export default SpotCard;