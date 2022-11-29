import React from "react";
import Banner from "../components/Banner";

function Home() {

  return (
      <>
      <Banner />
      <section>
        <section id="alam">
          <div className="mt-[25px] py-10  flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl mt-10">WISATA ALAM </h1>
          
          </div>
        </section>
      </section>
      <section>
        <section id="budaya">
          <div className="mt-[25px] py-10  flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl mt-10">WISATA BUDAYA </h1>
          
          </div>
        </section>
      </section>
      <section>
        <section id="kuliner">
          <div className="mt-[25px] py-10  flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl mt-10">WISATA KULINER  </h1>
          
          </div>
        </section>
      </section>
      <section>
        <section id="rekreasi">
          <div className="mt-[25px] py-10  flex flex-col items-center">
            <h1 className="font-bold text-center text-2xl mt-10">WISATA REKREASI </h1>
          
          </div>
        </section>
      </section>
  
      </>
    );
  }

export default Home;