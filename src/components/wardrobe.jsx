import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import c from "../inputs/c.jpg";
import p from "../inputs/p.jpg";
import o from "../output/output.png";
import "./style.css";

export const Wardrobe = () => {
  const [load, setLoad] = useState(0);
  console.log("somyaa");
  const handleTry = async () => {
    setLoad(1);
    const res = await axios.post("/api", {person: "inputs/p.jpg", cloth: "inputs/c.jpg"});
    console.log(res);
    setLoad(2);
  }

  return (
    
    <div id="#head" className="base-container">
      Wardrobe!!!
      Cloth:
      <img src={c} alt="cloth"/>
      Person:
      <img src={p} alt="person"/>
      <button onClick={handleTry}>
        <span>Try On</span>
      </button>
      {
        load===1 && <h3>Loading...</h3>
      }
      {
        load===2 && <img src={o} alt="output"/>
      }
    </div>
  );
};
