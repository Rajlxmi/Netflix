import React, { useRef } from "react";

const ScrollByExample = () => {

        const data=useRef(null)


  const scrollDown = () => {
    data.current.scrollBy({ left: 200, behavior: "smooth" }); // Scrolls down by 200px
  };

  const scrollUp = () => {
    data.current.scrollBy({ left: -200, behavior: "smooth" }); // Scrolls up by 200px
  };

  return (
    <div>
              <button onClick={scrollUp}>Scroll Up</button>

    <div ref={data}
    
      style={{
           width: "700px",        // restrict width
          height: "150px",
          overflowX: "auto",     // make it scrollable
          border: "1px solid black",
          padding: "10px",
          display: "flex",
          msOverflowStyle:"none",
          scrollbarWidth:"none"
        }}
    >

      <div style={{ minWidth: "150px", background: "#eee" }}>Item 1</div>
        <div style={{ minWidth: "150px", background: "#ddd" }}>Item 2</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 3</div>
        <div style={{ minWidth: "150px", background: "#ddd" }}>Item 4</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>
        <div style={{ minWidth: "150px", background: "#eee" }}>Item 5</div>


    </div>


              <button onClick={scrollDown}>Scroll Down</button>

    </div>
  );
};

export default ScrollByExample;