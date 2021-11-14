import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import cloth1 from "../inputs/c.jpg";
import person1 from "../inputs/p.jpg";
import person2 from "../inputs/example_person.jpg";
import person3 from "../inputs/test-model2.jpg";
import person4 from "../inputs/model_5.jpg";
import output from "../output/output.png";
import "./style.css";

export const Wardrobe = () => {
  const [load, setLoad] = useState(0);
  const [person, setPerson] = useState("inputs/p.jpg");
  const [cloth, setCloth] = useState("inputs/c.jpg");
   
  const handleTry = async () => {
    setLoad(1);
    console.log(person,cloth);
    const res = await axios.post("/api", {person, cloth});
    console.log(res);
    setLoad(2);
  }

  return (
    
    <div id="#head" className="inset">
      <h1>Virtual Wardrobe!!!</h1>
    
    <div className="gradient">
    <div className="wrap">
    <h2>Cloth:</h2>
      <img src={cloth1} alt="cloth"/></div>
    
      <div className="wrap">
      <h2>Person:</h2>
      <img src={person1} alt="person"/>
      <div className="wrapper">
      <button onClick={()=>setPerson(`virtual-wardrobe/src/inputs/c.jpg`)}>
        <span>Choose</span>
      </button>
      </div>
      </div>
      
      <div className="wrap">
      <h2>Person:</h2>
      <img src={person2} alt="person"/>
      <div className="wrapper">
      <button onClick={()=>setPerson(`virtual-wardrobe/src/inputs/example_person.jpg`)}>
        <span>Choose</span>
      </button>
      </div>
      </div>
      
      <div className="wrap">
      <h2>Person:</h2>
      <img src={person3} alt="person"/>
      <div className="wrapper">
      <button onClick={()=>setPerson(`virtual-wardrobe/src/inputs/test-model2.jpg`)}>
        <span>Choose</span>
      </button>
      </div>
      </div>

      <div className="wrap">
      <h2>Person:</h2>
      <img src={person4} alt="person"/>
      <div className="wrapper">
      <button onClick={()=>setPerson(`virtual-wardrobe/src/inputs/model_5.jpg`)}>
        <span>Choose</span>
      </button>
      </div>
      </div>
      </div>

      <div className="wrap">
      <button onClick={handleTry}>
        <span>Try-On</span>
      </button>
      </div>
      {
        load===1 && <h3>Loading...</h3>
      }
      {
        load===2 && <img src={output} alt="output"/>
      }
     
    </div>
  );
};
