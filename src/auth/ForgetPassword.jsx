import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log(email);
  };

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
          <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.10 }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <img src="/logo.gif" alt="Logo" className="w-32 mb-6 rounded-2xl" />
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Forgot your password?</h2>
          <p className="text-lg text-[#F5F7FA] text-center max-w-md">
            Enter your email address to reset your password and regain access to your Gryndle account.
          </p>
        </div>
      </div>
      {/* Right: Forget Password Form (scrollable, 50% width) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:ml-[50vw] md:pl-0">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl px-4 py-8 md:px-10 md:py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A4747] mb-6 text-center">
            Reset Password
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block text-[#0A4747] mb-2">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-3xl bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white font-semibold text-lg transition-all duration-300"
            >
              Send Reset Link
            </button>
            <div className="text-center mt-4">
              <Link
                to="/login"
                className="text-[#14B8A6] font-semibold hover:underline"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;