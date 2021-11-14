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
  
      Cloth:
      <img src={cloth1} alt="cloth"/>

      Person:
      <img src={person1} alt="person"/>
      <button onClick={()=>setPerson(`input/c.jpg`)}>
        <span>Choose</span>
      </button>
      Person:
      <img src={person2} alt="person"/>
      <button onClick={()=>setPerson(`input/example_person.jpg`)}>
        <span>Choose</span>
      </button>
      Person:
      <img src={person3} alt="person"/>
      <button onClick={()=>setPerson(`input/test-model2.jpg`)}>
        <span>Choose</span>
      </button>
      Person:
      <img src={person4} alt="person"/>
      <button onClick={()=>setPerson(`input/model_5.jpg`)}>
        <span>Choose</span>
      </button>

      <button onClick={handleTry}>
        <span>Try-On</span>
      </button>
      {
        load===1 && <h3>Loading...</h3>
      }
      {
        load===2 && <img src={output} alt="output"/>
      }
    </div>
  );
};
