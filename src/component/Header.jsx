import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdCallMade } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { BsCartDash, BsGraphUpArrow } from "react-icons/bs";
import { TbFaceId, TbLayoutDashboard } from "react-icons/tb";
import { TfiWallet } from "react-icons/tfi";
import { useNavigate, useLocation } from "react-router-dom";
import { Drawer, Button } from "antd";
import { AiOutlineAlignRight } from "react-icons/ai";

const menuItems = [
  { label: "Solution", path: "/solution" },
  { label: "Product" },
  { label: "Platform", path: "/platform" },
  { label: "About Us", path: "/aboutus" },
  { label: "Resources", path: "/resources" },
  { label: "FAQs", path: "/faqs" },
];

// Desktop dropdown (row)
const productDropdown = (
  <div className="hidden md:flex flex-wrap gap-4 p-4">
    <div className="w-[45%] p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <MdPayment size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Multi-Rail Payments</h2>
        <p className="text-[#64748B] text-sm">
          Process payments across multiple channels, networks and methods from a single API.
        </p>
      </div>
    </div>
    <div className="w-[45%] p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <BsCartDash size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Retail Management</h2>
        <p className="text-[#64748B] text-sm">
          Manage payment and merchants with a flexible, omni-channel platform.
        </p>
      </div>
    </div>
    <div className="w-[45%] p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <TbFaceId size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Fraud Prevention</h2>
        <p className="text-[#64748B] text-sm">
          Protect your transactions with intelligent detection, flexible rules and 24/7 support.
        </p>
      </div>
    </div>
    <div className="w-[45%] p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <TbLayoutDashboard size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Dashboard</h2>
        <p className="text-[#64748B] text-sm">
          Manage, monitor and optimize your payments in real time from a single place.
        </p>
      </div>
    </div>
    <div className="w-[45%] p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <TfiWallet size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Operation and Reconciliations</h2>
        <p className="text-[#64748B] text-sm">
          Enables fast, secure and transparent cashouts with automated reconciliation.
        </p>
      </div>
    </div>
    <div className="w-[45%] p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <BsGraphUpArrow size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Reporting & Data</h2>
        <p className="text-[#64748B] text-sm">
          Access real-time data to optimize payments, decisions and strategies.
        </p>
      </div>
    </div>
  </div>
);

// Mobile dropdown (column)
const productDropdownMobile = (
  <div className="flex flex-col gap-4 p-2">
    <div className="p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <MdPayment size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Multi-Rail Payments</h2>
        <p className="text-[#64748B] text-sm">
          Process payments across multiple channels, networks and methods from a single API.
        </p>
      </div>
    </div>
    <div className="p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <BsCartDash size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Retail Management</h2>
        <p className="text-[#64748B] text-sm">
          Manage payment and merchants with a flexible, omni-channel platform.
        </p>
      </div>
    </div>
    <div className="p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <TbFaceId size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Fraud Prevention</h2>
        <p className="text-[#64748B] text-sm">
          Protect your transactions with intelligent detection, flexible rules and 24/7 support.
        </p>
      </div>
    </div>
    <div className="p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <TbLayoutDashboard size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Dashboard</h2>
        <p className="text-[#64748B] text-sm">
          Manage, monitor and optimize your payments in real time from a single place.
        </p>
      </div>
    </div>
    <div className="p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <TfiWallet size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Operation and Reconciliations</h2>
        <p className="text-[#64748B] text-sm">
          Enables fast, secure and transparent cashouts with automated reconciliation.
        </p>
      </div>
    </div>
    <div className="p-4 bg-[#F5F7FA] rounded-xl mb-2 flex items-start gap-4 hover:bg-[#14B8A6]/20 transition">
      <span className="bg-[#14B8A6]/20 rounded-xl p-2 flex items-center justify-center">
        <BsGraphUpArrow size={32} color="#0A4747" />
      </span>
      <div>
        <h2 className="text-[#0A4747] font-bold mb-1">Reporting & Data</h2>
        <p className="text-[#64748B] text-sm">
          Access real-time data to optimize payments, decisions and strategies.
        </p>
      </div>
    </div>
  </div>
);

