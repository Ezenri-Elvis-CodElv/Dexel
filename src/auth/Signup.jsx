import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaGlobe, FaLock, FaRegQuestionCircle } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

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
    <div className="w-full min-h-screen flex flex-col md:flex-row items-stretch bg-[#f7fafc]">
      {/* Left: Logo and Description (fixed, non-scrollable) */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 fixed left-0 top-0 bottom-0 h-full z-10 overflow-hidden bg-[#0A4747]">
        {/* Background lines (SVG grid, matches landing page style) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.15 }}>
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
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Welcome to Gryndle</h2>
          <p className="text-lg text-[#F5F7FA] text-center max-w-md">
            The next-generation fintech platform for seamless business payments, compliance, and growth across Africa and beyond.
          </p>
        </div>
      </div>
      {/* Right: Signup Form (scrollable, 50% width) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:ml-[50vw] md:pl-0">
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
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Password"
                  autoComplete="new-password"
                />
              </div>
            </div>
            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-[#0A4747] mb-1">Confirm Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14B8A6]" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded border border-gray-300 focus:outline-none"
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
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
                <a href="#" className="text-[#14B8A6] underline ml-1">
                  Terms and Conditions
                </a>
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
                <a href="#" className="text-[#14B8A6] underline ml-1">
                  Privacy Policy
                </a>
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
    </div>
  );
};

export default Signup;