import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="w-full h-screen flex">
      {/* Left: Login Form */}
      <div className="w-[40%] flex flex-col justify-center items-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-[80%] max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-bold text-[#0A4747] mb-6">Login</h2>
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
          <button
            type="submit"
            className="w-full py-3 rounded-3xl bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white font-semibold text-lg transition-all duration-300"
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
      {/* Right: Image */}
      <div className="w-[60%] h-full flex items-center justify-center bg-[#ffffff]">
        <img
          src="/logingif.gif"
          alt="Login Illustration"
          className="w-full h-full object-contain rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Login;