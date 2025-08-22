import React from "react";
import Image from "next/image";
import everything from "../../public/Images/everything.png";

const Everything = () => {
  return (
    <section className=" ">
      <main className="flex ">
        <div className=" flex-1 flex justify-center">
          <div className=" px-8 py-6">
            <h1 className="text-[35px] font-bold bg-[linear-gradient(180deg,#BB9DF3_0%,#8351E0_100%)] bg-clip-text text-transparent ">
              Everything you wanted to know,
              <br /> now just a message away.
            </h1>
            <p className="text-[23px]">
              Now you can ask Transcribeme and receive instant answers on any
              topic in general. For example: ideas for a date, what is the best
              gift for your anniversary?
            </p>
          </div>
        </div>
        <div className=" flex-1 ">
          <div className="relative  h-[400px] flex-2 flex justify-center rounded-[25px] items-center bg-[linear-gradient(180deg,#BB9DF3_0%,#8351E0_100%)] ">
            <Image
              src={everything}
              alt="Everything-mobile"
              width={540}
              height={800}
              className="absolute bottom-6
               object-contain cursor-pointer"
              // onClick={(e) => handleNavClick(e, "#home", "Home")}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Everything;
