import React, { useState } from "react";
import axios from "axios";
import c from "../inputs/c.jpg";
import p from "../inputs/p.jpg";
import o from "../output/output.png";

export const Wardrobe = () => {
  const [load, setLoad] = useState(0);

  const handleTry = async () => {
    setLoad(1);
    const res = await axios.post("/api", {person: "inputs/p.jpg", cloth: "inputs/c.jpg"});
    console.log(res);
    setLoad(2);
  }

  return (
    <div className="base-container">
      Wardrobe!!!
      Cloth:
      <img src={c} alt="cloth"/>
      Person:
      <img src={p} alt="person"/>
      <button onClick={handleTry}>Try On</button>
      {
        load===1 && <h3>Loading...</h3>
      }
      {
        load===2 && <img src={o} alt="output"/>
      }
    </div>
  );
};
