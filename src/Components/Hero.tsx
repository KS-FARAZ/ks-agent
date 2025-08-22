import React from "react";
import Image from "next/image";

import heroMobile from "../../public/Images/hero-mobile.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mb-[100px] ">
      <main className="flex">
        <div className="flex-1 flex justify-center items-center ">
          <div className="">
            <h1 className="text-[60px] font-bold">
              Mobile Assistant,
              <div className="bg-[linear-gradient(180deg,#BB9DF3_0%,#8351E0_100%)] bg-clip-text text-transparent">
                {" "}
                and voice prompt.
              </div>
            </h1>
            <p className="text-[25px] text-center">
              A mobile chatbot where you can transcribe <br /> your messages in
              no time.
            </p>
            <div className="flex justify-center">
              <button className="text-center mt-[15px] cursor-pointer rounded-[25px] items-center justify-center px-6 py-2 bg-[linear-gradient(180deg,#BB9DF3_0%,#8351E0_100%)]  text-white font-semibold  ">
                Try for free →
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center  items-center">
          <Image
            src={heroMobile}
            alt="hero-mobile"
            width={540}
            height={0}
            className="object-contain cursor-pointer"
            // onClick={(e) => handleNavClick(e, "#home", "Home")}
          />
        </div>
      </main>
    </section>
  );
};

export default Hero;
