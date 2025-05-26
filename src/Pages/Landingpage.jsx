import React, { useEffect, useState } from "react";
import "animate.css";
import { MdCallMade } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";
import Card from "../component/Card";
import { FaAws, FaCcMastercard, FaCcVisa } from "react-icons/fa";

const words = ["Payment Facilitators", "Merchants", "Acquirers"];

const Landingpage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-screen relative"
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
            className="absolute w-[2px] h-full bg-white/10 animate-moveY"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "6s",
            }}
          />
        ))}
        {/* Horizontal Lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-[2px] w-full bg-white/10 animate-moveX"
            style={{
              top: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "6s",
            }}
          />
        ))}
      </div>

      {/* === Hero Section === */}
      <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden z-10">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/bgvideohero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 w-full h-full bg-[#00000072] bg-opacity-80 flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-[70%] h-auto md:h-[80%] flex px-4 md:px-7 flex-col items-start justify-center">
            <h1
              className="text-3xl md:text-[55px] font-[500] text-left animate__animated animate__zoomInLeft"
              style={{ color: "#fff" }}
            >
              Comprehensive Payment Processing Infrastructure for{" "}
              <span style={{ color: "#F59E42" }}>{words[current]}</span>
            </h1>
            <p
              className="text-lg md:text-[25px] font-[400] text-start mt-4 pl-1 md:pl-2.5"
              style={{ color: "#F5F7FA", textShadow: "0 2px 8px #0008" }}
            >
              Innovation, security and efficiency for all payment rails, powered by AI.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
              <button
                className="h-[45px] md:h-[50px] w-[170px] md:w-[150px] text-[14px] flex flex-row justify-around px-2 items-center rounded-3xl cursor-pointer font-semibold transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #0A4747 0%, #14B8A6 100%)",
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
                See Solutions
                <span
                  className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
                  style={{ background: "#F59E42" }}
                >
                  <MdCallMade className="text-[#0A4747]" />
                </span>
              </button>
              <button
                className="h-[45px] md:h-[50px] w-[170px] md:w-[150px] text-[14px] flex flex-row justify-around px-2 items-center rounded-3xl cursor-pointer font-semibold transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #0A4747 0%, #14B8A6 100%)",
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
          </div>
          <div className="w-full md:w-[60%] h-auto md:h-[80%] flex justify-center md:justify-end items-center mt-8 md:mt-0">
            <img src="/heropageimage2.png" alt="" className="w-[80%] md:w-auto" />
          </div>
        </div>
      </div>

      {/* API Section */}
      <div className="w-full h-auto md:h-[80vh] bg-white flex flex-col md:flex-row items-center justify-center py-10 md:py-0">
        <div className="w-[95%] h-auto md:h-[98%]">
          <div className="w-full h-auto md:h-[50%] flex flex-col md:flex-row items-center">
            <h1
              style={{ color: "#14B8A6" }}
              className="w-full md:w-[50%] h-auto md:h-[100%] text-2xl md:text-[40px] font-[500] px-4 md:px-7 flex justify-center items-center text-center md:text-left"
            >
              One API, multiple configurations.
            </h1>
            <p
              style={{ color: "#14B8A6" }}
              className="w-full md:w-[50%] h-auto md:h-[100%] text-[16px] font-[400] px-4 md:px-7 flex justify-center items-center text-center md:text-left mt-4 md:mt-0"
            >
              Gryndle's cloud platform facilitates secure and efficient
              payments, helping companies overcome the limitations of
              traditional systems.
            </p>
          </div>
          <div className="w-full h-auto md:h-[50%] flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 mt-8 md:mt-0">
            {/* Cards */}
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="w-[90%] md:w-[280px] h-[250px] shadow-2xl border-2 border-[#d1f0ed] rounded-2xl flex flex-col justify-center items-start pl-3 gap-2 p-2.5 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2 mb-6 md:mb-0"
              >
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-2xl">
                  <img src={`/box${i + 1}.png`} alt="" className="w-full h-full" />
                </div>
                <h1
                  className="text-[40px] font-[700]"
                  style={{ color: "#14B8A6" }}
                >
                  {["+10M", "99.99%", "100%", "24/7"][i]}
                </h1>
                <p
                  className="text-[14px] font-[300]"
                  style={{ color: "#14B8A6" }}
                >
                  {[
                    "Out-of-the-box capacity to process more than 10 million transactions per day, without compromising performance or stability.",
                    "Guaranteed uptime with architecture that operates simultaneously in more than 6 datacenters.",
                    "Configurable and accessible via API, including dashboard and interfaces ready to be integrated.",
                    "Continuous support with an expert team to ensure that the operation runs without critical interruptions.",
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Slider Section */}
      <div className="w-full h-auto md:h-[100vh] flex flex-col justify-center items-center py-10 md:py-0">
        <h1 className="w-full h-auto md:h-[20%] flex items-center justify-center text-2xl md:text-[40px] text-[white] font-[500] text-center">
          Solution that adapts to any type of business.
        </h1>
        <div className="w-full h-auto md:h-[80%] flex flex-col md:flex-row justify-around items-center">
          <Card />
        </div>
      </div>

      {/* Tools Section */}
      <div
        className="w-full h-auto md:h-[50vh] flex flex-col justify-center gap-10 bg-white items-start pl-4 md:pl-7 py-10 md:py-0"
        style={{
          clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
        }}
      >
        <h1 className="w-[95%] md:w-[90%] text-2xl md:text-[40px] text-[rgb(9,71,71)] text-primary font-[500] text-left">
          Access to the most advanced tools for management and optimization of
          payment operations.
        </h1>
        <p className="w-[90%] md:w-[60%] text-[16px] md:text-[18px] text-[rgb(9,71,71)] font-[300] text-left">
          From e-commerce to financial services, our solutions are designed to
          fit the needs of every industry.
        </p>
      </div>

      {/* Features Section */}
      <div
        className="w-full h-auto md:h-[100vh] flex flex-col justify-center items-center bg-white py-10 md:py-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 90%)",
        }}
      >
        <div className="w-[98%] md:w-[90%] h-auto md:h-[60%] flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Feature 1 */}
          <div className="w-full md:w-[30%] h-auto md:h-full flex flex-col items-center mb-8 md:mb-0">
            <div className="w-full h-[200px] md:h-[70%] rounded-2xl ">
              <img
                src="/cashoutabdpayment.gif"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h2 className="text-xl md:text-[30px] font-[300] text-[rgb(9,71,71)] pl-2.5 mt-4 md:mt-0 text-center md:text-left">
              Cashouts and scheduled payments
            </h2>
            <p className="text-[14px] pl-2.5 font-[200] text-[rgb(9,71,71)] text-center md:text-left">
              Tracking of settlement payments in order to expedite the payment
              of money to merchants.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="w-full md:w-[30%] h-auto md:h-full flex flex-col items-center gap-4 mb-8 md:mb-0">
            <div className="w-full h-[200px] md:h-[70%] rounded-2xl ">
              <img
                src="/AdvancedDataAnalysis.gif"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h2 className="text-xl md:text-[30px] font-[300] text-[rgb(9,71,71)] text-center md:text-left">
              Advanced Data Analysis
            </h2>
            <p className="text-[14px] font-[200] text-[rgb(9,71,71)] pl-2.5 text-center md:text-left">
              Detailed information to optimize your business and prevent fraud.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="w-full md:w-[30%] h-auto md:h-full flex flex-col items-center gap-4">
            <div className="w-full h-[200px] md:h-[70%] rounded-2xl ">
              <img
                src="/Chargebackmanagement.gif"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h2 className="text-xl md:text-[30px] font-[300] text-[rgb(9,71,71)] text-center md:text-left">
              Chargeback management
            </h2>
            <p className="text-[14px] font-[200] text-[rgb(9,71,71)] pl-2.5 text-center md:text-left">
              Efficient chargeback solutions that minimize losses and improve
              operations.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[90%] h-auto md:h-[30%] bg-white flex items-center justify-center mt-8 md:mt-0">
          <button
            className="h-[45px] md:h-[50px] w-[210px] text-[14px] flex flex-row justify-around px-2 items-center rounded-3xl cursor-pointer font-semibold transition-all duration-300 ml-4"
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
            Explore Our Solutions
            <span
              className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
              style={{ background: "#F59E42" }}
            >
              <MdCallMade className="text-[#0A4747]" />
            </span>
          </button>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="w-full h-auto md:h-[100vh] flex flex-col justify-center items-center  gap-5 py-10 md:py-0">
        <h1 className="text-3xl md:text-[40px] font-[500] text-white text-center">
          Integral platform for payment processing in Africa{" "}
        </h1>
        <p className="text-[16px] font-[200] text-white text-center">
          Easily integrate with our APIs and start processing immediately.
        </p>
        <button
          className="h-[45px] md:h-[50px] w-[210px] text-[14px] flex flex-row justify-around px-2 items-center rounded-3xl cursor-pointer font-semibold transition-all duration-300 ml-4"
          style={{
            background: "linear-gradient(90deg, #0A4747 0%, #14B8A6 100%)",
            color: "#fff",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(90deg, #a8d8d2 0%, #f0f4f3 100%)";
            e.currentTarget.style.color = "#14B8A6 ";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 24px #14B8A633";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(90deg, #ffffff 0%, #b5ccc9 100%)";
            e.currentTarget.style.color = "#14B8A6 ";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          View Documentation
          <span
            className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
            style={{ background: "#ee7e07" }}
          >
            <MdCallMade className="text-[#13a6a6]" />
          </span>
        </button>
        <div className="w-[90%] md:w-[40%] h-auto md:h-[70%] flex items-center justify-center animate-pulse anim mt-4">
          <img
            src="/documentation-removebg.png"
            alt=""
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>

      {/* Partners Section */}
      <div className="w-[100%] h-auto md:h-[100vh] bg-[#e7ebeb]/60 flex items-center justify-center flex-col p-4 gap-2 py-10 md:py-0">
        <h1 className="text-[50px] font-[400] text-[#0A4747] text-center">
          Our Partners
        </h1>
        <div className="w-[90%] h-auto md:h-[30%] flex flex-row items-center justify-center gap-7 flex-wrap">
          {/* Partner 1 */}
          <div className="w-[200px] h-[80px] flex items-center justify-center rounded-xl" style={{ background: "#d9edd5" }}>
            <img src="/Kora.svg" alt="" className="w-[70px] h-[50px] object-contain" />
          </div>
          {/* Partner 2 */}
          <div className="w-[200px] h-[80px] flex items-center justify-center rounded-xl" style={{ background: "#d9edd5" }}>
            <img src="/mastercard.jpg" alt="" className="w-[70px] h-[50px] object-contain rounded-lg" />
          </div>
          {/* Partner 3 */}
          <div className="w-[200px] h-[80px] flex items-center justify-center rounded-xl" style={{ background: "#d9edd5" }}>
            <FaAws style={{ width: "70px", height: "50px", color: "#FF9900" }} />
          </div>
          {/* Partner 4 */}
          <div className="w-[200px] h-[80px] flex items-center justify-center rounded-xl" style={{ background: "#d9edd5" }}>
            <FaCcVisa style={{ width: "70px", height: "50px", color: "#1A1F71" }} />
          </div>
        </div>
        <div className="w-[90%] h-auto md:h-[70%] flex flex-row items-center justify-center shadow-2xl rounded-2xl mt-4 "
          style={{
            background: "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)"
          }}
        >
          <div className="w-[50%] h-full flex flex-col items-center justify-center px-2 md:pl-6 gap-4 py-8 md:py-10">
            <h1 className="text-2xl md:text-[50px] font-[400] text-[#0A4747] leading-tight text-center">
              Ready to transform the payments experience in Africa ?
            </h1>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
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
            <img src="/Footer.gif" alt="" className="w-full h-full rounded-2xl object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
