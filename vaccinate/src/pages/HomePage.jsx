import React from 'react'
import ImageSlider from '../components/ImageSlider'
import HeroSection from '../components/HeroSection'
import HeroSection2 from '../components/HeroSection2'

const HomePage = () => {
  return (
    <>
     <ImageSlider />
     <div>
      <HeroSection/>
     </div>
     <div></div>
     <div className='my-[10rem]'>

     <HeroSection2 />
     </div>
     
    </>
  )
}

export default HomePage
