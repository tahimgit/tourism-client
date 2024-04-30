import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from './Authprovider/Authprovider';

const SpotDetails = () => {
    const {user}= useContext(AuthContext);

    const details = useLoaderData();
    const {_id} = useParams();
    const detail = details.find((detail)=> detail._id === _id);
    console.log(detail);

    const { userName, image, tourists_spot_name,totaVisitorsPerYear, country_Name, location, cost, seasonality, travel_time} = detail;


    return (
        <div className='max-w-[1280px] mx-auto '>
           <div className=' bg[#000000ad] mt-5  gap-2 border-2 border-orange-400 min-h-screen'>
         <div className='flex flex-1 border-2 border-orange-400'><img className=' w-full' src={detail?.image} alt="" /></div>


  <table className="table flex-1 ">
    {/* head */}
    <thead>
      <tr className='text-4xl text-orange-400 font-bold'>
        <th>SPOT NAME</th>
        <th> {detail?.tourists_spot_name}</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>COUNTRY NAME</td>
        <td> {detail?.country_Name}</td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>LOCATION</td>
        <td> {detail?.location}</td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>SEASONALITY</td>
        <td>{detail?.seasonality}</td>
      </tr>
      <tr>
        <td>COST</td>
        <td>{detail?.average_cost}</td>
      </tr>
      <tr>
        <td>DATE</td>
        <td>{detail?.travel_time}</td>
      </tr>
      <tr>
        <td>PER YEAR</td>
        <td>{detail?.totaVisitorsPerYear}</td>
      </tr>
      <tr>
        <td>DESCRIPTION</td>
        <td>{detail?.short_description}</td>
      </tr>
      <tr>
        <td>CREATED BY</td>
        <td>{detail?.userName}</td>
      </tr>
      
    </tbody>
  </table>
</div>
         
        </div>
    );
};

export default SpotDetails;