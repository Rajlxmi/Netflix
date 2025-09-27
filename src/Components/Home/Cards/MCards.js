import React, { useEffect, useState,useRef } from 'react'
import Mfile from '../JSON FILES/Mfile.json'
import { data } from 'react-router-dom';
const MCards = () => {
    const[mfilm,setMFilm]=useState([]);
    const [hoverIndex, setHoverIndex] = useState(null);
    
    useEffect(()=>{
        const fetching=()=>
        {
            try{
                setMFilm(Mfile);
                console.log(Mfile);
            }catch(err){
                console.log("films error",err);
            }
        }
        fetching();
    },[])

    const data=useRef(null);
    const scrollUp=()=>
    {
      data.current.scrollBy({left:-200,behavior:"smooth"});
    }
    const scrollDown=()=>{
      data.current.scrollBy({left:200,behavior:"smooth"});
    }
    return (
    <div>
      <div style={{ position: "relative" }}>
        {/* Left button */}
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

        {/* Card list */}
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
            zIndex: 1,
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {mfilm.map((std, index) => (
  <div key={index} className="d-flex">
    <div
      className="card"
      style={{
        position: "relative",
        width: "18rem",
        height: "18rem",
        backgroundColor: "black",
        overflow: "visible", // allow scaling outside
        transition: "transform 0.3s ease, z-index 0.3s ease",
        transform: hoverIndex === index ? "scale(1.2)" : "scale(1)",
        zIndex: hoverIndex === index ? 5 : 1, // pop above others
      }}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {/* Image */}
      <img
        src={std.img}
        alt="img1"
        style={{
          margin: "10px",
          width: "calc(100% - 20px)",
          height: "calc(100% - 20px)",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      {/* Optional Overlay (like Netflix extra info) */}
      {hoverIndex === index && (
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            right: "10px",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "8px",
            borderRadius: "5px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {std.name || "Movie Title"}
        </div>
      )}
    </div>
  </div>
))}
        </div>

        {/* Right button */}
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
    </div>
    )

}

export default MCards
