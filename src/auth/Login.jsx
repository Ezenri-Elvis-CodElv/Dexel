import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(form);
  };

  // Validation for enabling the button
  const isFormValid = form.email.trim() && form.password.trim();

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-stretch bg-[#eaf6fb] relative">
      {/* Mobile: Logo as background */}
      <div
        className="md:hidden absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #eaf6fb 60%, #fdf6e3 100%)",
        }}
      >
        <img
          src="/logo.gif"
          alt="Logo"
          className="w-full h-full object-cover opacity-10"
          style={{ position: "absolute", inset: 0 }}
        />
      </div>
      {/* Home/Back Icon for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-20 bg-white/80 rounded-full p-2 shadow-md"
        onClick={() => navigate("/")}
        aria-label="Go to Home"
        type="button"
      >
        <IoHomeOutline className="text-2xl text-[#0A4747]" />
      </button>
      {/* Left: Animated Water/Clouds and Logo (desktop only) */}
      <div
        className="hidden md:flex flex-col justify-center items-center w-1/2 fixed left-0 top-0 bottom-0 h-full z-10 overflow-hidden"
        style={{ position: "fixed" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(135deg, #f7fafc 0%, #eaf6fb 60%, #fdf6e3 100%)
            `,
            transition: "background 0.7s",
            filter: "blur(0.5px) drop-shadow(0 8px 40px #eaf6fbAA)",
          }}
        >
          {/* SVG Water Waves and Bubbles */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 800"
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.22 }}
          >
            <defs>
              <linearGradient id="waterGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#b2e6f7" />
                <stop offset="60%" stopColor="#F59E42" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,700 Q300,650 600,700 T1200,700 V800 H0Z"
              fill="url(#waterGrad)"
              animate={{
                d: [
                  "M0,700 Q300,650 600,700 T1200,700 V800 H0Z",
                  "M0,700 Q300,720 600,700 T1200,700 V800 H0Z",
                  "M0,700 Q300,650 600,700 T1200,700 V800 H0Z",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0,750 Q300,730 600,750 T1200,750 V800 H0Z"
              fill="#F59E42"
              opacity={0.5}
              animate={{
                d: [
                  "M0,750 Q300,730 600,750 T1200,750 V800 H0Z",
                  "M0,750 Q300,770 600,750 T1200,750 V800 H0Z",
                  "M0,750 Q300,730 600,750 T1200,750 V800 H0Z",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 13,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            {/* Animated Bubbles */}
            <motion.circle
              cx="120"
              cy="700"
              r="18"
              fill="#fff"
              opacity={0.7}
              animate={{
                cy: [700, 400, 200, 700],
                opacity: [0.7, 0.5, 0.3, 0.7],
                r: [18, 22, 16, 18],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "easeInOut",
                delay: 0,
              }}
            />
            <motion.circle
              cx="320"
              cy="750"
              r="10"
              fill="#F59E42"
              opacity={0.6}
              animate={{
                cy: [750, 500, 300, 750],
                opacity: [0.6, 0.4, 0.2, 0.6],
                r: [10, 14, 8, 10],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.circle
              cx="500"
              cy="780"
              r="14"
              fill="#fff"
              opacity={0.5}
              animate={{
                cy: [780, 600, 350, 780],
                opacity: [0.5, 0.3, 0.1, 0.5],
                r: [14, 18, 12, 14],
              }}
              transition={{
                repeat: Infinity,
                duration: 14,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.circle
              cx="200"
              cy="790"
              r="8"
              fill="#F59E42"
              opacity={0.7}
              animate={{
                cy: [790, 600, 400, 790],
                opacity: [0.7, 0.5, 0.2, 0.7],
                r: [8, 12, 7, 8],
              }}
              transition={{
                repeat: Infinity,
                duration: 11,
                ease: "easeInOut",
                delay: 3,
              }}
            />
          </svg>
        </motion.div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <img
            src="/logo.gif"
            alt="Logo"
            className="w-32 mb-6 rounded-2xl"
          />
          <h2 className="text-3xl font-bold text-[#0A4747] mb-4 text-center">
            Welcome Back to Gryndle
          </h2>
          <p className="text-lg text-[#0A4747] text-center max-w-md">
            Securely access your business dashboard and manage your payments,
            compliance, and growth with Gryndle's fintech platform.
          </p>
        </div>
      </div>
      {/* Right: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:ml-[50vw] md:pl-0 relative z-10">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl px-4 py-8 md:px-10 md:py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A4747] mb-6 text-center">
            Login to your account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block text-[#0A4747] mb-2">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-[#0A4747] mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 pr-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-[#14B8A6]"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={0}
                  role="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <div className="text-right mt-2">
                <Link
                  to="/forgot-password"
                  className="text-[#14B8A6] text-sm font-semibold hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-3xl bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white font-semibold text-lg transition-all duration-300 ${
                isFormValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Login
            </button>
            <div className="text-center mt-4">
              <span className="text-[#0A4747]">Don't have an account?</span>
              <Link
                to="/signup"
                className="ml-2 text-[#14B8A6] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;