import '../App.css'


import destination_1 from '../assets/images/destination-img-1.png'
import destination_2 from '../assets/images/destination-img-2.png'
import destination_3 from '../assets/images/destination-img-3.png'

function Destinantion() {

  const destinations = [
    { destination: destination_1, subtitle: "Bali", title: "ISLAND", country: "Indonesia" },
    { destination: destination_2, subtitle: "Banana", title: "BEACH", country: "Tailandia" },
    { destination: destination_3, subtitle: "Santorini", title: "ISLAND", country: "Grecia" },
  ]

  return (
    <section className='flex flex-col gap-5 my-16  transition-all duration-500' id='destination'>
      <h1 className='text-center text-3xl font-bold lg:text-4xl'>Find Your Best <br /> Destination</h1>

      <div className='flex justify-center'>

        <div className='grid grid-cols-1 place-items-center gap-5 mx-5 lg:grid-cols-3 lg:place-items-center'>
          {
            destinations.map(function (data) {
              return (
                <div className='relative rounded-2xl overflow-hidden'>
                  <img src={data.destination} alt={data.title} className='max-w-80 transition-all duration-500 cursor-pointer hover:scale-110' />

                  <div className='absolute px-5 left-0 bottom-0 bg backdrop-blur-md py-4 w-80 text-white text-xl'>

                    <h3 className='dancing__font text-2xl'>{data.subtitle}</h3>
                    <h2 className='font-semibold'>{data.title}</h2>
                    <p className='inline-flex gap-1 items-center'>
                      <i className="ri-map-pin-fill text-base"></i>
                      <span className='text-xs'>{data.country}</span>
                    </p>
                    
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Destinantion