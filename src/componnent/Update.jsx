import React, { useContext } from 'react';
import { AuthContext } from './Authprovider/Authprovider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Update = () => {
    
    const {user, loadding} = useContext(AuthContext)

    const updateSpot = useLoaderData();
    console.log(updateSpot);  


    const {_id, userEmail,userName, short_description, image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time,totaVisitorsPerYear} = updateSpot;


    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const photo = form.url.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const perYear = form.perYear.value;

        const description = form.descreption.value;
        // const email = user.email;
        const updateDate = {userEmail, image: photo, tourists_spot_name: spotName, country_Name: countryName, location, average_cost: cost, seasonality, travel_time: time, totaVisitorsPerYear: perYear, userName, short_description:description};

        console.log(updateDate);


        
        fetch(`https://tourism-tourisspots.vercel.app/touristspots/${_id}`,{
            method: 'PUT',
            headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateDate)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Turists spot Update successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    return (
    <div className='bg-black'>
        
    <div className='max-w-[1280px] mx-auto content-center min-h-scree' >
    <form onSubmit={handleUpdate} className='lg:w-4/5 mx-auto bg-black shadow-sm shadow-gray-700 px-6  py-10 mb-10' action="">

        <h1 className='text-5xl text-center text-white font-bold mb-4'>Update Your Tourists Spot</h1>
        <h1 className='text-2xl'>{userEmail}</h1>
        <hr className=' border-gray-500 border-2' />

        <div className='justify-center grid grid-cols-2 gap-4 mt-32'>
            <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="url"   defaultValue={image}       name="url"          placeholder='Photo URL' id="" />
            <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={tourists_spot_name}     name="spotName"    placeholder='Spot Name' id="" />
            <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={country_Name} name="countryName"  placeholder='Country Name' id="" />
            <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={location}    name="location"     placeholder='Location' id="" />
            <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={average_cost}        name="cost"         placeholder='Average Cost' id="" />
            <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={seasonality} name="seasonality"  placeholder='Seasonality' id="" />
            <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={travel_time}        name="time"         placeholder='Trabel Time' id="" />
            <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={totaVisitorsPerYear}     name="perYear"      placeholder='Total Visitors Per Year' id="" />
            <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700] col-span-2' type="text"   defaultValue={short_description}  name="descreption" placeholder='Short Description' id="" />
            <input className='w-full py-1 rounded px-2 cursor-pointer bg-[#f8731a] text-white font-bold col-span-2 mt-8'  type="submit" name="submit" value="Add Spot" placeholder='' id="" />
        </div>
              
        </form>
        </div>


        </div>
    );
};

export default Update;