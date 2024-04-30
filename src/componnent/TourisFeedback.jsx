import React from 'react';
const touristFeedbackData = [
    {
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      location: 'New York, USA',
      comment: 'Absolutely stunning experience! The scenery was breathtaking and the tour guide was extremely knowledgeable.',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      location: 'London, UK',
      comment: 'Had a fantastic time exploring the city with this tour company. Highly recommended for anyone visiting!',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Michael Johnson',
      location: 'Sydney, Australia',
      comment: 'The best tour I have ever been on! The guides were friendly and the itinerary was well-planned. Will definitely book again!',
    },
    {
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Emily Brown',
        location: 'Paris, France',
        comment: 'Wonderful experience! The tour was well-organized and informative. I had an amazing time!',
      },
      {
        avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Daniel Lee',
        location: 'Tokyo, Japan',
        comment: 'Highly recommended! The tour guides were friendly and helpful, and I learned a lot about the city.',
      },
      {
        avatar: 'https://images.unsplash.com/photo-1603988089669-c041ac2fe196?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sophia Garcia',
        location: 'Barcelona, Spain',
        comment: 'Amazing tour! The sights were incredible, and the tour guide was very knowledgeable. I would definitely do it again!',
      },
  ];
  
const TourisFeedback = () => {
    return (
        <div className='min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {touristFeedbackData.map(ta => 
        <div className="bg-white shadow-md rounded-lg overflow-hidden" key={ta.name}>
        <div className="p-6">
          <div className="flex items-center">
            <img className="h-12 w-12 rounded-full" src={ta.avatar} alt={ta.name} />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{ta.name}</h3>
              <p className="text-sm text-gray-600">{ta.location}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{ta.comment}</p>
        </div>
      </div>
        )}
        </div>
    );
};

export default TourisFeedback;<h1 className='text-4xl'>Touris Feedback</h1>