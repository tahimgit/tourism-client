import React from 'react';
import { FaStarHalf } from "react-icons/fa";


const Testimonial = ({ testimonial }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStarHalf key={i} className="h-5 w-5" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">{testimonial.comment}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      avatar: 'https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=1024x1024&w=is&k=20&c=8mgK2Kq73o8DIjazvLmEGkhx2p_7P5r3mvpbIM6q5cA=',
      rating: 5,
      comment: 'Amazing product! Impressive ! It extreme my expectations. I highly recommend it to everyone.',
    },
    {
      name: 'Jane Smith',
      avatar: 'https://media.istockphoto.com/id/866474934/photo/young-handsome-businessman-wearing-white-shirt-against-white-background.jpg?s=1024x1024&w=is&k=20&c=2Nolr_yYTuJdYB2cXPMMH4zIv6H46Wgt9lJs7u-nHek=',
      rating: 4,
      comment: 'Great service and excellent customer support. Will definitely use it again!',
    },
    {
      name: 'Michael Johnson',
      avatar: 'https://media.istockphoto.com/id/486320806/photo/man-laugh-closeup.jpg?s=1024x1024&w=is&k=20&c=9ELdgN-k3bQCM7D6cBbErdHM14ws1DP-FNUZcstNGKo=',
      rating: 5,
      comment: 'I love how easy it is to use. It saved my a lot of time and effort. Thank you!',
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialSection;
