import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

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
    <div className="w-full min-h-screen flex flex-col md:flex-row items-stretch bg-[#f7fafc]">
      {/* Left: Logo and Description (fixed, non-scrollable) */}
      <div
        className="hidden md:flex flex-col justify-center items-center w-1/2 fixed left-0 top-0 bottom-0 h-full z-10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A4747 60%, #14B8A6 100%)",
          position: "fixed",
        }}
      >
        {/* SVG grid lines for background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ opacity: 0.1 }}
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <img
            src="/logo.gif"
            alt="Logo"
            className="w-32 mb-6 rounded-2xl"
          />
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Welcome Back to Gryndle
          </h2>
          <p className="text-lg text-[#F5F7FA] text-center max-w-md">
            Securely access your business dashboard and manage your payments,
            compliance, and growth with Gryndle's fintech platform.
          </p>
        </div>
      </div>
      {/* Right: Login Form (scrollable, 50% width) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:ml-[50vw] md:pl-0">
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
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
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