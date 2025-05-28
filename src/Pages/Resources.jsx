import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const resources = [
  {
    icon: '/DocumentationAPIandGuides.jpg',
    title: "Documentation, API and Guides.",
    description: "Access our technical documentation, detailed guides and API references to integrate and optimize your business payments quickly and efficiently.",
  },
  {
    icon: '/TrustCenter.jpg',
    title: "Trust Center.",
    description: "Check our security, compliance and best practices policies to ensure the protection of your transactions and the trust of your customers.",
  },
  {
    icon: '/StatusPage.jpg',
    title: "Status Page.",
    description: "Monitor in real time the status of our services and receive updates on platform performance.",
  },
];

const Resource = () => {
  const nav = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[60vh] flex flex-col items-center justify-center text-center px-4"
        style={{
          background: "linear-gradient(135deg, #0A4747 0%, #14B8A6 60%, #F59E42 100%)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-white">Gryndle Resources</h1>
        <p className="mt-4 text-white/90 text-lg max-w-2xl">
          Everything you need to integrate our payment platform and start processing transactions securely and efficiently.
        </p>
      </section>

      {/* Image, Text, and Button Section */}
      <section className="min-h-[80vh] bg-white px-4 md:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {resources.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start w-full max-w-[350px] mx-auto"
          >
            {/* Image Box */}
            <div className="bg-white shadow-lg rounded-xl flex items-center justify-center p-0 h-[300px] w-full border border-[#14B8A6]/10 mb-4">
              <img
                src={item.icon}
                alt={item.title}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            {/* Text and Button */}
            <h3 className="text-lg font-semibold text-[#0A4747] mb-2">{item.title}</h3>
            <p className="text-[#0A4747]/80 text-sm mb-4">{item.description}</p>
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
              Access
              <span
                className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
                style={{ background: "#F59E42" }}
              >
                <GoArrowUpRight className="text-[#0A4747]" size={20} />
              </span>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resource;