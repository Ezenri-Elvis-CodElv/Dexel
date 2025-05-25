import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white px-6 md:px-20 py-12"
      style={{
        background: "linear-gradient(135deg, #0A4747 0%, #14B8A6 60%, #F59E42 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Logo Section */}
      <div className="mb-10 flex items-center">
        <img
          src="/logo.gif"
          alt="Your Logo"
          className="h-16 w-auto mr-4"
          style={{ background: "#fff", borderRadius: "12px", padding: "4px" }}
        />
        <span className="text-2xl font-bold cursor-pointer">Gryndle</span>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-white/30 pb-10">
        <div>
          <h4 className="font-semibold mb-4 cursor-pointer">Product</h4>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Multi-Rail Payments</li>
            <li className="cursor-pointer">Dashboard</li>
            <li className="cursor-pointer">Retail Management</li>
            <li className="cursor-pointer">Operations and Reconciliations</li>
            <li className="cursor-pointer">Fraud Prevention</li>
            <li className="cursor-pointer">Reporting & Data</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 cursor-pointer">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Acquiring Banks and Fintechs</li>
            <li className="cursor-pointer">Payment Gateways</li>
            <li className="cursor-pointer">Payment Aggregators</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 cursor-pointer">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Benefits</li>
            <li className="cursor-pointer">Scalable Cloud Infrastructure</li>
            <li className="cursor-pointer">Advanced Cybersecurity Protection</li>
            <li className="cursor-pointer">Seamless Integration</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 cursor-pointer">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Documentation, API and Guides</li>
            <li className="cursor-pointer">Trust Center</li>
            <li className="cursor-pointer">Status Page</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 cursor-pointer">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Our Team</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 cursor-pointer">Follow us at</h4>
          <div className="flex space-x-4">
            <a href="#" className="cursor-pointer">
              <i
                className="fab fa-linkedin text-xl rotate-360"
                style={{ transition: "color 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#0077b5")}
                onMouseOut={e => (e.currentTarget.style.color = "")}
              ></i>
            </a>
            <a href="#" className="cursor-pointer">
              <i
                className="fab fa-instagram text-xl rotate-360"
                style={{ transition: "color 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#E4405F")}
                onMouseOut={e => (e.currentTarget.style.color = "")}
              ></i>
            </a>
            <a href="#" className="cursor-pointer">
              <i
                className="fab fa-twitter text-xl rotate-360"
                style={{ transition: "color 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#000000")}
                onMouseOut={e => (e.currentTarget.style.color = "")}
              ></i>
            </a>
            <a href="#" className="cursor-pointer">
              <i
                className="fab fa-facebook text-xl rotate-360"
                style={{ transition: "color 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#1877F3")}
                onMouseOut={e => (e.currentTarget.style.color = "")}
              ></i>
            </a>
            <a href="#" className="cursor-pointer">
              <i
                className="fab fa-tiktok text-xl rotate-360"
                style={{ transition: "color 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#010101")}
                onMouseOut={e => (e.currentTarget.style.color = "")}
              ></i>
            </a>
            <a
              href="https://wa.me/2349075095985"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <i
                className="fab fa-whatsapp text-xl rotate-360"
                style={{ transition: "color 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#25D366")}
                onMouseOut={e => (e.currentTarget.style.color = "")}
              ></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 space-y-6 text-sm">
        <form className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <label htmlFor="email" className="text-base font-semibold cursor-pointer">
            Subscribe to our newsletter
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className="px-4 py-2 rounded-md text-black border-2 border-[#F59E42] w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-[#F59E42] hover:bg-[#e68a1f] text-[#0A4747] px-4 py-2 rounded-md font-semibold cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        <div className="border-t border-white/30 pt-6">
          <p className="cursor-pointer">&copy;  2025 Gryndle. All rights reserved.</p>
          <p className="cursor-pointer">
            Gryndle Technology Holding Ltd., 180 Freedom Way, Lekki Phase 1.
          </p>
          <p className="cursor-pointer">Registered in GRYNDLE LTD. 2025</p>
        </div>

        <div className="flex space-x-4">
          <img
            src="/global.svg"
            alt="Colombia Fintech"
            className="h-6 cursor-pointer"
          />
          <img src="/Kora.svg" alt="kora" className="h-6 cursor-pointer" />
          <img src="/pci.svg" alt="PCI DSS" className="h-6 cursor-pointer" />
          <img src="/pci2.svg" alt="ISO 27001" className="h-6 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
