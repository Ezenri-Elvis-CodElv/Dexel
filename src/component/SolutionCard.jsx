import React, { useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";

const SolutionCard = ({
  image,
  name,
  description,
  solutions = [],
  reverse = false, // pass true for image left/text right
  cardBg = "#0A4747", // default background
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Flex direction based on reverse prop
  const flexDirection = reverse
    ? "flex-col md:flex-row-reverse"
    : "flex-col md:flex-row";

  return (
    <div
      className={`w-full max-w-5xl mx-auto my-8 flex ${flexDirection} rounded-2xl shadow-lg border-2 border-white/20 overflow-hidden`}
      style={{ background: cardBg }}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 md:p-8 gap-2 bg-white/80">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#0A4747]">{name}</h2>
        <p className="text-[#0A4747] mb-4 text-sm md:text-base">{description}</p>
        <div className="w-full">
          {solutions.map((sol, idx) => (
            <div key={idx} className="mb-2">
              <button
                className={`w-full flex items-center gap-3 text-[15px] md:text-[16px] font-[400] py-2 px-2 md:px-3 rounded-xl transition-all duration-200
                  ${openIndex === idx ? "bg-[#14B8A6]/20 text-[#0A4747]" : "bg-transparent text-[#0A4747]"}
                `}
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === idx ? "rotate-90" : "rotate-0"
                  }`}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaLongArrowAltRight className={openIndex === idx ? "text-[#0A4747]" : "text-[#14B8A6]"} />
                </span>
                <span className="flex-1 text-left">{sol.title}</span>
              </button>
              {/* Sub-description with smooth transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-40 opacity-100 py-2 px-2 md:px-4" : "max-h-0 opacity-0 py-0 px-2 md:px-4"
                }`}
                style={{ background: "rgba(20,184,166,0.08)", borderRadius: "0.75rem" }}
              >
                <p className="text-[#0A4747] text-xs md:text-sm">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#14B8A6]/80">
        <img
          src={image}
          alt={name}
          className="w-full h-40 md:h-72 lg:h-full object-cover rounded-2xl m-2 md:m-4"
        />
      </div>
    </div>
  );
};

export default SolutionCard;
