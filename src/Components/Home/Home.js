import React from 'react'
import './HomeCss.css'
import img from "../Asset/netflixlogo.png";
import Home_Slider from './Home_Slider';
import Cards from './Cards/Cards';
import MCards from './Cards/MCards';
import TCards from './Cards/TCards';
import Kdrama from './Cards/Kdrama';
// import Sample from './Sample';

function Home() {
 
  return (


    <div style={{backgroundColor:"black"}}>


      {/* <body className='home'> */}
        <nav style={{
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "1",
    backgroundColor: "black",
    padding: "10px"
  }}>
        
          <div class="d-flex flex-wrap" >
            {/* <a className='logo'>NETFLIX</a> */}
            <img className="logo" src={img}></img>
            <ul class="d-flex direction-left">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Tv Shows</a></li>
            <li><a href='#'>Movies</a></li>
            <li><a href='#'>Games</a></li>
            <li><a href='#'>New & Popular</a></li>
            <li><a href='#'>MyList</a></li>
            <li><a href='#'>BrowseByLanguages</a></li>
          </ul>
          </div>
          
        </nav>



        <section>
          <Home_Slider/>
          <h2 style={{color:"#FFFFF7"}}>Hindi</h2>
          <Cards/>
          <h2 style={{color:"#FFFFF7"}}>Malayalam</h2>
          <MCards/>
          <h2 style={{color:"#FFFFF7"}}>Tamil</h2><br/>
          <TCards/>
          <br/>
          <h2 style={{color:"#FFFFF7"}}>K-Drama</h2>
          <Kdrama/>
        </section>
      {/* </body> */}
    </div>
  )
}

export default Home
