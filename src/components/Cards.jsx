import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ img, location, name }) => {
    return (
        <>
            <div className="relative w-max h-max">
                <Link to={'/detail'}> 
                <img src={img} alt="" className="w-56 rounded-lg" />
                </Link>
                <div className="absolute top-0 right-0  bg-[#ff0b0b] text-white px-[10px] py-2 rounded-tr-lg rounded-bl-lg">
                    <h3 className="font-semibold">{location}</h3>
                </div>

                <div className="text-[#000000]">
                    <h3 className="font-semibold text-center">{name}</h3>
                </div>
            </div>
        </>
    );
};

export default Cards; 