import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaGlobe, FaLock, FaRegQuestionCircle } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { IoSearch, IoHomeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Modal } from "antd";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// Helper to get emoji flag from country code
function getFlagEmoji(countryName) {
  // Mapping for special cases (multi-word, etc.)
  const specialFlags = {
    "United States": "US",
    "United Kingdom": "GB",
    "South Africa": "ZA",
    "Czech Republic": "CZ",
    "Central African Republic": "CF",
    "North Macedonia": "MK",
    "New Zealand": "NZ",
    "Papua New Guinea": "PG",
    "Saudi Arabia": "SA",
    "South Korea": "KR",
    "North Korea": "KP",
    "United Arab Emirates": "AE",
    "Vatican City": "VA",
    "Dominican Republic": "DO",
    "Trinidad and Tobago": "TT",
    "Sri Lanka": "LK",
    "Saint Lucia": "LC",
    "Saint Kitts and Nevis": "KN",
    "Saint Vincent and the Grenadines": "VC",
    "Solomon Islands": "SB",
    "Marshall Islands": "MH",
    "Micronesia": "FM",
    "Timor-Leste": "TL",
    "Sao Tome and Principe": "ST",
    "Antigua and Barbuda": "AG",
    "Bosnia and Herzegovina": "BA",
    "Burkina Faso": "BF",
    "Equatorial Guinea": "GQ",
    "Guinea-Bissau": "GW",
    "Ivory Coast": "CI",
    "San Marino": "SM",
    "Sierra Leone": "SL",
    "South Sudan": "SS",
    "Suriname": "SR",
    "Eswatini": "SZ",
    "Myanmar": "MM",
    "Cabo Verde": "CV",
    "Democratic Republic of the Congo": "CD",
    "Republic of the Congo": "CG",
    "Palestine": "PS",
    "Taiwan": "TW",
    "Venezuela": "VE",
    "Vietnam": "VN",
    "Laos": "LA",
    "Moldova": "MD",
    "Russia": "RU",
    "Syria": "SY",
    "Tanzania": "TZ",
    "Brunei": "BN",
    "Bahamas": "BS",
    "Barbados": "BB",
    "Belarus": "BY",
    "Bolivia": "BO",
    "Cambodia": "KH",
    "Dominica": "DM",
    "Grenada": "GD",
    "Jamaica": "JM",
    "Kazakhstan": "KZ",
    "Kyrgyzstan": "KG",
    "Lebanon": "LB",
    "Lesotho": "LS",
    "Liechtenstein": "LI",
    "Luxembourg": "LU",
    "Malawi": "MW",
    "Malta": "MT",
    "Mauritius": "MU",
    "Monaco": "MC",
    "Mongolia": "MN",
    "Montenegro": "ME",
    "Morocco": "MA",
    "Mozambique": "MZ",
    "Namibia": "NA",
    "Nauru": "NR",
    "Nepal": "NP",
    "Nicaragua": "NI",
    "Niger": "NE",
    "Nigeria": "NG",
    "Norway": "NO",
    "Oman": "OM",
    "Pakistan": "PK",
    "Palau": "PW",
    "Panama": "PA",
    "Paraguay": "PY",
    "Peru": "PE",
    "Philippines": "PH",
    "Poland": "PL",
    "Portugal": "PT",
    "Qatar": "QA",
    "Romania": "RO",
    "Rwanda": "RW",
    "Senegal": "SN",
    "Serbia": "RS",
    "Seychelles": "SC",
    "Singapore": "SG",
    "Slovakia": "SK",
    "Slovenia": "SI",
    "Somalia": "SO",
    "Sweden": "SE",
    "Switzerland": "CH",
    "Tajikistan": "TJ",
    "Thailand": "TH",
    "Togo": "TG",
    "Tonga": "TO",
    "Tunisia": "TN",
    "Turkey": "TR",
    "Turkmenistan": "TM",
    "Tuvalu": "TV",
    "Uganda": "UG",
    "Ukraine": "UA",
    "Uruguay": "UY",
    "Uzbekistan": "UZ",
    "Vanuatu": "VU",
    "Zambia": "ZM",
    "Zimbabwe": "ZW",
  };
  let code = specialFlags[countryName];
  if (!code) {
    // Use first two letters of country name, fallback
    code = countryName
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }
  // Convert country code to regional indicator symbols
  return code.replace(/./g, (c) =>
    String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0))
  );
}

