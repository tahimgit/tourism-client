
import { Link, useLoaderData } from "react-router-dom";
import AutoPlay from "./Slider";
import SpotCard from "./SpotCard";
import { useEffect, useState,} from "react";
import TestimonialSection from "./Testimonial";
import GetInTouchSection from "./GetInTouch";
import CountryList from "./CountryList";
import AutoCarousel from "./Caurosel";




const Home = () => {
   
    const spotdata = useLoaderData();
    const [countryList, setCountryList] = useState([])
    // console.log(spotdata);
    useEffect(()=>{
      
        fetch(`https://tourism-tourisspots.vercel.app/countries`)
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            
            setCountryList(data)
        //    return setLoadding(false)
           
        })
    },[]);
    // const [spot, setSpotdata] = useState([]);
    const [con, setCon]= useState(spotdata);
    


    const handleFilter = (name)=>{
        setCon([])
       if(name){
        const filtered = con.filter(country =>country?.countryName === name);
         return setCon(filtered);
       }
     
        
       
    }
  


        // useEffect(()=>{
        //     fetch('https://tourism-tourisspots.vercel.app/addspot')
        //     .then(res=> res.json())
        //     .then(data=> setSpotdata(data))
        // },[])  
        // console.log(spot);
 
    console.log(con);
    return (
        <div className='overflow-x-hidden	'>
        <div>
            <AutoCarousel />
        </div>
        <div className="">
        <h1 className="text-6xl text-center my-5 mt-10">Most Recommended Place For You</h1>
        <hr className="w-2/3 mx-auto border-gray-600" />
        </div>
       
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-4">
        {
                con.map(spot=><SpotCard key={spot._id} spotData={spot}></SpotCard>)
            }
        </div>
        <h1 className="text-6xl text-center my-5 mt-10">Top Visitors Countries</h1>
        <hr className="w-2/3 mx-auto border-gray-600" />
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-4 my-6">
            {
                countryList.map(coun => <CountryList key={coun._id} counList={coun} />)
            }
        </div>
        <div>

        </div>
        <div className="px-12 py-12">
        <h1 className="text-6xl text-center my-5 mt-10">Happy Visitors</h1>
        <hr className="w-2/3 mx-auto border-gray-600" />
            <TestimonialSection />
        </div>
        <div className="px-12">
            <GetInTouchSection />
        </div>
        </div>

    );
};

export default Home;