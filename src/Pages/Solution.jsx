import React from "react";
import {
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaChartLine,
  FaKey,
} from "react-icons/fa";
import { MdCallMade } from "react-icons/md";
import SolutionCard from "../component/SolutionCard";
import { useNavigate } from "react-router-dom";
// import crypto from '../../public/crypto.png';

const solutions = [
  {
    icon: <FaMoneyCheckAlt size={30} className="text-[#0A4747]" />,
    title: "Payrolls",
  },
  {
    icon: <FaShieldAlt size={30} className="text-[#14B8A6]" />,
    title: "Fraud Prevention",
  },
  {
    icon: <FaChartLine size={30} className="text-[#F59E42]" />,
    title: "Automated Reports",
  },
  {
    icon: <FaKey size={30} className="text-[#0A4747]" />,
    title: "API Integration",
  },
];

 

const Solution = () => {
  const nav = useNavigate();
  
  
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #0A4747 0%, #14B8A6 60%, #F59E42 100%)",
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
          <strong>Robust and scalable infrastructure</strong> that enables
          gateways, payment aggregators and acquirers to integrate technology in
          an agile way. With a flexible API and a clear <strong>sandbox</strong>
          , we ensure fast implementations and seamless experiences.
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
        <div className="rounded-2xl border-2 border-white/40 bg-white/30 p-6 md:p-8 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 fade-box-grid shadow-lg">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/80 w-[130px] h-[130px] md:w-[160px] md:h-[160px] p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-white/40"
            >
              <div className="mb-3">{item.icon} </div>
              <p className="text-sm font-medium text-center text-[#0A4747]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <SolutionCard
  image="/Acquiringbanksandfintechs.jpg"
  name="Acquiring banks and fintechs"
  description="Our technology enables banks and fintechs to modernize their payments infrastructure, improve conversion and scale without friction."
  cardBg="linear-gradient(135deg, #31c0d6, #49b0e3, #6e8ae6, #797be0)"
  solutions={[
    {
      title: "Optimized routing and processing",
      desc: "Our platform intelligently routes transactions for maximum efficiency and reliability.",
    },
    {
      title: "Advanced risk and fraud management",
      desc: "Customization of rules based on machine learning and 24/7 monitoring.",
    },
    {
      title: "Automated reconciliation",
      desc: "Comparison of transactions with cleared funds for greater transparency.",
    },
    {
      title: "Instant and programmable cashouts",
      desc: "Optimization of liquidity and streamlining of funds availability.",
    },
    {
      title: "Real-time data access",
      desc: "Performance analysis with advanced dashboards and reporting APIs.",
    },
    {
      title: "Compatibility with banking infrastructure",
      desc: "Flexible integration with core banking systems and acquiring processors.",
    },
  ]}
/>
      <SolutionCard
  image="/Paymentgateways .jpg"
  name="Payment gateways"
  description="Our infrastructure empowers payment gateways with greater stability, security and payment options, optimizing conversion and operational efficiencies."
  cardBg="#b8edff"
  solutions={[
    {
      title: "Real-time payment processing",
      desc: "Minimum latency and optimization for high transaction volumes.",
    },
    {
      title: "Intelligent routing",
      desc: "Redirecting payments to the most efficient acquirer based on success rates and costs.",
    },
    {
      title: "Support for payments in a single integration",
      desc: "Integration of multiple payment methods (cards, transfers, BNPL, wallets).",
    },
    {
      title: "Tokenization and advanced security",
      desc: "Data protection through PCI DSS standards.",
    },
    {
      title: "Dashboard with real-time reporting",
      desc: "Detailed information on payment performance, approval and rejection rates..",
    },
  
  ]}
  reverse
/>
      <SolutionCard
  image="/PaymentAggregators.jpg"
  name="Fintech Innovators"
  description="Empowering fintechs to scale and innovate with modern infrastructure."
  cardBg="#f5fafa"
  solutions={[
    {
      title: "Instant Settlements",
      desc: "Get your funds instantly with our advanced settlement engine.",
    },
    {
      title: "Customizable Workflows",
      desc: "Tailor payment flows to your business needs.",
    },
    {
      title: "Scalable Infrastructure",
      desc: "Easily scale your operations with our robust infrastructure.",
    },
    {
      title: "Advanced Analytics",
      desc: "Gain insights into your business with our powerful analytics tools.",
    },
    {
      title: "Flexible API",
      desc: "Integrate with our flexible API for seamless connectivity.",
    },
    {
      title: "Dedicated Support",
      desc: "Receive dedicated support to help you succeed.",
    },
  ]}
 
/>
      <div
        className="w-[90%] h-auto md:h-[70%] flex flex-row items-center justify-center shadow-2xl pl-5 md:pl-0 rounded-2xl mt-4 mb-4"
        style={{
          background: "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)",
        }}
      >
        <div className="w-[50%] h-full flex flex-col items-center justify-center px-2 md:pl-6 gap-4 py-8 md:py-10">
          <h1 className="text-2xl md:text-[50px] font-[400] text-[#0A4747] leading-tight text-start">
            Start on the road to borderless, frictionless payment acceptance
            today.
          </h1>
          <div className="w-full flex flex-col md:flex-row items-center justify-start gap-4">
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
            >
              Contact Us
              <span
                className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
                style={{ background: "#F59E42" }}
              >
                <MdCallMade className="text-[#0A4747]" />
              </span>
            </button>
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
              onClick={() => nav("/signup")}
            >
              Register Now
              <span
                className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
                style={{ background: "#F59E42" }}
              >
                <MdCallMade className="text-[#0A4747]" />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[50%] h-full ">
          <img
            src="/Footer.gif"
            alt=""
            className="w-full h-full rounded-2xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
