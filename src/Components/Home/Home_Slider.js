import React, { useState } from 'react'
// Correct way if it's a named export
import { Carousel } from 'react-bootstrap';
import lucky from '../Asset/video/Lucky_Baskhar_shortvideo.mp4'
import leo from '../Asset/video/LEO Video.mp4'
import laapatta from '../Asset/video/Laapatta Ladies_video.mp4'
// import laapatta from '../Asset/video/Laapatta Ladies_video.mp4'
// import ddlj from '../Asset/photo/Hindi/DilwaleDulhaniyaLeJayenge.jpeg';
// import kkkg from '../Asset/photo/Hindi/KabhiKushiKabhiGum.jpeg';
// import ll from '../Asset/photo/Hindi/lappatta_ladies.jpeg';
// import stk from '../Asset/photo/Hindi/SanamTeriKasam.jpeg';
// import yjhd from '../Asset/photo/Hindi/YehJawaniYehDiwani.jpeg';

function Home_Slider() {
    const[index,setIndex]=useState(1);
    const handleselect=(ind)=>
    {
        console.log(ind);
        setIndex(ind);
    }
  return (
    <div>
    <div style={{}}>
      <Carousel activeIndex={index} onSelect={handleselect} >
        <Carousel.Item>
          <video className="d-block w-100"src={laapatta} alt="laapatta" autoPlay muted loop playsInline></video>
          <Carousel.Caption>
            <p>LAAPATAA LADIES</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <video alt="First slide" className="d-block w-100 " src={lucky} autoPlay muted
          loop
          playsInline
          ></video>
        
        <Carousel.Caption>
            <p>LUCKY BASKHAR</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <video
          className="d-block w-100"
          src={leo}
          autoPlay
          muted
          loop
          playsInline
        />
        <Carousel.Caption>
          <p>LEO</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
      
    </div>
    </div>
  )
}

export default Home_Slider
