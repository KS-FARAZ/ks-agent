import React from "react";
import Image from "next/image";
import whatsApp from "../../public/Images/whatsApp.png";

const LanguageBarrier = () => {
  return (
    <section className="mb-[200px] ">
      <main className="flex ">
        <div className=" flex-1 ">
          <div className="relative  h-[400px] flex-2 flex justify-center rounded-[25px] items-center bg-[linear-gradient(180deg,#BB9DF3_0%,#8351E0_100%)] ">
            <Image
              src={whatsApp}
              alt="hero-mobile"
              width={340}
              height={300}
              className="absolute bottom-14 object-contain cursor-pointer"
              // onClick={(e) => handleNavClick(e, "#home", "Home")}
            />
          </div>
        </div>
        <div className=" flex-1 flex justify-center">
          <div className=" px-8 py-6">
            <h1 className="text-[50px] font-bold bg-[linear-gradient(180deg,#BB9DF3_0%,#8351E0_100%)] bg-clip-text text-transparent ">
              Break Language Barrier
            </h1>
            <p className="text-[25px]">
              Connect with the world effortlessly: With language selection and
              real-time translation feature.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LanguageBarrier;
