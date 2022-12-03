import React from "react";
import Header from "../components/Header";
import P1 from "../assets/uluna.jpg"
import icon from "../assets/location.svg"
const Detail = () => {
    return (
        <>  
        <Header />
        <div className="sm:mx-[50px] lg:mx-[100px] sm:flex sm:flex-row sm:items-center sm:gap-8 sm:pt-28">
            <img src={P1} className="object-cover w-screen sm:w-[450px] h-[300px] lg:w-[500px] lg:h-[450px] xl:w-[550] xl:h-[500px]" alt="" />
            <div className="mt-10 sm:mt-0">
            <h2 className="font-bold text-center sm:text-left text-[25px]">NAMA TEMPAT WISATA</h2>
            <div className="justify-center sm:justify-start flex flex-row align-middle gap-2">
                <img src={icon} className="w-4 lg:w-5" alt="" />
                <h3 className="text-[20px]">Lokasi </h3>
            </div>
            <p className="text-center sm:text-start mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo viverra ipsum ac dignissim. Vivamus eget nisl sit amet leo molestie consectetur. Mauris ut ligula ac leo consectetur tempor. Duis vel ornare metus. Nunc ullamcorper magna id justo imperdiet, ac pharetra ex mattis. Phasellus non sollicitudin dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin euismod id nisi eget tempor. Sed non lorem in dui tempor malesuada
            </p>
            </div>
        </div>
        </>
    )
}

export default Detail;