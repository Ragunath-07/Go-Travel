import '../App.css'
import logo_white from '../assets/images/logo-white.svg'

function Footer() {

  return (
    <footer className='bg-black text-white py-8 scroll-mt-16'>
      <div className='flex items-center justify-between mx-8'>
        <div className='flex gap-1 font-semibold'>
        <img src={logo_white} alt="logo" className='w-6 lg:w-8' />
        <span className='lg:text-2xl'>GoTravel</span>
      </div>

      <a href="#home" className='bg-white text-black px-3 py-2 rounded-md transition-all duration-500 hover:-translate-y-1'><i className="ri-arrow-up-line text-lg font-medium"></i></a>
      </div>

      <div className='grid grid-cols-2 gap-6 p-6 lg:grid-cols-4 lg:gap-10'>

        <ul>
          <li className='font-semibold text-lg'>About</li>
          <li>About Us</li>
          <li>Features</li>
          <li>News & Blogs</li>
        </ul>

        <ul>
          <li className='font-semibold text-lg'>Contact</li>
          <li>Call Center</li>
          <li>Support</li>
          <li>Contact Us</li>
        </ul>

        <ul>
          <li className='font-semibold text-lg'>Support</li>
          <li>Privacy Policy</li>
          <li>Terms & Services</li>
          <li>Payments</li>
        </ul>

        <ul>
          <li className='font-semibold text-lg'>Social</li>
          <div className='flex gap-2 items-center'>
            <li><a href="https://www.facebook.com/"><i className="ri-facebook-circle-fill"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a></li>
            <li><a href="https://twitter.com/"><i className="ri-twitter-x-fill"></i></a></li>
          </div>
        </ul>
      </div>

      <p className='text-center mt-10 text-xs'>&#169; All Rights Reserved By CodeWithRagu</p>
    </footer>
  )
}

export default Footer