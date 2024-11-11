import React from "react";
import Servicesimg from "../assets/Services_img.png";
import webService from "../assets/web_services.png";
export default function Component() {
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
          <div className="relative border-2 border-white bg-transparent px-6 py-16 rounded-[24px]">
            <div className="flex flex-col items-center space-y-4 p-0">
              <div className="absolute top-[-15%]  h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400">
                <img
                  src={webService}
                  alt="Website Development"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-2xl font-bold text-cyan-400 md:text-2xl">
                WEBSITE
                <br />
                DEVELOPMENT
              </h3>
              <p className="text-center text-white">
                We specialize in creating custom, responsive websites that look
                great and perform seamlessly across all devices.
              </p>
              <button
                variant="outline"
                className="mt-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zinc-950"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* App Development Card */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
