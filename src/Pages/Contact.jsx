import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subscribe: false,
  });

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

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
        <div className="lg:w-1/2 mb-10" data-aos="fade-right">
          <p className="text-green-400 font-semibold">Contact Us</p>
          <h2 className="text-[40px] font-[500] mt-2">Learn how Gryndle integrates with your business.</h2>
          <p className="mt-4 text-slate-100 text-[16px]">
            Our team is here to help you with any questions or concerns you may have. Whether you're looking for more information about our services, need assistance with integration, or want to discuss your specific business needs, we're ready to assist you.
            Start on the road to borderless, frictionless payment acceptance today.
          </p>

          {/* Team Image & Card */}
          <div className="mt-8 flex flex-row gap-4 items-center justify-between">
            <img src="/ntegrateswithyourbusiness..jpg" alt="Team" className="rounded-lg w-[30%] max-w-md" data-aos="zoom-in" data-aos-delay="100" />
            <img src="/IMG_2493.jpeg" alt="Team" className="rounded-lg w-[30%] max-w-md" data-aos="zoom-in" data-aos-delay="200" />
            <img src="/IMG_2540 copy.jpeg" alt="Team" className="rounded-lg w-[30%] max-w-md" data-aos="zoom-in" data-aos-delay="300" />
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-2/5 p-6 rounded-xl space-y-4 shadow-xl backdrop-blur-md bg-white/20 border border-white/20"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-[white]">Contact Us</h3>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/40 placeholder:text-[#0A4747] text-[#0A4747] border border-white/30 focus:bg-white/70 focus:outline-none"
            data-aos="fade-up"
            data-aos-delay="100"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/40 placeholder:text-[#0A4747] text-[#0A4747] border border-white/30 focus:bg-white/70 focus:outline-none"
            data-aos="fade-up"
            data-aos-delay="150"
          />

          <input
            type="text"
            name="company"
            placeholder="Name of your company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/40 placeholder:text-[#0A4747] text-[#0A4747] border border-white/30 focus:bg-white/70 focus:outline-none"
            data-aos="fade-up"
            data-aos-delay="200"
          />

          <textarea
            name="message"
            placeholder="Let us know how we can help you"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded bg-white/40 placeholder:text-[#0A4747] text-[#0A4747] border border-white/30 focus:bg-white/70 focus:outline-none"
            data-aos="fade-up"
            data-aos-delay="250"
          ></textarea>

          <label className="flex items-center space-x-2 text-sm text-[#0A4747]" data-aos="fade-up" data-aos-delay="300">
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
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Send information <span className="ml-2">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
