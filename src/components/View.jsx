import React from "react";
import Img from './Img';
import Kasih from "../assets/kasih.jpg";


const Galeri = () => {

    const rowOne = [
        {
            img: Kasih,
        },
        {
            img: Kasih,
        },
        {
            img: Kasih,
        },
        {
            img: Kasih,
        },
        {
            img: Kasih,
        },
        {
            img: Kasih,
        },
    ]
    return (

        <section id="galeri" className=" py-10 flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl mt-10 drop-shadow-lg">VIEW </h1>
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {rowOne.map((data) => (
                        <Img
                            img={data.img}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Galeri;