import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';

const AllTouristSpot = () => {
    const spotdata = useLoaderData();
    // const {_id, photo, spotName, countryName, location, cost, seasonality, time, perYear, email, userName, description} = spotData;

    return (
      <div >
          <div className='grid grid-cols-3 gap-4 max-w-[1280px] mx-auto '>
         {
            spotdata.map((spot) => 
            
                <div className=' bg[#000000ad] mt-5 shadow-2xl pb-4 '>
                  <div><img className='h-52 w-full' src={spot.image} alt="" /></div>
                  <div className='p-5'>
                    <h1 className='text-4xl'>{spot.tourists_spot_name}</h1>
                    <p>{spot.country_Name}</p>
                    <p>{spot.location}</p>
                    <p>{spot.seasonality}</p>
                    <p>{spot.travel_time}</p>
                  </div>
                  <div className='flex justify-end'>
                    <Link to={`/details/${spot._id}`} className='py-1 px-5 text-orange-500'>Details</Link>
                  </div>
                </div>
            )
         }
         
        </div>
      </div>
    );
};

export default AllTouristSpot;