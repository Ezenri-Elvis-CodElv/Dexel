import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Optional: send data to backend or API
  };

  return (
    <div
      className="min-h-screen text-white p-6"
      style={{
        backgroundImage: `
          linear-gradient(135deg, #0A4747 0%, #14B8A6 60%, #F59E42 100%),
          repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)
        `,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between mt-10">
        {/* Left: Info */}
        <div className="lg:w-1/2 mb-10">
          <p className="text-green-400 font-semibold">Contact Us</p>
          <h2 className="text-[40px] font-[500] text-[] mt-2">Learn how Gryndle integrates with your business.</h2>
          <p className="mt-4 text-slate-100 text-[16px]">
            Our team is here to help you with any questions or concerns you may have. Whether you're looking for more information about our services, need assistance with integration, or want to discuss your specific business needs, we're ready to assist you.
            Start on the road to borderless, frictionless payment acceptance today.
          </p>

          {/* Team Image & Card */}
          <div className="mt-8">
            <img src="/team-placeholder.jpg" alt="Team" className="rounded-lg w-full max-w-md" />
            <div className="mt-4 bg-white/10 p-4 rounded-md shadow-md text-white">
              <p className="text-sm text-gray-300">Total</p>
              <h3 className="text-xl font-bold">USD $4,845</h3>
              <div className="mt-2 text-sm space-y-1">
                <p>Bill & Taxes: <span className="text-red-400">-154.50</span></p>
                <p>Car Energy: <span className="text-red-400">-40.50</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-2/5 p-6 rounded-xl space-y-4 shadow-xl backdrop-blur-md bg-white/20 border border-white/20"
        >
          <h3 className="text-2xl font-semibold text-[white]">Contact Us</h3>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/40 placeholder:text-[#0A4747] text-[#0A4747] border border-white/30 focus:bg-white/70 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/40 placeholder:text-[#0A4747] text-[#0A4747] border border-white/30 focus:bg-white/70 focus:outline-none"
          />

          <input
            type="text"
            name="company"
            placeholder="Name of your company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/40 placeholder:text-[#0A4747] text-[#0A4747] border border-white/30 focus:bg-white/70 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Let us know how we can help you"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded bg-white/40 placeholder:text-[#0A4747] text-[#0A4747] border border-white/30 focus:bg-white/70 focus:outline-none"
          ></textarea>

          <label className="flex items-center space-x-2 text-sm text-[#0A4747]">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="accent-blue-600"
            />
            <span className='text-white'>Subscribe me to the newsletter</span>
          </label>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-[16px] font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, #0A4747 0%, #14B8A6 100%)",
              color: "#fff",
            }}
          >
            Send information <span className="ml-2">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
