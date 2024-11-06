import React from 'react'
import { assets } from '../assets/assets'
import {  useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is an online doctor appointment booking application designed to simplify healthcare access. With Prescripto, users can easily search for doctors, view their availability, and book appointments in a few clicks. </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li onClick={()=> navigate('/')} >Home</li>
            <li onClick={()=> navigate('/about')}>About us</li>
            {/* <li onClick={()=> navigate('/')}>Delivery</li> */}
            <li onClick={()=> navigate('/contact')}>Contact </li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>mediconnect@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'></p>
      </div>

    </div>
  )
}

export default Footer
