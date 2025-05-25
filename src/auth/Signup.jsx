import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    fullname: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!form.terms) {
      alert("You must accept the terms and conditions.");
      return;
    }
    // Submit form
    console.log(form);
  };

  return (
    <div className="w-full h-screen flex">
      {/* Left: Signup Form */}
      <div className="w-[40%] flex flex-col justify-center items-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-[80%] max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-bold text-[#0A4747] mb-6">Sign Up</h2>
          <div>
            <label className="block text-[#0A4747] mb-2">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-[#0A4747] mb-2">Company Name</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none"
              placeholder="Enter your company name"
            />
          </div>
          <div>
            <label className="block text-[#0A4747] mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-[#0A4747] mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-[#0A4747] mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              className="mr-2 accent-[#14B8A6]"
              required
            />
            <span className="text-sm text-[#0A4747]">
              I agree to the{" "}
              <a href="#" className="text-[#14B8A6] underline">
                Terms and Conditions
              </a>
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-3xl bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white font-semibold text-lg transition-all duration-300"
          >
            Sign Up
          </button>
          <div className="text-center mt-4 flex flex-col gap-2">
            <span className="text-[#0A4747]">Already have an account?</span>
            {/* <Link
              to="/login"
              className="w-full py-2 rounded-3xl bg-[#14B8A6] text-white font-semibold hover:bg-[#0A4747] transition-all duration-300"
            >
              Login
            </Link> */}
            <Link
              to="/login"
              className="w-full py-2 rounded-3xl border border-[#14B8A6] text-[#14B8A6] font-semibold hover:bg-[#14B8A6] hover:text-white transition-all duration-300"
            >
              Go to Login
            </Link>
          </div>
        </form>
      </div>
      {/* Right: Image */}
      <div className="w-[60%] h-full flex items-center justify-center bg-[#ffffff]]">
        <img
          src="/signup.gif"
          alt="Signup Illustration"
          className="w-full h-full object-contain rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Signup;