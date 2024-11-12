import React from "react";
import Servicesimg from "../assets/Services_img.png";
import webService from "../assets/web_services.png";
import appService from "../assets/app_services.png";
import brandService from "../assets/brand_services.png";
import customerService from "../assets/customer_services.png";
import genaiService from "../assets/genai_services.png";
import graphicServices from "../assets/graphic_services.png";
import musicServices from "../assets/music_services.png";
import softServices from "../assets/soft_services.png";
import soundServices from "../assets/sound_services.png";
import troubleServices from "../assets/trouble_services.png";
import webscrapServices from "../assets/webscrap_services.png";
import webmangServices from "../assets/websmang_services.png";
import voiceServices from "../assets/voice_services.png";
import uiServices from "../assets/ui_services.png";

export default function Component() {
  const dataArr = [
    {
      img: webService,
      topic1: "WEBSITE",
      topic2: "DEVELOPMENT",
      desc: "We specialize in creating custom, responsive websites that look great and perform seamlessly across all devices.",
    },
    {
      topic1: "APP",
      topic2: "DEVELOPMENT",
      desc: "We excel in developing custom, responsive apps that deliver outstanding performance and a seamless user experience on any device.",
      img: appService,
    },
    {
      topic1: "WEB",
      topic2: "SCRAPPING",
      desc: "Accurate web scraping services for precise data extraction, tailored analysis, and actionable business insights.",
      img: webscrapServices,
    },
    {
      topic1: "GENERATIVE",
      topic2: "AI",
      desc: "Innovative generative AI solutions creating unique content, designs, and insights to drive creativity and efficiency.",
      img: genaiService,
    },
    {
      topic1: "VOICEBOT/",
      topic2: "CHATBOT",
      desc: "Advanced voicebot and chatbot solutions for seamless, interactive customer engagement and support.",
      img: voiceServices,
    },
    {
      topic1: "SOFTWARE",
      topic2: "DEVELOPMENT",
      desc: "We specialize in comprehensive digital marketing solutions tailored to your business needs.",
      img: softServices,
    },
    {
      topic1: "GRAPHIC",
      topic2: "DESIGNING",
      desc: "We specialize in creative graphic design solutions that elevate your brand's visual identity.",
      img: graphicServices,
    },
    {
      topic1: "UI/UX",
      topic2: "DESIGNING",
      desc: "We specialize in creating intuitive, user-friendly UI/UX designs that enhance user experience across all devices.",
      img: uiServices,
    },
    {
      topic1: "WEBSITE",
      topic2: "MANAGEMENT",
      desc: "Expert website management ensuring optimal performance, security, and seamless user experience.",
      img: webmangServices,
    },
    {
      topic1: "TROUBLESHOOTING",
      topic2: "",
      desc: "We specialize in troubleshooting services to quickly identify and resolve issues with your website or digital platforms.",
      img: troubleServices,
    },
    {
      topic1: "BRAND",
      topic2: "PROMOTION",
      desc: "We specialize in brand promotion strategies tailored to elevate your online presence.",
      img: brandService,
    },
    {
      topic1: "MUSIC",
      topic2: "PRODUCTION",
      desc: "Professional music production services delivering high-quality sound and creative compositions for any project.",
      img: musicServices,
    },
    {
      topic1: "SOUND",
      topic2: "ENGINEERING",
      desc: "Expert sound engineering services ensuring top-quality audio production and clarity for any project.",
      img: soundServices,
    },
    {
      topic1: "CUSTOMER SUPPORT",
      topic2: "EXECUTIVE",
      desc: "We provide expert consultancy services tailored to your business goals.",
      img: customerService,
    },
  ];
  return (
    <section className="bg-zinc-900 px-4 py-4 md:py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-8 flex justify-center">
            <img
              src={Servicesimg}
              alt="Developer illustration"
              width={500}
              className="object-contain"
            />
          </div>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            OUR COMPANY
          </h2>
          <p className="text-2xl font-semibold text-cyan-400 md:text-3xl">
            PREMIUM SERVICES
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Website Development Card */}
          {dataArr.map((data, index) => {
            return (
              <div
                key={index}
                className="relative border-2 border-white bg-transparent px-6 py-16 rounded-[24px] mb-12"
              >
                <div className="flex flex-col items-center space-y-4 p-0">
                  <div className="absolute top-[-15%]  h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400">
                    <img
                      src={data.img}
                      alt="Website Development"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-center text-2xl font-bold text-cyan-400 md:text-2xl">
                    {data.topic1}
                    <br />
                    {data.topic2}
                  </h3>
                  <p className="text-center text-white">{data.desc}</p>
                  <button
                    variant="outline"
                    className="bg-[#40E0D0] hover:bg-[#3BC9BA] text-black font-semibold px-6 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    GET IN TOUCH
                  </button>
                </div>
              </div>
            );
          })}

          {/* App Development Card
          <div className="border-2 border-white bg-transparent p-6 rounded-[24px]">
            <div className="flex flex-col items-center space-y-4 p-0">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400">
                <img
                  src="/placeholder.svg"
                  alt="App Development"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-cyan-400 md:text-2xl">
                APP
                <br />
                DEVELOPMENT
              </h3>
              <p className="text-center text-white">
                We excel in developing custom, responsive apps that deliver
                outstanding performance and a seamless user experience on any
                device.
              </p>
              <button
                variant="outline"
                className="mt-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zinc-950"
              >
                GET IN TOUCH
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
