import React, { useState } from 'react';
import Contactimg from "../assets/Contact_img.png"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    source: '',
    query: ''
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">GET IN TOUCH</h1>
        <p className="text-sm md:text-base mb-4 text-center md:text-left">
          LET'S TALK ABOUT WHAT WE CAN CREATE TOGETHER AND EXPLORE THE CREATIVE POSSIBILITIES OF OUR COLLABORATION!
          WHETHER YOU'RE LOOKING FOR INNOVATIVE SOLUTIONS FOR YOUR DREAM PROJECT OR SIMPLY HAVE AN IDEA, WE'D LOVE TO HEAR FROM YOU!
        </p>
        <p className="text-sm mb-8 text-center md:text-left">
          FILL OUT THE FORM ON THIS PAGE, AND ONE OF OUR TEAM MEMBERS WILL BE IN TOUCH SHORTLY TO DISCUSS YOUR PROJECT AND WHAT WE CAN CREATE TOGETHER!
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex justify-center items-center">
            <img 
              src={Contactimg} 
              alt="Contact illustration" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="w-full p-2 bg-gray-50 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none "
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full p-2 bg-gray-50 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full p-2 bg-gray-50 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website"
              className="w-full p-2 bg-gray-50 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="How did you hear about us?"
              className="w-full p-2 bg-gray-50 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none"
            />
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Tell us about your query*"
              required
              className="w-full p-2 bg-gray-50 rounded border border-gray-600 focus:border-cyan-400 focus:outline-none h-32"
            ></textarea>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-cyan-400 focus:ring-cyan-400"
              />
              <label htmlFor="terms" className="text-sm">
                BY SUBMITTING THIS FORM, I AGREE TO PUNCTUATE'S PRIVACY POLICY AND TERMS OF USE.
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#40E0D0] hover:bg-[#3BC9BA] text-black font-semibold px-6 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!agreeToTerms}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;