// Country list and codes (ISO 3166 country names and dial codes)
const countries = [
  { name: "Afghanistan", code: "+93" }, { name: "Albania", code: "+355" }, { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" }, { name: "Angola", code: "+244" }, { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" }, { name: "Australia", code: "+61" }, { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" }, { name: "Bahamas", code: "+1-242" }, { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" }, { name: "Barbados", code: "+1-246" }, { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" }, { name: "Belize", code: "+501" }, { name: "Benin", code: "+229" },
  { name: "Bhutan", code: "+975" }, { name: "Bolivia", code: "+591" }, { name: "Bosnia and Herzegovina", code: "+387" },
  { name: "Botswana", code: "+267" }, { name: "Brazil", code: "+55" }, { name: "Brunei", code: "+673" },
  { name: "Bulgaria", code: "+359" }, { name: "Burkina Faso", code: "+226" }, { name: "Burundi", code: "+257" },
  { name: "Cabo Verde", code: "+238" }, { name: "Cambodia", code: "+855" }, { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" }, { name: "Central African Republic", code: "+236" }, { name: "Chad", code: "+235" },
  { name: "Chile", code: "+56" }, { name: "China", code: "+86" }, { name: "Colombia", code: "+57" },
  { name: "Comoros", code: "+269" }, { name: "Congo", code: "+242" }, { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" }, { name: "Cuba", code: "+53" }, { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" }, { name: "Denmark", code: "+45" }, { name: "Djibouti", code: "+253" },
  { name: "Dominica", code: "+1-767" }, { name: "Dominican Republic", code: "+1-809" }, { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" }, { name: "El Salvador", code: "+503" }, { name: "Equatorial Guinea", code: "+240" },
  { name: "Eritrea", code: "+291" }, { name: "Estonia", code: "+372" }, { name: "Eswatini", code: "+268" },
  { name: "Ethiopia", code: "+251" }, { name: "Fiji", code: "+679" }, { name: "Finland", code: "+358" },
  { name: "France", code: "+33" }, { name: "Gabon", code: "+241" }, { name: "Gambia", code: "+220" },
  { name: "Georgia", code: "+995" }, { name: "Germany", code: "+49" }, { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" }, { name: "Grenada", code: "+1-473" }, { name: "Guatemala", code: "+502" },
  { name: "Guinea", code: "+224" }, { name: "Guinea-Bissau", code: "+245" }, { name: "Guyana", code: "+592" },
  { name: "Haiti", code: "+509" }, { name: "Honduras", code: "+504" }, { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" }, { name: "India", code: "+91" }, { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" }, { name: "Iraq", code: "+964" }, { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" }, { name: "Italy", code: "+39" }, { name: "Jamaica", code: "+1-876" },
  { name: "Japan", code: "+81" }, { name: "Jordan", code: "+962" }, { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" }, { name: "Kiribati", code: "+686" }, { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" }, { name: "Laos", code: "+856" }, { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" }, { name: "Lesotho", code: "+266" }, { name: "Liberia", code: "+231" },
  { name: "Libya", code: "+218" }, { name: "Liechtenstein", code: "+423" }, { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" }, { name: "Madagascar", code: "+261" }, { name: "Malawi", code: "+265" },
  { name: "Malaysia", code: "+60" }, { name: "Maldives", code: "+960" }, { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" }, { name: "Marshall Islands", code: "+692" }, { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" }, { name: "Mexico", code: "+52" }, { name: "Micronesia", code: "+691" },
  { name: "Moldova", code: "+373" }, { name: "Monaco", code: "+377" }, { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" }, { name: "Morocco", code: "+212" }, { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" }, { name: "Namibia", code: "+264" }, { name: "Nauru", code: "+674" },
  { name: "Nepal", code: "+977" }, { name: "Netherlands", code: "+31" }, { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" }, { name: "Niger", code: "+227" }, { name: "Nigeria", code: "+234" },
  { name: "North Korea", code: "+850" }, { name: "North Macedonia", code: "+389" }, { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" }, { name: "Pakistan", code: "+92" }, { name: "Palau", code: "+680" },
  { name: "Palestine", code: "+970" }, { name: "Panama", code: "+507" }, { name: "Papua New Guinea", code: "+675" },
  { name: "Paraguay", code: "+595" }, { name: "Peru", code: "+51" }, { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" }, { name: "Portugal", code: "+351" }, { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" }, { name: "Russia", code: "+7" }, { name: "Rwanda", code: "+250" },
  { name: "Saint Kitts and Nevis", code: "+1-869" }, { name: "Saint Lucia", code: "+1-758" }, { name: "Saint Vincent and the Grenadines", code: "+1-784" },
  { name: "Samoa", code: "+685" }, { name: "San Marino", code: "+378" }, { name: "Sao Tome and Principe", code: "+239" },
  { name: "Saudi Arabia", code: "+966" }, { name: "Senegal", code: "+221" }, { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" }, { name: "Sierra Leone", code: "+232" }, { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" }, { name: "Slovenia", code: "+386" }, { name: "Solomon Islands", code: "+677" },
  { name: "Somalia", code: "+252" }, { name: "South Africa", code: "+27" }, { name: "South Korea", code: "+82" },
  { name: "South Sudan", code: "+211" }, { name: "Spain", code: "+34" }, { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" }, { name: "Suriname", code: "+597" }, { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" }, { name: "Syria", code: "+963" }, { name: "Taiwan", code: "+886" },
  { name: "Tajikistan", code: "+992" }, { name: "Tanzania", code: "+255" }, { name: "Thailand", code: "+66" },
  { name: "Timor-Leste", code: "+670" }, { name: "Togo", code: "+228" }, { name: "Tonga", code: "+676" },
  { name: "Trinidad and Tobago", code: "+1-868" }, { name: "Tunisia", code: "+216" }, { name: "Turkey", code: "+90" },
  { name: "Turkmenistan", code: "+993" }, { name: "Tuvalu", code: "+688" }, { name: "Uganda", code: "+256" },
  { name: "Ukraine", code: "+380" }, { name: "United Arab Emirates", code: "+971" }, { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" }, { name: "Uruguay", code: "+598" }, { name: "Uzbekistan", code: "+998" },
  { name: "Vanuatu", code: "+678" }, { name: "Vatican City", code: "+39" }, { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" }, { name: "Yemen", code: "+967" }, { name: "Zambia", code: "+260" },
  { name: "Zimbabwe", code: "+263" }
];

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessEmail: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
    hearAbout: "",
    terms: false,
    privacy: false,
  });

  const [countrySearch, setCountrySearch] = useState("");
  const [termsVisible, setTermsVisible] = useState(false);
  const [privacyVisible, setPrivacyVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  // Water animation refs and state
  const waterRef = useRef(null);

  // Animate "beach water" background with GSAP
  useEffect(() => {
    if (!waterRef.current) return;
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(waterRef.current, {
      "--wave1": "60% 65%",
      "--wave2": "40% 45%",
      "--cloud-x": "60%",
      "--cloud-y": "45%",
      duration: 6,
      ease: "sine.inOut",
    })
      .to(waterRef.current, {
        "--wave1": "55% 55%",
        "--wave2": "45% 55%",
        "--cloud-x": "40%",
        "--cloud-y": "55%",
        duration: 6,
        ease: "sine.inOut",
      })
      .to(waterRef.current, {
        "--wave1": "60% 65%",
        "--wave2": "40% 45%",
        "--cloud-x": "50%",
        "--cloud-y": "50%",
        duration: 6,
        ease: "sine.inOut",
      });
    return () => tl.kill();
  }, []);

  // Mouse move effect for water flow (optional, can be removed for pure auto-move)
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    if (waterRef.current) {
      gsap.to(waterRef.current, {
        "--cloud-x": `${x * 100}%`,
        "--cloud-y": `${y * 100}%`,
        duration: 1.2,
        ease: "power2.out",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Get country code from selected country
  const getCountryCode = (countryName) => {
    const found = countries.find((c) => c.name === countryName);
    return found ? found.code : "";
  };

  // Filtered countries for search
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Validation for enabling the button
  const isFormValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.businessName.trim() &&
    form.businessEmail.trim() &&
    form.country &&
    form.phone.trim() &&
    form.password &&
    form.confirmPassword &&
    form.password === form.confirmPassword &&
    form.hearAbout.trim() &&
    form.terms &&
    form.privacy;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    // Submit logic here
    console.log(form);
  };

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
      {/* Desktop: Animated Cloud/Water Background */}
      <div
        className="hidden md:flex flex-col justify-end items-center w-1/2 fixed left-0 top-0 bottom-0 h-full z-10 overflow-hidden"
        style={{ position: "fixed" }}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          ref={waterRef}
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
        {/* Logo and Text at the bottom */}
        <div className="relative z-10 w-full flex flex-col items-center justify-end pb-10 h-full">
          <img src="/logo.gif" alt="Logo" className="w-28 mb-2 rounded-2xl" />
          <h2 className="text-2xl font-bold text-[#0A4747] mb-1 text-center drop-shadow-lg">
            Welcome to Gryndle
          </h2>
          <p className="text-base text-[#0A4747] text-center max-w-md drop-shadow-lg">
            The next-generation fintech platform for seamless business payments, compliance, and growth across Africa and beyond.
          </p>
        </div>
      </div>
      {/* Right: Signup Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:ml-[50vw] md:pl-0 relative z-10">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl px-4 py-8 md:px-10 md:py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A4747] mb-6 text-center">
            Create your account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First and Last Name */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full relative">
                <label className="block text-[#0A4747] mb-1">First Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                    placeholder="First name"
                    autoComplete="given-name"
                  />
                </div>
              </div>
              <div className="w-full relative">
                <label className="block text-[#0A4747] mb-1">Last Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                    placeholder="Last name"
                    autoComplete="family-name"
                  />
                </div>
              </div>
            </div>
            {/* Business Name */}
            <div className="relative">
              <label className="block text-[#0A4747] mb-1">Business Name</label>
              <div className="relative">
                <MdBusiness className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type="text"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Business name"
                  autoComplete="organization"
                />
              </div>
            </div>
            {/* Business Email */}
            <div className="relative">
              <label className="block text-[#0A4747] mb-1">Business Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type="email"
                  name="businessEmail"
                  value={form.businessEmail}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Business email"
                  autoComplete="email"
                />
              </div>
            </div>
            {/* Country with Search */}
            <div className="relative">
              <label className="block text-[#0A4747] mb-1">Country of Business Registration</label>
              <div className="relative">
                <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type="text"
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  placeholder="Search country"
                  className="w-full p-3 pl-10 pr-10 rounded-t border border-gray-300 focus:outline-none"
                />
                <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                className="w-full p-3 pl-10 rounded-b border border-t-0 border-gray-300 focus:outline-none bg-white"
                size={1}
              >
                <option value="">Select country</option>
                {filteredCountries.map((country) => (
                  <option value={country.name} key={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Phone */}
            <div className="relative">
              <label className="block text-[#0A4747] mb-1">Phone Number</label>
              <div className="flex">
                <span className="flex items-center px-3 rounded-l border border-gray-300 bg-gray-100 text-gray-700 min-w-[70px]">
                  <span className="mr-2 text-xl">
                    {form.country ? getFlagEmoji(form.country) : "🏳️"}
                  </span>
                  {getCountryCode(form.country) || "+___"}
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-r border-t border-b border-r border-gray-300 focus:outline-none"
                  placeholder="Phone number"
                  autoComplete="tel"
                />
              </div>
            </div>
            {/* Password */}
            <div className="relative">
              <label className="block text-[#0A4747] mb-1">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 pr-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Password"
                  autoComplete="new-password"
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
            </div>
            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-[#0A4747] mb-1">Confirm Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 pr-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-[#14B8A6]"
                  onClick={() => setShowConfirm((v) => !v)}
                  tabIndex={0}
                  role="button"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              {form.password && form.confirmPassword && form.password !== form.confirmPassword && (
                <span className="text-red-500 text-xs">Passwords do not match</span>
              )}
            </div>
            {/* How did you hear about us */}
            <div className="relative">
              <label className="block text-[#0A4747] mb-1">How did you hear about us?</label>
              <div className="relative">
                <FaRegQuestionCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type="text"
                  name="hearAbout"
                  value={form.hearAbout}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="e.g. Google, LinkedIn, Friend"
                />
              </div>
            </div>
            {/* Terms and Privacy */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center text-sm text-[#0A4747]">
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  className="mr-2 accent-[#14B8A6]"
                  required
                />
                I agree to Gryndle's{" "}
                <span
                  className="text-[#14B8A6] underline ml-1 cursor-pointer"
                  onClick={() => setTermsVisible(true)}
                >
                  Terms and Conditions
                </span>
              </label>
              <label className="flex items-center text-sm text-[#0A4747]">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={form.privacy}
                  onChange={handleChange}
                  className="mr-2 accent-[#14B8A6]"
                  required
                />
                I agree to Gryndle's{" "}
                <span
                  className="text-[#14B8A6] underline ml-1 cursor-pointer"
                  onClick={() => setPrivacyVisible(true)}
                >
                  Privacy Policy
                </span>
              </label>
            </div>
            {/* Signup Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-3xl bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white font-semibold text-lg transition-all duration-300 ${
                isFormValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Sign Up
            </button>
            {/* Already have account */}
            <div className="text-center mt-2 text-[#0A4747] text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-[#14B8A6] underline font-semibold">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* Ant Design Modals for Terms and Privacy */}
      <Modal
        title="Terms and Conditions"
        open={termsVisible}
        onCancel={() => setTermsVisible(false)}
        footer={null}
        width={600}
      >
        <div style={{ maxHeight: 350, overflowY: "auto" }}>
          <h3>Welcome to Gryndle!</h3>
          <p>
            By using our platform, you agree to comply with all applicable laws and regulations. You must provide accurate information and keep your account secure. Unauthorized use or access is prohibited. Gryndle reserves the right to update these terms at any time. Please review regularly.
          </p>
          <ul>
            <li>Use the platform responsibly and legally.</li>
            <li>Do not share your password with others.</li>
            <li>Respect the privacy and rights of other users.</li>
            <li>Violations may result in account suspension or termination.</li>
          </ul>
        </div>
      </Modal>
      <Modal
        title="Privacy Policy"
        open={privacyVisible}
        onCancel={() => setPrivacyVisible(false)}
        footer={null}
        width={600}
      >
        <div style={{ maxHeight: 350, overflowY: "auto" }}>
          <h3>Your Privacy Matters</h3>
          <p>
            Gryndle is committed to protecting your personal information. We collect only what is necessary to provide our services and never sell your data to third parties. Your information is stored securely and used in accordance with our privacy practices.
          </p>
          <ul>
            <li>We collect data to improve your experience.</li>
            <li>Your data is never sold or shared without consent.</li>
            <li>You can request deletion of your data at any time.</li>
            <li>Contact us for any privacy-related questions.</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;