const Header = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Memoize getActiveLabel for useEffect dependency
  const getActiveLabel = React.useCallback(() => {
    const found = menuItems.find(
      (item) => item.path && location.pathname.startsWith(item.path)
    );
    return found ? found.label : "";
  }, [location.pathname]);

  const [active, setActive] = useState(getActiveLabel());

  useEffect(() => {
    setActive(getActiveLabel());
  }, [getActiveLabel]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 transition-shadow duration-300">
      <div
        className="h-[15vh] w-full flex justify-center items-center"
        style={{
          background:
            "linear-gradient(135deg, #0A4747 0%, #14B8A6 60%, #F59E42 100%)",
        }}
      >
        <div className="h-[60%] w-[95%] bg-white rounded-[40px] flex justify-between items-center shadow-2xl px-4">
          {/* Logo */}
          <div
            className="w-[200px] h-[50px] flex flex-row justify-center items-center gap-2"
            onClick={() => {
              setActive("");
              nav("/");
            }}
          >
            <img
              src="/logo.gif"
              alt=""
              className="w-[70px] h-full rounded-[25px]"
            />
            <span
              className="text-[25px] font-bold cursor-pointer text-[#0A4747]"
              onClick={() => {
                setActive("");
                nav("/");
              }}
            >
              Gryndle
            </span>
          </div>
          {/* Burger Icon for mobile */}
          <div className="block md:hidden">
            <Button
              type="text"
              icon={<AiOutlineAlignRight size={32} />}
              onClick={() => setDrawerVisible(true)}
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex w-[80%] h-[100%] flex-row justify-center items-center">
            <div className="w-[60%] h-[100%] bg-white flex flex-row justify-center items-center">
              <ul className="flex flex-row justify-center items-center gap-7">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className={`relative cursor-pointer flex flex-row items-center justify-center font-semibold transition-all duration-300 text-[15px] ${
                      active === item.label
                        ? "text-[#0A4747]"
                        : "text-[#64748B]"
                    } hover:text-[#14B8A6]`}
                    onClick={() => {
                      if (item.label === "Product") {
                        setOpen((prev) => !prev);
                        setActive(item.label);
                      } else {
                        setActive(item.label);
                        if (item.path) nav(item.path);
                        setOpen(false);
                      }
                    }}
                    ref={item.label === "Product" ? dropdownRef : null}
                  >
                    {item.label}
                    {item.label === "Product" && (
                      <>
                        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        <span
                          className={`absolute left-0 -bottom-1 h-[3px] rounded-full`}
                          style={{
                            background: "#F59E42",
                            width: active === item.label ? "100%" : 0,
                            opacity: active === item.label ? 1 : 0,
                            transition: "all 0.3s",
                          }}
                        />
                        {open && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="h-[50vh] w-[750px] absolute top-[40px] border-[7px] border-[#14B8A6] left-0 mt-2 bg-white shadow-2xl rounded-3xl p-2 z-10 flex flex-col overflow-y-auto"
                          >
                            {productDropdown}
                          </div>
                        )}
                      </>
                    )}
                    {item.label !== "Product" && (
                      <span
                        className={`absolute left-0 -bottom-1 h-[3px] rounded-full`}
                        style={{
                          background: "#F59E42",
                          width: active === item.label ? "100%" : 0,
                          opacity: active === item.label ? 1 : 0,
                          transition: "all 0.3s",
                        }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[35%]  h-[100%] flex justify-end items-center">
              <ul className="flex flex-row justify-center items-center gap-7">
                <li
                  className="cursor-pointer hover:text-[#14B8A6] text-[#0A4747] font-semibold"
                  onClick={() => nav("/login")}
                >
                  Login
                </li>
                <button
                  className="h-[50px] w-[150px] flex flex-row justify-around px-2.5 items-center animate-pulse animate-2xl rounded-3xl cursor-pointer font-semibold transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #0A4747 0%, #14B8A6 100%)",
                    color: "#fff",
                  }}
                  onClick={() => nav("/contact")}
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
                >
                  Contact Us
                  <span
                    className="h-[30px] w-[30px] flex justify-center items-center rounded-4xl ml-2"
                    style={{ background: "#F59E42" }}
                  >
                    <MdCallMade className="text-[#0A4747]" />
                  </span>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Drawer */}
      <Drawer
        title={null}
        placement="right"
        onClose={() => {
          setDrawerVisible(false);
          setMobileProductOpen(false);
        }}
        open={drawerVisible}
        width={340}
        bodyStyle={{ padding: 0, background: "#fff" }}
        className="md:hidden"
      >
        <div className="flex flex-col h-full">
          <ul className="flex flex-col gap-6 mt-10 px-6">
            {menuItems.map((item) =>
              item.label === "Product" ? (
                <li
                  key={item.label}
                  className={`cursor-pointer font-semibold text-[15px] flex flex-row items-center justify-between py-2 ${
                    active === item.label ? "text-[#0A4747]" : "text-[#64748B]"
                  } hover:text-[#14B8A6]`}
                  onClick={() => {
                    setActive(item.label);
                    setMobileProductOpen((prev) => !prev);
                  }}
                >
                  <span className="flex items-center">
                    {item.label}
                    {mobileProductOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </li>
              ) : (
                <li
                  key={item.label}
                  className={`cursor-pointer font-semibold text-[15px] ${
                    active === item.label ? "text-[#0A4747]" : "text-[#64748B]"
                  } hover:text-[#14B8A6] py-2`}
                  onClick={() => {
                    setActive(item.label);
                    setDrawerVisible(false);
                    if (item.path) nav(item.path);
                  }}
                >
                  {item.label}
                </li>
              )
            )}
          </ul>
          {/* Mobile Product Dropdown */}
          {mobileProductOpen && (
            <div className="px-2 py-2">{productDropdownMobile}</div>
          )}
          <div className="flex flex-col gap-4 mt-10 px-6">
            <button
              className="w-full py-3 rounded-3xl bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white font-semibold text-lg transition-all duration-300"
              onClick={() => {
                setDrawerVisible(false);
                nav("/login");
              }}
            >
              Login
            </button>
            <button
              className="w-full py-3 rounded-3xl bg-[#F59E42] text-[#0A4747] font-semibold text-lg transition-all duration-300"
              onClick={() => {
                setDrawerVisible(false);
                nav("/contact");
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
