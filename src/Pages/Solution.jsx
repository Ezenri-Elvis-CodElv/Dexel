import React from 'react';
import { FaMoneyCheckAlt, FaShieldAlt, FaChartLine, FaKey } from 'react-icons/fa';
import { MdCallMade } from 'react-icons/md';

const solutions = [
  { icon: <FaMoneyCheckAlt size={30} className="text-[#0A4747]" />, title: 'Payrolls' },
  { icon: <FaShieldAlt size={30} className="text-[#14B8A6]" />, title: 'Fraud Prevention' },
  { icon: <FaChartLine size={30} className="text-[#F59E42]" />, title: 'Automated Reports' },
  { icon: <FaKey size={30} className="text-[#0A4747]" />, title: 'API Integration' },
];

const Solution = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0A4747 0%, #14B8A6 60%, #F59E42 100%)",
      }}
    >
      {/* === Background Lines: Vertical and Horizontal === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Vertical Lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-[2px] h-full bg-white/10"
            style={{
              left: `${i * 10}%`,
              top: 0,
            }}
          />
        ))}
        {/* Horizontal Lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-[2px] w-full bg-white/10"
            style={{
              top: `${i * 10}%`,
              left: 0,
            }}
          />
        ))}
        {/* Top border line */}
        <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-[#0A4747] via-[#14B8A6] to-[#F59E42] opacity-80" />
        {/* Left border line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#0A4747] via-[#14B8A6] to-[#F59E42] opacity-80" />
      </div>

      {/* Outer Box */}
      <div className="relative z-10 mx-auto p-6 md:p-10 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md shadow-2xl max-w-6xl w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white drop-shadow">
          Flexible integration with Gryndle
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed text-center max-w-2xl">
          <strong>Robust and scalable infrastructure</strong> that enables gateways, payment aggregators and acquirers to integrate technology in an agile way. With a flexible API and a clear <strong>sandbox</strong>, we ensure fast implementations and seamless experiences.
        </p>
        <div className="flex justify-center mb-8">
          <button
            className="h-[45px] md:h-[50px] w-[170px] md:w-[150px] text-[14px] flex flex-row justify-center px-2 items-center rounded-3xl cursor-pointer font-semibold transition-all duration-300"
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
        {/* Inner Box for Solutions */}
        <div className="rounded-2xl border-2 border-white/40 bg-white/30 p-6 md:p-8 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 fade-box-grid shadow-lg">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/80 w-[130px] h-[130px] md:w-[160px] md:h-[160px] p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-white/40"
            >
              <div className="mb-3">{item.icon}</div>
              <p className="text-sm font-medium text-center text-[#0A4747]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;