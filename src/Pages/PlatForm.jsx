import React, { useState, useEffect, useRef } from 'react';
import { MdCallMade } from 'react-icons/md';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const tabs = [
  'Availability',
  'Easy integration',
  'Security and Compliance',
  'Artificial intelligence',
  'Data and Analysis',
  'Cloud',
];

const tabContent = {
  Availability: {
    leftImg: "/availability2.jpg",
    rightImg: "/availability1.jpg",
    centerLogos: ['Mastercard', 'Kua', 'Visa'],
  },
  'Easy integration': {
    leftImg: "/your-left-easyintegration-img.png",
    rightImg: "/your-right-easyintegration-img.png",
    centerLogos: ['Zapier', 'Kua', 'Slack'],
  },
  'Security and Compliance': {
    leftImg: "/your-left-security-img.png",
    rightImg: "/your-right-security-img.png",
    centerLogos: ['Shield', 'Kua', 'Lock'],
  },
  'Artificial intelligence': {
    leftImg: "/your-left-ai-img.png",
    rightImg: "/your-right-ai-img.png",
    centerLogos: ['AI', 'Kua', 'Brain'],
  },
  'Data and Analysis': {
    leftImg: "/your-left-data-img.png",
    rightImg: "/your-right-data-img.png",
    centerLogos: ['Graph', 'Kua', 'Excel'],
  },
  Cloud: {
    leftImg: "/your-left-cloud-img.png",
    rightImg: "/your-right-cloud-img.png",
    centerLogos: ['AWS', 'Kua', 'GCP'],
  },
};

const tabVariants = {
  initial: { opacity: 0, y: 40, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.18 } },
  exit: { opacity: 0, y: -40, scale: 0.97, transition: { duration: 0.4 } },
};

const Platform = () => {
  const [activeTab, setActiveTab] = useState('Availability');
  const nav = useNavigate();
  const tabContentRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  // GSAP for tab underline animation
  useEffect(() => {
    if (!tabContentRef.current) return;
    gsap.fromTo(
      tabContentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [activeTab]);

  const { leftImg, rightImg, centerLogos } = tabContent[activeTab];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-2 py-8"
      style={{
        background:
          'linear-gradient(135deg, #0A4747 0%, #14B8A6 60%, #F59E42 100%)',
      }}
    >
      <div className='w-[100%] md:w-[80%] h-[70vh] flex flex-col md:flex-row items-center justify-center mb-3'>
        <div className='w-full md:w-[50%] h-[100%] bg-transparent flex flex-col items-start justify-center p-8 gap-4 ' data-aos="fade-right">
          <h1 className='text-[45px] font-[300] text-[#ffffff] leading-snug'>
            <span className='text-[#14B8A6]'> Cloud-Native </span>
            Platform: secure, scalable and directly connected to Mastercard and Visa
          </h1>
          <p className='text-white/80 mt-2'>
            It guarantees the continuity, security and efficiency of operations with a platform that is certified under the highest standards worldwide.
          </p>
          <button
            className="h-[45px] md:h-[50px] w-full md:w-[150px] text-[14px] flex flex-row justify-around px-2 items-center rounded-3xl cursor-pointer font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, #0A4747 0%, #14B8A6 100%)",
              color: "#fff",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #14B8A6 0%, #0A4747 100%)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 24px #14B8A633";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #0A4747 0%, #14B8A6 100%)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={() => nav("/contact")}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Us
            <span
              className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
              style={{ background: "#F59E42" }}
            >
              <MdCallMade className="text-[#0A4747]" />
            </span>
          </button>
        </div>
        <div className='w-full md:w-[50%] h-[100%] bg-transparent flex items-center justify-center' data-aos="fade-left">
          <img src="/Cloud-NativeVisa.gif" alt="" className='w-[80%] h-[80%] rounded-2xl'/>
        </div>
      </div>
      <div className="max-w-5xl w-full text-center mt-8">
        <h2 className="text-3xl font-semibold text-white" data-aos="fade-up">Key benefits</h2>
        <p className="text-white/80 mt-2" data-aos="fade-up" data-aos-delay="100">
          Maximize the performance and security of your business.
        </p>

        {/* Tabs - horizontal scroll on mobile */}
        <div className="mt-6 mb-8 border-b-2 border-white relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#14B8A6] scrollbar-track-transparent md:justify-center">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                }}
                className="relative bg-transparent border-none outline-none px-1 pb-2 text-base md:text-lg font-semibold transition-colors duration-200"
                style={{
                  color: activeTab === tab ? "#F59E42" : "#fff",
                  background: "none",
                  cursor: "pointer",
                }}
                data-aos="fade-up"
                data-aos-delay={100 + idx * 50}
              >
                {tab}
                {/* White underline */}
                <span
                  className="absolute left-0 right-0 mx-auto bottom-[-7px] h-[3px] rounded bg-white transition-all duration-300"
                  style={{
                    width: "100%",
                    zIndex: 1,
                  }}
                />
                {/* Orange active underline */}
                <Motion.span
                  layoutId="active-underline"
                  className="absolute left-0 right-0 mx-auto bottom-[-7px] h-[3px] rounded transition-all duration-300"
                  style={{
                    width: activeTab === tab ? "100%" : "0%",
                    background: "#F59E42",
                    zIndex: 2,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  animate={{ width: activeTab === tab ? "100%" : "0%" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Animated Tab Content */}
        <div
          ref={tabContentRef}
          className="flex flex-col md:flex-row justify-center gap-8 mt-6 bg-white/90 rounded-2xl p-4 md:p-6 shadow-lg items-stretch min-h-[260px] min-w-0 transition-all duration-300"
          style={{
            transition: 'min-height 0.3s',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <Motion.div
              key={activeTab}
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col md:flex-row w-full items-center justify-center gap-8"
              style={{ minWidth: 0, width: "100%" }}
            >
              {/* Left Image */}
              <Motion.div
                className="w-full max-w-xs flex flex-col items-center flex-1"
                initial={{ opacity: 0, x: -40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={leftImg}
                  alt="Left visual"
                  className="w-full h-40 object-cover rounded-xl shadow"
                />
              </Motion.div>

              {/* Center Logos */}
              <Motion.div
                className="flex flex-col items-center gap-3 flex-1 min-w-[80px] justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {centerLogos.map((logo, idx) => (
                  <Motion.div
                    key={idx}
                    className="text-sm font-semibold text-[#0A4747]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  >
                    {logo}
                  </Motion.div>
                ))}
              </Motion.div>

              {/* Right Image */}
              <Motion.div
                className="w-full max-w-xs flex flex-col items-center flex-1"
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={rightImg}
                  alt="Right visual"
                  className="w-full h-40 object-cover rounded-xl shadow"
                />
              </Motion.div>
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Platform;