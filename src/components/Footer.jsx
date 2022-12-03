import React from "react";
import Twitter from "../assets/twt.svg";
import Whatsapp from "../assets/wa.svg";
import Facebook from "../assets/fb.svg";
import Insta from "../assets/ig.svg";
import Youtube from "../assets/yt.svg";

const Footer = () => {

    const rowOne = [
        {
            img: Twitter,
        },
        {
            img: Whatsapp,
        },
        {
            img: Facebook,
        },
        {
            img: Insta,
        },
        {
            img: Youtube,
        },
    ]

    return (
        <section className="w-full text-gray-700 bg-slate-200 body-font">
            <div className="container flex flex-col items-center px-0 py-1 mx-auto max-w-7xl sm:flex-row"></div>
            <div class="text-center space-y-2">
                <h1 class="font-bold md:text-[30px] lg:text-[35px] xl:text-[38px] ">CONTACT ME</h1>
                <p class="font-thin">+62 821 5442 3797</p>
                <p class="font-thin">Email : 20013041@unikadelasalle.ac.id</p>
                <p className=" text-sm font-thin text-center text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0 sm:text-left">© 2022 Mahesa -  Rekomendasi Destinasi Wisata Di Kabupaten
                    Minahasa</p>
            </div>
        </section>
    )
}


export default Footer;