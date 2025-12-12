import '../App.css'

import gallery_1 from '../assets/images/gallery-img-1.png'
import gallery_2 from '../assets/images/gallery-img-2.png'
import gallery_3 from '../assets/images/gallery-img-3.png'
import gallery_4 from '../assets/images/gallery-img-4.png'

function Gallery() {

  const gallery = [
    { gallery_img: gallery_1, subtitle: "Nusa", title: "Indonesia" },
    { gallery_img: gallery_2, subtitle: "Cook", title: "Nueva Zelanda" },
    { gallery_img: gallery_3, subtitle: "Bora Bora", title: "Polinesia" },
    { gallery_img: gallery_4, subtitle: "Santorini", title: "Grecia" },
  ]

  return (
    <section className='my-10 mx-5 transition-all duration-500 scroll-mt-16' id='gallery'>
      <h1 className='text-center text-3xl font-bold lg:text-4xl'>Gallery</h1>

      <div className='flex justify-center'>

        <div className='grid gap-8 py-8 lg:grid lg:grid-cols-2' >
          {
            gallery.map(function (gallery, index) {
              return (
                <article className='relative text-white overflow-hidden rounded-3xl'>
                  <img src={gallery.gallery_img} alt={gallery.title} className='rounded-3xl max-w-sm transition-all duration-500 cursor-pointer hover:scale-110 sm:max-w-md' />

                  <div className='absolute z-10 bottom-0 text-3xl p-6'>
                    <h2 className='dancing__font'>{gallery.subtitle}</h2>
                    <h2 className='font-semibold'>{gallery.title}</h2>
                  </div>

                </article>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Gallery