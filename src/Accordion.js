import "./App.css";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Accordion(props) {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const paraStyles = {
    display: show ? "block" : "none",
  };
  const paraStyles2 = {
    display: show2 ? "block" : "none",
  };
  const colorStyle = {
      color: show2 ? "#D44100" : "#000",
  };
  return (
    <div>
     
      <div className="accordion">
        <div className="accordion-heading" onClick={() => setShow2(!show2)}>
          <button>{show2 ? <FaArrowRight className="icon"/> : <FaArrowDown />}</button>
          <h2 className="accordion-title"
          style={colorStyle}
          >{props.title}</h2>
        </div>

        <p style={paraStyles2} className="accordion-para">
          {props.content}
        </p>
      </div>
    </div>
  );
}
