import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authprovider/Authprovider";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ListCard from "./ListCard";


const MyLIst = () => {
    const {user, }= useContext(AuthContext)

    const [list, setList] = useState([])
    const [loadding, setLoadding]= useState(true);



    console.log(user.email);

    useEffect(()=>{
      
        fetch(`https://tourism-tourisspots.vercel.app/touristspots/${user?.email}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            
            setList(data)
           return setLoading(false)
           
        })
    },[user]);

    if(loadding){
      return (
        <div className='min-h-screen items-center justify-center flex'>
            <Box  sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </div>
        );
  }

  

    return (
        <div className='min-h-screen text-center'>
          <div className="">
          {
               list.map(lists=><ListCard key={lists._id}
                 list={lists}
                 
               ></ListCard>)
               
            }
          </div>
            
        </div>
    );
};

export default MyLIst;<h1 className='text-4xl'>My List</h1>