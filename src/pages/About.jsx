import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 py-12 md:py-16">
    <div className="max-w-3xl mx-auto space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 className="text-cyan-400 text-3xl md:text-4xl font-bold">GET THE BEST</h1>
        <p className="text-2xl md:text-3xl font-semibold">for your project</p>
      </div>
      <hr className="border-white" />
      {/* About Section */}
      <div className="space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-cyan-400">ABOUT </span>
          <span>VIRTELON</span>
        </h2>
        <p className="text-gray-200 leading-relaxed">
          Virtelon is dedicated to providing high-quality and innovative solutions across a broad range of digital services, including web development, UI/UX design, app development, digital marketing, and other tech and business-related offerings. Our unwavering commitment to excellence, integrity, and client satisfaction sets us apart, as we consistently strive to exceed expectations and foster long-term partnerships.
        </p>
      </div>
      <hr className="border-white" />
      {/* Mission Section */}
      <div className="space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-cyan-400">OUR </span>
          <span>MISSION</span>
        </h2>
        <p className="text-gray-200 leading-relaxed">
          At Virtelon, our mission is to empower businesses to thrive in the digital age. We are dedicated to enhancing brand visibility, driving user engagement, and increasing conversion rates for clients. Our commitment to excellence is reflected in our consistent delivery of exceptional results, which we measure not only by the projects we complete but also by the significant impact we create for our clients.
        </p>
      </div>
      <hr className="border-white" />
      {/* Vision Section */}
      <div className="space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-cyan-400">OUR </span>
          <span>VISION</span>
        </h2>
        <p className="text-gray-200 leading-relaxed">
          We aspire to establish ourselves as the premier digital solutions provider for businesses on a global scale. Our vision is to create enduring partnerships characterized by trust, integrity, and mutual success. Through these strategic alliances, we are dedicated to supporting our clients in reaching their goals and consistently exceeding their expectations.
        </p>
      </div>
      <hr className="border-white" />
      {/* Strategy Section */}
      <div className="space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-cyan-400">OUR </span>
          <span>STRATEGY</span>
        </h2>
        <p className="text-gray-200 leading-relaxed">
          At Virtelon, we believe in a client-centric approach that prioritizes collaboration, communication, and transparency. By working closely with each client, we gain a deep understanding of their unique goals and challenges, allowing us to develop customized solutions that drive measurable results.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About