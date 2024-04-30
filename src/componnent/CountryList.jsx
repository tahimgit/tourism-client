import React from 'react';
import { Link } from 'react-router-dom';

const names = {
    Bangladesh: "https://cdn.pixabay.com/photo/2019/12/12/15/14/bangladesh-4690975_640.jpg",
    Thailand: "https://media.istockphoto.com/id/467599830/photo/beaty-limestone-rock.jpg?s=612x612&w=0&k=20&c=tlY8kBdaAWTe89Rd1DCr8Vuy9QTG2QIs66bNzuzypfI=",
    Indonesia: "https://img.freepik.com/free-photo/temple-gates-lempuyang-luhur-temple-bali-indonesia_335224-367.jpg",
    Malaysia: "https://t4.ftcdn.net/jpg/01/00/21/83/360_F_100218316_WbRzPWf4xNTI2xUfljBxKv7R3RILjVq6.jpg",
    Vietnam: "https://static.independent.co.uk/2022/10/27/16/iStock-180697190.jpg",
    Cambodia: "https://thumbs.dreamstime.com/b/panorama-view-angkor-wat-temple-siem-reap-cambodia-ancient-khmer-architecture-sunset-40397542.jpg"
}
const CountryList = ({counList}) => {
    const {name} = counList
  return (
    <Link to={`/country-spot/${name}`}>
    <div className="bg-cover bg-center relative" style={{ backgroundImage: `url(${names[name]})`, height: '300px' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold">{name}</h3>
          {/* <p className="mt-2">{details}</p> */}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CountryList;
