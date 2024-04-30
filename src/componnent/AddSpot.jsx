import React, { useContext } from 'react';
import { AuthContext } from './Authprovider/Authprovider';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AddSpot = () => {

    const {user, loadding} = useContext(AuthContext)

    if(loadding){
        return (
            <div className='flex justify-center items-center'>
                <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
            </div>
          );
    }

    const handleAdd = e =>{
        e.preventDefault();

        const form = e.target;
        const image = form.url.value;
        const tourists_spot_name = form.spotName.value;
        const country_Name = form.countryName.value;
        const location = form.location.value;
        const average_cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.time.value;
        const totaVisitorsPerYear = form.perYear.value;
        // const userEmail = form.email.value;
        const short_description = form.descreption.value;
        const userName = user.displayName;
        const userEmail = user.email;
        const newData = {userEmail, image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totaVisitorsPerYear, userEmail, userName, short_description};


        fetch('https://tourism-tourisspots.vercel.app/addTouristSpot',{
            method: 'POST',
            headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Turists spot addeded successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    return (
    <div className='bg[#000000ad]'>
<div className='max-w-[1280px] mx-auto content-center min-h-scree' >
<form onSubmit={handleAdd} className='lg:w-4/5 mx-auto bg-black shadow-sm shadow-gray-700 px-6  py-10 mb-10' action="">

<h1 className='text-5xl text-center text-white font-bold mb-4'>Add Your Tourists Spot</h1>
<hr className=' border-gray-500 border-2' />

<div className='justify-center grid grid-cols-2 gap-4 mt-32'>
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]' type="url" name="url" placeholder='Photo URL' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="spotName" placeholder='Spot Name' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="countryName" placeholder='Country Name' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="location" placeholder='Location' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="cost" placeholder='Average Cost' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="seasonality" placeholder='Seasonality' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="time" placeholder='Trabel Time' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="perYear" placeholder='Total Visitors Per Year' id="" />
{/* <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="email" name="email" placeholder='Email' id="" /> */}
{/* <input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="userName" placeholder='User Name' id="" /> */}
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700] col-span-2'  type="text" name="descreption" placeholder='Short Description' id="" />
<input className='w-full py-1 rounded px-2 cursor-pointer bg-orange-400 text-white font-bold col-span-2 mt-8'  type="submit" name="submit" value="Add Spot" placeholder='' id="" />
</div>
              
</form>
</div>


        </div>
    );
};

export default AddSpot;