import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail, MdExpandMore } from "react-icons/md";
import {
  FaCloud,
  FaLock,
  FaCreditCard,
  FaRegQuestionCircle,
  FaHandsHelping,
} from "react-icons/fa";

const faqs = [
  {
    question: "What is Gryndle?",
    shortAnswer:
      "Gryndle is a cloud-native payment processing platform for secure, scalable, and efficient payments.",
    details: [
      "• Built on a modern cloud infrastructure for reliability and speed.",
      "• Supports businesses of all sizes, from startups to enterprises.",
      "• Offers seamless integration with global payment networks.",
      "• Provides real-time analytics and monitoring tools.",
    ],
    icon: <FaCloud className="text-3xl text-[#14B8A6]" />,
  },
  {
    question: "How do I integrate Gryndle with my business?",
    shortAnswer: "Integrate using our flexible API or no-code tools.",
    details: [
      "• Comprehensive API documentation for developers.",
      "• No-code tools for quick setup without programming.",
      "• Dedicated support team to assist with onboarding.",
      "• Sandbox environment for safe testing before going live.",
    ],
    icon: <FaRegQuestionCircle className="text-3xl text-[#F59E42]" />,
  },
  {
    question: "Is my data secure with Gryndle?",
    shortAnswer:
      "Yes, Gryndle uses industry-standard encryption and is certified under the highest security standards.",
    details: [
      "• End-to-end encryption for all transactions.",
      "• Regular security audits and compliance checks.",
      "• Certified under PCI DSS and other global standards.",
      "• 24/7 monitoring for suspicious activity.",
    ],
    icon: <FaLock className="text-3xl text-[#0A4747]" />,
  },
  {
    question: "What payment methods are supported?",
    shortAnswer: "Gryndle supports cards, bank transfers, wallets, and more.",
    details: [
      "• Visa, Mastercard, and other major card networks.",
      "• Local and international bank transfers.",
      "• Mobile wallets and alternative payment methods.",
      "• Easy addition of new payment options as your business grows.",
    ],
    icon: <FaCreditCard className="text-3xl text-[#14B8A6]" />,
  },
  {
    question: "How can I get support?",
    shortAnswer:
      "Our support team is available 24/7 via contact form or email.",
    details: [
      "• Fast response times from our expert team.",
      "• Help center with guides and troubleshooting tips.",
      "• Personalized onboarding and technical assistance.",
      "• Email: support@gryndle.com",
    ],
    icon: <FaHandsHelping className="text-3xl text-[#F59E42]" />,
  },
];

const Faqs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10"
      style={{
        background:
          "linear-gradient(135deg, #0A4747 0%, #14B8A6 60%, #F59E42 100%)",
      }}
    >
      <h1
        className="text-4xl md:text-5xl font-bold text-white mb-10 flex items-center gap-3"
        data-aos="fade-up"
      >
        <FaRegQuestionCircle className="text-[#F59E42] mb-1" />
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-2xl space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`bg-white/90 rounded-xl shadow-lg transition-all duration-500 overflow-hidden`}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <button
              className="w-full flex flex-row items-center gap-4 px-6 py-5 focus:outline-none group"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIdx === idx}
              style={{ background: "transparent" }}
            >
              <span className="flex flex-col items-center min-w-[60px]">
                {faq.icon}
              </span>
              <span className="flex-1 text-left">
                <span className="text-xl font-semibold text-[#0A4747]">
                  {faq.question}
                </span>
                <div className="block text-[#0A4747] text-base mt-1 opacity-80">
                  {faq.shortAnswer}
                </div>
              </span>
              <span
                className={`transition-transform duration-300 ml-2 ${
                  openIdx === idx
                    ? "rotate-180 text-[#14B8A6]"
                    : "rotate-0 text-[#F59E42]"
                }`}
              >
                <MdExpandMore size={28} />
              </span>
            </button>
            <div
              className={`transition-all duration-500 px-6 ${
                openIdx === idx
                  ? "max-h-96 py-4 opacity-100 bg-white/90"
                  : "max-h-0 py-0 opacity-0 bg-white/90"
              } overflow-hidden`}
              style={{
                borderTop: openIdx === idx ? "1px solid #e5e7eb" : "none",
              }}
            >
              {openIdx === idx && (
                <ul className="list-disc pl-5 text-[#0A4747] space-y-2">
                  {faq.details.map((line, i) => (
                    <li key={i} className="text-base">
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Official Email Section */}
      <div
        className="flex items-center gap-3 mt-10 bg-white/90 rounded-lg px-6 py-4 shadow"
        data-aos="fade-up"
        data-aos-delay={faqs.length * 100}
      >
        <MdEmail className="text-2xl text-[#14B8A6]" />
        <span className="text-lg font-semibold text-[#0A4747]">
          Official Email:{" "}
          <a
            href="mailto:support@gryndle.com"
            className="underline hover:text-[#F59E42]"
          >
            support@gryndletechnology@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Faqs;
