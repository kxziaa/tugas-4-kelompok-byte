import React from "react";
import Git from "../assets/git.svg";
import Facebook from "../assets/fb.svg";
import Insta from "../assets/insta.svg";
import Gmail from "../assets/gmail.svg";
import Img from './Img';

const Footer = () => {

    const rowOne = [
        {
            img: Git,
        },
        {
            img: Facebook,
        },
        {
            img: Insta,
        },
        {
            img: Gmail,
        },
    ]

    return (
        <section className="w-full text-gray-700 bg-slate-200">
            <div className="items-center py-1"></div>
            <div class="text-center space-y-2">
                <h1 class="font-bold md:text-[30px] lg:text-[35px] xl:text-[38px] ">CONTACT US.</h1>
                <p class="font-thin">+62 821 5442 3797</p>
                <p class="font-semibold text-sm">Kombos-Kairagi II, Manado</p>
                <p class="font-thin text-sm">©2022 Mahesa - Rekomendasi Destinasi Wisata Di Kabupaten Minahasa</p>
                <div className="container flex flex-row items-center mx-auto sm:flex-row">
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


export default Footer;