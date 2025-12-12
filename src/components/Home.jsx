import '../App.css'
import { useState, useEffect } from 'react'

import home_img_1 from '../assets/images/home-img-1.png'
import home_img_2 from '../assets/images/home-img-2.png'
import home_img_3 from '../assets/images/home-img-3.png'
import home_img_4 from '../assets/images/home-img-4.png'

function Home() {

  const images = [home_img_1, home_img_2, home_img_3, home_img_4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='mx-10 my-14 flex flex-col gap-5 items-center transition-all duration-500 scroll-mt-16 lg:flex lg:flex-row justify-center lg:items-center'
      id='home'
    >

      {/* Home data */}
      <div className='text-black font-medium text-center flex flex-col gap-5 items-center w-96'>

        <h1 className='text-4xl font-bold lg:text-5xl'>Travel <br /> Around <br /> The World</h1>
        <p className='text-sm'>Explore the best beautiful tourist spots in
          the countries and see the world on all your
          amazing adventures.</p>

      </div>


      {/* Slider */}
      <div className="relative mt-5 overflow-hidden rounded-3xl max-w-lg max-h-fit sm:max-w-lg lg:max-w-xl">

        <div className="flex transition-transform duration-500 mt-5"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <img key={i}
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full rounded-3xl"
            />
          ))}
        </div>

        {/* Buttons */}
        <button className="absolute top-1/2 left-4 text-xl font-semibold  bg-black/60 text-white px-3 py-2 rounded-full"
          onClick={prevSlide}
        >
          <i className="ri-arrow-left-line"></i>
        </button>

        <button className="absolute top-1/2 right-4  text-xl font-semibold bg-black/60 text-white px-3 py-2 rounded-full"
          onClick={nextSlide}
        >
          <i className="ri-arrow-right-line"></i>
        </button>

      </div>

    </section>
  )
}

export default Home