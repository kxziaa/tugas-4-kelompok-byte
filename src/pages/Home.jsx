import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import uluna from "../assets/uluna.jpg";


function Home() {
  const rowOne = [
    {
      img: uluna,
      location: "Tondano-Masarang",
      name: "Uluna",
    },
    {
      img: uluna,
      location: "Tondano-Masarang",
      name: "Uluna",
    },
    {
      img: uluna,
      location: "Tondano-Masarang",
      name: "Uluna",
    },
    {
      img: uluna,
      location: "Tondano-Masarang",
      name: "Uluna",
    },
  ]

  return (
    <>
      <Banner />
      <section id="alam">
        <div className="mt-[20px] py-10  flex flex-col items-center">
          <h1 className="font-bold text-center text-2xl mt-4">WISATA ALAM </h1>
          <div class="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 gap-4 justify-center">
              {rowOne.map((data) => (
                <Cards
                  img={data.img}
                  location={data.location}
                  name={data.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="budaya">
        <div className="mt-[20px] py-10  flex flex-col items-center">
          <h1 className="font-bold text-center text-2xl mt-4">WISATA BUDAYA </h1>
          <div class="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 gap-4 justify-center">
              {rowOne.map((data) => (
                <Cards
                  img={data.img}
                  location={data.location}
                  name={data.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kuliner">
        <div className="mt-[20px] py-10  flex flex-col items-center">
          <h1 className="font-bold text-center text-2xl mt-4">WISATA KULINER </h1>
          <div class="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 gap-4 justify-center">
              {rowOne.map((data) => (
                <Cards
                  img={data.img}
                  location={data.location}
                  name={data.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="rekreasi">
        <div className="mt-[20px] py-10  flex flex-col items-center">
          <h1 className="font-bold text-center text-2xl mt-4">WISATA REKREASI </h1>
          <div class="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 gap-4 justify-center">
              {rowOne.map((data) => (
                <Cards
                  img={data.img}
                  location={data.location}
                  name={data.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Home;