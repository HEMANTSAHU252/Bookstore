import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
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
const filterData = list.filter((data) => data.category === "free");

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className=' dark:text-white font-semibold text-black text-xl pb-2'>Free Offered Course</h1>
        <p className='dark:text-white text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus minus architecto id aliquid reprehenderit veritatis earum et aspernatur iusto quisquam tempora, atque adipisci quasi placeat?</p> 
        </div>

    <div>
    <div className="slider-container">
      <Slider {...settings}>
         {filterData.map((item)=>(
          <Cards item={item} key= {item.id}/>
         ))}
      </Slider>
              </div>
    </div>
    </div>

    </>
  )
}

export default Freebook