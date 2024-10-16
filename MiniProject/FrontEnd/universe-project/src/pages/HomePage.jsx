import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/header/Navbar';

import education from '../assets/education.jpg'
import university from '../assets/university.jpg'
import working from '../assets/working.jpg'
import Footer from '../components/bottom/Footer';

const HomePage = () => {
    const carouselItems = [
        {
            id: 1,
            title: "Welcome to our university",
            description: "A place for learning and growth and become the best of yourself",
            imageUrl: university
        },
        {
          id: 2,
          title: 'Explore Our Courses',
          description: 'Find the right course for you and learn more about our courses',
          imageUrl: education
        },
        {
          id: 3,
          title: 'Meet Our Teachers',
          description: 'Highly qualified and dedicated teachers for the University',
          imageUrl: working
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      };

    return (
        <div className="p-4">
            <Navbar />
            <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Our University</h1>

            <div className="mb-8">
                <Slider {...settings}>
                    {carouselItems.map((item) => (
                        <div key={item.id} className="relative">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-96 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <p className="mt-2">{item.description}</p>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <p className="text-lg">
                At our university, we provide a variety of courses to help you achieve your educational goals.
                Our experienced teachers are here to support you every step of the way.
            </p>

            <Footer />
        </div>
    );
};

export default HomePage;
