import React from "react";
import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";

const ReportingAndData = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#eaf6fb] via-[#fdf6e3] to-[#fff7ed]">
    <motion.div
      className="bg-[#14B8A6]/20 rounded-2xl p-6 mb-6 shadow-xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, type: "spring" }}
    >
      <BsGraphUpArrow size={80} color="#0A4747" />
    </motion.div>
    <motion.h1
      className="text-4xl md:text-5xl font-bold text-[#0A4747] mb-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      Reporting & Data
    </motion.h1>
    <motion.p
      className="text-lg md:text-2xl text-[#64748B] max-w-2xl text-center mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      Access real-time data to optimize payments, decisions, and strategies. Make smarter moves with actionable insights.
    </motion.p>
    <motion.div
      className="w-32 h-2 bg-gradient-to-r from-[#14B8A6] to-[#F59E42] rounded-full"
      initial={{ width: 0 }}
      animate={{ width: "8rem" }}
      transition={{ delay: 0.7, duration: 1.2 }}
    />
  </div>
);

export default ReportingAndData;