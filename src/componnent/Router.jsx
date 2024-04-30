import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Logins from "./Logins";
import Register from "./Register";
import ErrorPage from "./ErrorPage";
import AllTouristSpot from "./AllTouristSpot";
import MyLIst from "./MyLIst";
import TourisFeedback from "./TourisFeedback";
import PrivetRout from "./PrivetRout/PrivetRout";
import Profile from "./PrivetRout/Profile";
import AddSpot from "./AddSpot";
import SpotDetails from "./SpotDetails";
import Update from "./Update";
import Category from "./Category";
import CountrySpot from "./CountrySpot";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://tourism-tourisspots.vercel.app/latestPosts')
        },
        {
            path: '/login',
            element: <Logins></Logins>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/spot',
          element: <AllTouristSpot></AllTouristSpot>,
          loader: ()=> fetch('https://tourism-tourisspots.vercel.app/touristspots')
        },
        {
          path: '/country-spot/:name',
          element: <CountrySpot></CountrySpot>
        },
        {
          path: '/myList/',
          element:<PrivetRout> <MyLIst></MyLIst></PrivetRout>,
        },
        {
          path: '/feedback',
          element: <TourisFeedback></TourisFeedback>
        },
        {
          path: '/profile',
          element: <PrivetRout><Profile></Profile></PrivetRout>
        },
        {
          path: '/addspot',
          element:<PrivetRout><AddSpot></AddSpot></PrivetRout>
        },
        {
          path: '/details/:_id',
          element: <PrivetRout><SpotDetails></SpotDetails></PrivetRout>,
          loader: ()=> fetch('https://tourism-tourisspots.vercel.app/touristspots')
        },
        {
          path: '/update/:id',
          element: <PrivetRout><Update></Update></PrivetRout>,
          loader: ({params}) => fetch(`https://tourism-tourisspots.vercel.app/touristspots-details/${params.id}`)
        },
        // {
        //   path: '/category',
        //   element: <Category></Category>
        // }
     
      ]
    },
  ]);


  export default Router