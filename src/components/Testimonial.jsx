import '../App.css'
import { useEffect, useState } from 'react'

import testimonial from '../assets/images/testimonial-img.png'
import profile_1 from '../assets/images/testimonial-profile-1.png'
import profile_2 from '../assets/images/testimonial-profile-2.png'
import profile_3 from '../assets/images/testimonial-profile-3.png'

function Testimonial() {

  const profiles = [
    { title: "Ama Dablam", description: "I was delighted to visit the country because the scenery is beautiful.The residents also welcomed me happily and with smiles.", name: "Will", role: "Photographer", profile: profile_1 },
    { title: "Mount Fuji", description: "I was delighted to visit the country because the scenery is beautiful.The residents also welcomed me happily and with smiles.", name: "Rose", role: "Influencer", profile: profile_2 },
    { title: "Nanga Parbat", description: "I was delighted to visit the country because the scenery is beautiful.The residents also welcomed me happily and with smiles.", name: "Gian", role: "Blogger", profile: profile_3 },
  ]

  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % profiles.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id='testimonials'>
      <h1 className='text-center text-3xl font-bold lg:text-4xl'>What Are <br /> They Saying?</h1>

      <div className='flex justify-center'>
        <div className='mx-10 my-10 max-w-sm flex flex-col sm:max-w-lg lg:max-w-4xl lg:flex-row lg:h-[400px] lg:items-stretch'>

          {/* LEFT IMAGE */}
          <div className='lg:w-full h-full'>
            <img 
              src={testimonial} 
              alt="" 
              className='w-full h-full object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl'
            />
          </div>

          {/* SLIDER */}
          <div className='overflow-hidden w-full h-full lg:w-full rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl'>

            <div 
              className='flex transition-transform duration-500 h-full'
              style={{ transform: `translateX(-${index * 100}%)` }}
            >

              {profiles.map((data, index) => (
                <section key={index} className='min-w-full h-full '>

                  <article className='bg-gray-100/60 px-4 py-8 lg:py-20 flex flex-col justify-between h-full lg:px-8'>
                    
                    <div>
                      <h1 className='text-lg font-semibold'>{data.title}</h1>
                      <p className='text-sm mt-2'>{data.description}</p>
                    </div>

                    <div className='flex gap-2 mt-5 items-center'>
                      <img src={data.profile} alt="profile-image" className='rounded-full w-12 h-12 object-cover' />

                      <div>
                        <h2 className='font-semibold'>{data.name}</h2>
                        <span className='text-sm'>{data.role}</span>
                      </div>
                    </div>

                  </article>

                </section>
              ))}

            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Testimonial
