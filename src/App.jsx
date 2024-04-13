import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Company from './components/Company/Company'
import Features from './Container/Features/Features'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Sliders from './components/Sliders/Sliders'
import Imagecarousel from './components/ImageCarousel/Imagecarousel'
import SwiperMain from './components/Swiper/SwiperMain'
import CloudSwiper from './components/CloudSwiper/CloudSwiper'
import Demo from './components/CloudSwiper/demo'
import MySwiper from './components/CustomArrow/MySwiper'
import SliderInline from './components/Sliders/SliderInline'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="linear_background">
     <Navbar/>
     <Header/>
     </div>
      <Features/>
      <Blog/>
      <Sliders/>
      <Imagecarousel/>
      <SwiperMain/>
      <CloudSwiper/>
      <Demo/>
     <MySwiper/>
     
      <Footer/>
      <SliderInline/>
    </>
  )
}

export default App
