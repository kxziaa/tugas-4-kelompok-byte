import React from "react";
import Img from '../components/Img';
import Pic1 from "../assets/pic1.jpg";

    
const Galeri = () => {
    
  const rowOne = [
    {
      img: Pic1,
    },
    {
      img: Pic1,
    },
    {
      img: Pic1,
    },
    {
      img: Pic1,
    },
  ]
    return (
        <section>
            <section id="galeri">
            <div className=" py-10 flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl mt-10">GALERI </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2">
            {rowOne.map((data) => (
        <Img 
        img={data.img}
        />
        ))}
            </div>
        </div>
        </section>
        </section>
    )
}

export default Galeri;