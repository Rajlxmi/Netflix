import React from 'react'
import { useEffect,useState,useRef } from 'react';
import films from '../Films.json';
function Cards() {
    const[film,setFilms]=useState([]);
    const[ind,setIndex]=useState(1);
    useEffect(()=>{
    const fetching=()=>{
    try{
      console.log(films);
      setFilms(films);
    }
    catch(err){
      console.error("eror fetching data",err);
    }
  
  };
  fetching();
},[]);
    const data=useRef(null);
    const scrollDown=()=>{
        data.current.scrollBy({left:200,behavior:"smooth"});
    }
    const scrollUp=()=>{
        data.current.scrollBy({left:-200,behavior:"smooth"});
    }
    
  return (
    
  <div style={{ position: "relative" }}>
    
    {/* Left Arrow Button */}
    <button 
      onClick={scrollUp} 
      style={{
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        background: "rgba(0,0,0,0.5)",
        border: "none",
        color: "white",
        padding: "10px",
        borderRadius: "50%"
      }}
      className="btn btn-dark"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
        <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
      </svg>
    </button>

    {/* Your Scrollable Cards */}
    <div
      ref={data}
      style={{
        width: "1500px",
        height: "350px",
        gap: "10px",
        overflowX: "auto",
        border: "1px solid black",
        padding: "10px",
        display: "flex",
        msOverflowStyle: "none",
        scrollbarWidth: "none"
      }}
    >
      {film.map((std, index) => (
        <div key={index}>
          <div class="d-flex">
            <div class="card" style={{ width: '18rem', height: '23rem', backgroundColor:"black"}}>
              <img src={std.ddlj} alt='img1' style={{margin:'10px'}} />
            </div>
            {/* ...your other card divs stay exactly the same... */}
            <div class="card" style={{ width: '18rem', height: '23rem', backgroundColor:"black" }}>
              <img src={std.kkkg} alt='img1' style={{margin:'10px'}}/>
            </div>
            <div class="card" style={{ width: '18rem', height: '23rem', backgroundColor:"black" }}>
              <img src={std.ll} alt='img1'  style={{margin:'10px'}}/>
            </div>
            <div class="card" style={{ width: '18rem', height: '23rem', backgroundColor:"black" }}>
              <img src={std.stk} alt='img1' style={{margin:'10px'}} />
            </div>
            <div class="card" style={{ width: '18rem', height: '23rem', backgroundColor:"black"}}>
              <img src={std.yjyd} alt='img1' style={{margin:'10px'}} />
            </div>
            <div class="card" style={{ width: '18rem', height: '25rem', backgroundColor:"black" }}>
              <img src={std.rnbdj} alt='img1' style={{margin:'10px'}} />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow Button */}
    <button 
      onClick={scrollDown} 
      style={{
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        background: "rgba(0,0,0,0.5)",
        border: "none",
        color: "white",
        padding: "10px",
        borderRadius: "50%"
      }}
      className="btn btn-dark"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
        <path d="M6 3.204v9.592L11.481 8zm.659-.753 5.48 4.796a1 1 0 0 1 0 1.506l-5.48 4.796A1 1 0 0 1 5 12.796V3.204a1 1 0 0 1 1.659-.753"/>
      </svg>
    </button>

  </div>
);


}

export default Cards
