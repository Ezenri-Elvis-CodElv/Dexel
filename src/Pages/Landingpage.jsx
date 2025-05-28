import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { MdCallMade } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";
import Card from "../component/Card";
import { FaAws, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = ["Payment Facilitators", "Merchants", "Acquirers"];

const Landingpage = () => {
  const [current, setCurrent] = useState(0);

  // Refs for GSAP
  const heroRef = useRef(null);
  const apiRef = useRef(null);
  const featuresRef = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
    if (apiRef.current) {
      gsap.fromTo(
        apiRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: apiRef.current,
            start: "top 80%",
          },
        }
      );
    }
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
    }
    if (partnersRef.current) {
      gsap.fromTo(
        partnersRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  // Framer Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  return (
    <div
      className="w-full min-h-screen relative"
      style={{
        background: "linear-gradient(135deg, #0A4747 0%, #14B8A6 60%, #F59E42 100%)",
      }}
    >
      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-[2px] h-full bg-white/10 animate-moveY"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "6s",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.1, duration: 1 }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-[2px] w-full bg-white/10 animate-moveX"
            style={{
              top: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "6s",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.1, duration: 1 }}
          />
        ))}
      </motion.div>

      {/* === Hero Section === */}
      <div
        className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden z-10"
        ref={heroRef}
      >
        <motion.video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/bgvideohero.mp4"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="relative z-10 w-full h-full bg-[#00000072] bg-opacity-80 flex flex-col md:flex-row justify-center items-center">
          <motion.div
            className="w-full md:w-[70%] h-auto md:h-[80%] flex px-4 md:px-7 flex-col items-start justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h1
              className="text-3xl md:text-[55px] font-[500] text-left animate__animated animate__zoomInLeft"
              style={{ color: "#fff" }}
              data-aos="fade-up"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1 }}
            >
              Comprehensive Payment Processing Infrastructure for{" "}
              <span style={{ color: "#F59E42" }}>{words[current]}</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-[25px] font-[400] text-start mt-4 pl-1 md:pl-2.5"
              style={{ color: "#F5F7FA", textShadow: "0 2px 8px #0008" }}
              data-aos="fade-up"
              data-aos-delay="100"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.1 }}
            >
              Innovation, security and efficiency for all payment rails, powered by AI.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              <button
                className="h-[45px] md:h-[50px] w-full md:w-[150px] text-[14px] flex flex-row justify-around px-2 items-center rounded-3xl cursor-pointer font-semibold transition-all duration-300"
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
                data-aos="fade-up"
                data-aos-delay="200"
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
                className="h-[45px] md:h-[50px] w-full md:w-[150px] text-[14px] flex flex-row justify-around px-2 items-center rounded-3xl cursor-pointer font-semibold transition-all duration-300"
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
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Contact Us
                <span
                  className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
                  style={{ background: "#F59E42" }}
                >
                  <MdCallMade className="text-[#0A4747]" />
                </span>
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-[60%] h-auto md:h-[80%] flex justify-center md:justify-end items-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.2 }}
          >
            <img
              src="/heropageimage2.png"
              alt=""
              className="w-[80%] md:w-auto"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            />
          </motion.div>
        </div>
      </div>

      {/* API Section */}
      <div
        className="w-full h-auto md:h-[80vh] bg-white flex flex-col md:flex-row items-center justify-center py-10 md:py-0"
        ref={apiRef}
      >
        <motion.div
          className="w-[95%] h-auto md:h-[98%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="w-full h-auto md:h-[50%] flex flex-col md:flex-row items-center">
            <h1
              style={{ color: "#14B8A6" }}
              className="w-full md:w-[50%] h-auto md:h-[100%] text-2xl md:text-[40px] font-[500] px-4 md:px-7 flex justify-center items-center text-center md:text-left"
              data-aos="fade-right"
            >
              One API, multiple configurations.
            </h1>
            <p
              style={{ color: "#14B8A6" }}
              className="w-full md:w-[50%] h-auto md:h-[100%] text-[16px] font-[400] px-4 md:px-7 flex justify-center items-center text-center md:text-left mt-4 md:mt-0"
              data-aos="fade-left"
            >
              Gryndle's cloud platform facilitates secure and efficient
              payments, helping companies overcome the limitations of
              traditional systems.
            </p>
          </div>
          <div className="w-full h-auto md:h-[50%] flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 mt-8 md:mt-0">
            {/* Cards */}
            {[1, 2, 3, 4].map((_, i) => (
              <motion.div
                key={i}
                className="w-[90%] md:w-[280px] h-[250px] shadow-2xl border-2 border-[#d1f0ed] rounded-2xl flex flex-col justify-center items-start pl-3 gap-2 p-2.5 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2 mb-6 md:mb-0"
                data-aos="fade-up"
                data-aos-delay={100 * i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.7 }}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Card Slider Section */}
      <motion.div
        className="w-full h-auto md:h-[100vh] flex flex-col justify-center items-center py-10 md:py-0"
        ref={featuresRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1
          className="w-full h-auto md:h-[20%] flex items-center justify-center text-2xl md:text-[40px] text-[white] font-[500] text-center"
          data-aos="fade-up"
        >
          Solution that adapts to any type of business.
        </h1>
        <div
          className="w-full h-auto md:h-[80%] flex flex-col md:flex-row justify-around items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Card />
        </div>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        className="w-full h-auto md:h-[50vh] flex flex-col justify-center gap-10 bg-white items-start pl-4 md:pl-7 py-10 md:py-0"
        style={{
          clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
        }}
        data-aos="fade-up"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
      >
        <h1 className="w-[95%] md:w-[90%] text-2xl md:text-[40px] text-[rgb(9,71,71)] text-primary font-[500] text-left">
          Access to the most advanced tools for management and optimization of
          payment operations.
        </h1>
        <p className="w-[90%] md:w-[60%] text-[16px] md:text-[18px] text-[rgb(9,71,71)] font-[300] text-left">
          From e-commerce to financial services, our solutions are designed to
          fit the needs of every industry.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="w-full h-auto md:h-[100vh] flex flex-col justify-center items-center bg-white py-10 md:py-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 90%)",
        }}
        data-aos="fade-up"
        ref={featuresRef}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-[98%] md:w-[90%] h-auto md:h-[60%] flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Feature 1 */}
          <motion.div
            className="w-full md:w-[30%] h-auto md:h-full flex flex-col items-center mb-8 md:mb-0"
            data-aos="fade-right"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
          >
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
          </motion.div>
          {/* Feature 2 */}
          <motion.div
            className="w-full md:w-[30%] h-auto md:h-full flex flex-col items-center gap-4 mb-8 md:mb-0"
            data-aos="fade-up"
            data-aos-delay="100"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
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
          </motion.div>
          {/* Feature 3 */}
          <motion.div
            className="w-full md:w-[30%] h-auto md:h-full flex flex-col items-center gap-4"
            data-aos="fade-left"
            data-aos-delay="200"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.4 }}
          >
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
          </motion.div>
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
            data-aos="fade-up"
            data-aos-delay="300"
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
      </motion.div>

      {/* Documentation Section */}
      <motion.div
        className="w-full h-auto md:h-[100vh] flex flex-col justify-center items-center  gap-5 py-10 md:py-0"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
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
          data-aos="fade-up"
          data-aos-delay="200"
        >
          View Documentation
          <span
            className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
            style={{ background: "#ee7e07" }}
          >
            <MdCallMade className="text-[#13a6a6]" />
          </span>
        </button>
        <motion.div
          className="w-[90%] md:w-[40%] h-auto md:h-[70%] flex items-center justify-center animate-pulse anim mt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/documentation-removebg.png"
            alt=""
            className="w-full h-full rounded-2xl"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
        </motion.div>
      </motion.div>

      {/* Partners Section */}
      <motion.div
        className="w-[100%] h-auto md:h-[100vh] bg-[#e7ebeb]/60 flex items-center justify-center flex-col p-4 gap-2 py-10 md:py-0"
        data-aos="fade-up"
        ref={partnersRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-[50px] font-[400] text-[#0A4747] text-center">
          Our Partners
        </h1>
        <div className="w-[90%] h-auto md:h-[30%] flex flex-row items-center justify-center gap-7 flex-wrap">
          {/* Partner 1 */}
          <motion.div
            className="w-[200px] h-[80px] flex items-center justify-center rounded-xl"
            style={{ background: "#d9edd5" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <img src="/Kora.svg" alt="" className="w-[70px] h-[50px] object-contain" />
          </motion.div>
          {/* Partner 2 */}
          <motion.div
            className="w-[200px] h-[80px] flex items-center justify-center rounded-xl"
            style={{ background: "#d9edd5" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <img src="/mastercard.jpg" alt="" className="w-[70px] h-[50px] object-contain rounded-lg" />
          </motion.div>
          {/* Partner 3 */}
          <motion.div
            className="w-[200px] h-[80px] flex items-center justify-center rounded-xl"
            style={{ background: "#d9edd5" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <FaAws style={{ width: "70px", height: "50px", color: "#FF9900" }} />
          </motion.div>
          {/* Partner 4 */}
          <motion.div
            className="w-[200px] h-[80px] flex items-center justify-center rounded-xl"
            style={{ background: "#d9edd5" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <FaCcVisa style={{ width: "70px", height: "50px", color: "#1A1F71" }} />
          </motion.div>
        </div>
        <motion.div
          className="w-[90%] h-auto md:h-[70%] flex flex-row items-center justify-center shadow-2xl rounded-2xl mt-4 "
          style={{
            background: "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)"
          }}
          data-aos="fade-up"
          data-aos-delay="200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-[50%] h-full flex flex-col items-center justify-center px-2 md:pl-6 gap-4 py-8 md:py-10">
            <h1 className="text-2xl md:text-[50px] font-[400] text-[#0A4747] leading-tight text-center"
              data-aos="fade-right"
            >
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
                data-aos="fade-up"
                data-aos-delay="300"
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
                data-aos="fade-up"
                data-aos-delay="400"
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
            <img src="/Footer.gif" alt="" className="w-full h-full rounded-2xl object-contain"
              data-aos="zoom-in-up"
              data-aos-delay="500"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landingpage;
