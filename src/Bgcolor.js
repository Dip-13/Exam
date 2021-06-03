import React, { useState } from "react";
import './BGcolor.css'

export default function BGcolor() {
  const color = "#F51720";
  const [change, setChange] = useState(color);
  const [text, setText] = useState("");

  const colorChange = () => {
    const color1 = "#58BC34";
    setChange(color1);
    
  };
  return (
    <>
      <div className="row change">
        <div className="col-lg-6 col-md-6 col-sm-6 ">
          <div className="Leftside card" style={{ backgroundColor: change }}>
            <h4 className="hello">Hello</h4>
            <h4 className="hello">Hello Hello</h4>
            <h4 className="hello">Hello Hello Hello</h4>
            <h4 className="hello">Hello Hello Hello Hello</h4>
          </div>
        </div>
      </div>
      <div id="button">
        <button className="btn" onClick={colorChange} id="button1">
          Press
        </button>
      </div>
      <div className="text1">
        <p>
          <b>{text}</b>
        </p>
      </div>
    </>
  );
}
