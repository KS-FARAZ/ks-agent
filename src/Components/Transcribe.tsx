import React from "react";
import Image from "next/image";
import Voice from "../../public/Images/Voice.png";
import AI from "../../public/Images/AI.png";
import Summaries from "../../public/Images/Summaries.png";
import Done from "../../public/Images/Done.png";

const Transcribe = () => {
  const steps = [
    {
      icon: Voice,
      title: "Send Voice Note",
      description:
        "Record and send your voice message through WhatsApp or Telegram",
      bgColor: "bg-pink-100",
      textColor: "bg-pink-800",
    },
    {
      icon: AI,
      title: "AI Transcribes",
      description:
        "Our advanced AI instantly converts your speech to accurate text",
      bgColor: "bg-indigo-100",
      textColor: "bg-indigo-800",
    },
    {
      icon: Summaries,
      title: "Generate Summaries",
      description:
        "Get 5 clear bullet points highlighting your key talking points",
      bgColor: "bg-teal-100",
      textColor: "bg-teal-800",
    },
    {
      icon: Done,
      title: "Done",
      description: "Copy, share or save your transcription and summaries",
      bgColor: "bg-green-100",
      textColor: "bg-green-800",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-50 py-12 px-4">
      <div className=" px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center ">
          <button className="flex items-center gap-2 rounded-full bg-white px-6 py-2 shadow-md hover:shadow-lg transition">
            <span className="h-3 w-3 rounded-full bg-purple-600"></span>
            <span className="text-blue-600 font-medium">How it works</span>
          </button>
        </div>

        <h1 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-500 text-center mb-6">
          Transcribe your voice notes in seconds
        </h1>

        <p className="text-lg sm:text-xl text-black-600 text-center leading-relaxed max-w-3xl mx-auto">
          Our AI-Powered process turns your voice messages into organized
          insights in just four simple steps
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-full md:w-64 h-64 ${step.bgColor} rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105`}
          >
            <div
              className={`h-30 w-30 flex justify-center items-center  rounded-[15px] mb-4 ${step.textColor}`}
            >
              <Image
                src={step.icon}
                alt="Main QR Code"
                width={50}
                height={50}
                className="object-contain cursor-pointer"
              />
            </div>
            <h3 className={`text-xl font-semibold mb-2 `}>{step.title}</h3>
            <p className={`text-sm `}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transcribe;
