import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json';
import Cards from './cards';

function Freebook() {

    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='mx-auto px-4 md:px-20'>
                <div><h1 className='text-3xl py-6 font-bold'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolores facere corporis adipisci commodi perferendis nemo porro corrupti aperiam, non quas dicta excepturi doloremque iusto molestiae ducimus sapiente. Illo, quae!</p>
                </div>
                <div className=''>
                    <Slider {...settings}>
                        {filterData.map((item)=>(
                            <Cards item={item} key={item.id}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook