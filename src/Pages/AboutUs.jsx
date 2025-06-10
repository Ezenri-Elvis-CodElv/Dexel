import React, { useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion"; // removed useAnimation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHandshake, FaLightbulb, FaUsers, FaGlobe, FaShieldAlt, FaRocket } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const coreValues = [
	{
		icon: <FaHandshake className="text-4xl text-[#14B8A6]" />,
		title: "Integrity",
		desc: "We uphold the highest standards of integrity in all our actions and decisions.",
	},
	{
		icon: <FaLightbulb className="text-4xl text-[#F59E42]" />,
		title: "Innovation",
		desc: "We foster creativity and embrace new ideas to drive progress and deliver value.",
	},
	{
		icon: <FaUsers className="text-4xl text-[#0A4747]" />,
		title: "Collaboration",
		desc: "We believe in the power of teamwork and open communication to achieve shared goals.",
	},
	{
		icon: <FaGlobe className="text-4xl text-[#14B8A6]" />,
		title: "Diversity",
		desc: "We celebrate diversity and create an inclusive environment for all.",
	},
	{
		icon: <FaShieldAlt className="text-4xl text-[#F59E42]" />,
		title: "Trust",
		desc: "We build trust through transparency, reliability, and accountability.",
	},
	{
		icon: <FaRocket className="text-4xl text-[#0A4747]" />,
		title: "Excellence",
		desc: "We strive for excellence in everything we do, exceeding expectations.",
	},
];

const AboutUs = () => {
	const missionRef = useRef(null);
	const visionRef = useRef(null);
	const valuesRef = useRef(null);

	useEffect(() => {
		// GSAP Animations for sections
		gsap.fromTo(
			missionRef.current,
			{ y: 80, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: missionRef.current,
					start: "top 80%",
				},
			}
		);
		gsap.fromTo(
			visionRef.current,
			{ x: -100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: visionRef.current,
					start: "top 80%",
				},
			}
		);
		gsap.fromTo(
			valuesRef.current,
			{ y: 100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: valuesRef.current,
					start: "top 80%",
				},
			}
		);
	}, []);

	// Framer Motion variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 60 },
		visible: (i = 1) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.15,
				duration: 0.7,
				type: "spring",
				stiffness: 60,
			},
		}),
	};

	const fadeInLeft = {
		hidden: { opacity: 0, x: -60 },
		visible: (i = 1) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.15,
				duration: 0.7,
				type: "spring",
				stiffness: 60,
			},
		}),
	};

	const fadeInRight = {
		hidden: { opacity: 0, x: 60 },
		visible: (i = 1) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.15,
				duration: 0.7,
				type: "spring",
				stiffness: 60,
			},
		}),
	};

	return (
		<div
			className="min-h-screen w-full bg-gradient-to-br from-[#0A4747] via-[#14B8A6] to-[#F59E42] relative overflow-x-hidden"
			style={{ fontFamily: "Inter, sans-serif" }}
		>
			{/* Hero Section */}
			<section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4">
				<Motion.h1
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, type: "spring" }}
					className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg text-center mb-6"
				>
					About <span className="text-[#F59E42]">Gryndle</span>
				</Motion.h1>
				<Motion.p
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 1.1 }}
					className="text-lg md:text-2xl text-white/90 max-w-3xl text-center mb-10"
				>
					Empowering businesses with secure, scalable, and innovative payment
					solutions for a borderless world.
				</Motion.p>
				{/* Placeholder for company images */}
				<Motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5, duration: 1.2 }}
					className="flex flex-wrap gap-6 justify-center items-center"
				>
					{/* Add your company images here */}
					<div className="w-40 h-40 bg-white/20 rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
						<span className="text-[#14B8A6] font-bold text-xl"><img src="/IMG_9557.jpeg" alt="" /></span>
					</div>
					<div className="w-40 h-40 bg-white/20 rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
						<span className="text-[#F59E42] font-bold text-xl"><img src="" alt="" className="w-full h-full object-contain rounded-2xl"/></span>
					</div>
				</Motion.div>
				{/* Animated gradient line */}
				<Motion.div
					initial={{ width: 0 }}
					animate={{ width: "80%" }}
					transition={{ delay: 0.7, duration: 1.2 }}
					className="h-1 bg-gradient-to-r from-[#14B8A6] via-[#F59E42] to-[#0A4747] rounded-full mt-10 mx-auto"
				/>
			</section>

			{/* Mission Section */}
			<section
				ref={missionRef}
				className="relative py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-10"
			>
				<Motion.div
					className="flex-1"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInLeft}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-[#14B8A6] mb-4">
						Our Mission
					</h2>
					<p className="text-lg md:text-xl text-white/90 mb-6">
						To revolutionize the payment landscape by providing secure, seamless,
						and scalable solutions that empower businesses and individuals to thrive
						in a digital-first world.
					</p>
					<Motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						viewport={{ once: true }}
						className="w-24 h-2 bg-gradient-to-r from-[#F59E42] to-[#14B8A6] rounded-full mb-2"
					/>
				</Motion.div>
				<Motion.div
					className="flex-1 flex items-center justify-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInRight}
				>
					{/* Placeholder for mission image */}
					<div className="w-64 h-64 bg-white/20 rounded-3xl shadow-xl flex items-center justify-center animate-pulse">
						<span className="text-[#0A4747] font-bold text-lg"><img src="/mission2." alt="" className="w-full h-full object-contain rounded-3xl"/></span>
					</div>
				</Motion.div>
			</section>

			{/* Vision Section */}
			<section
				ref={visionRef}
				className="relative py-16 px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-10"
			>
				<Motion.div
					className="flex-1 flex items-center justify-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInLeft}
				>
					{/* Placeholder for vision image */}
					<div className="w-64 h-64 bg-white/20 rounded-3xl shadow-xl flex items-center justify-center animate-pulse">
						<span className="text-[#F59E42] font-bold text-lg">Vision Image</span>
					</div>
				</Motion.div>
				<Motion.div
					className="flex-1"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeInRight}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-[#F59E42] mb-4">
						Our Vision
					</h2>
					<p className="text-lg md:text-xl text-white/90 mb-6">
						To be the global leader in digital payments, enabling frictionless
						commerce and financial inclusion for everyone, everywhere.
					</p>
					<Motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						viewport={{ once: true }}
						className="w-24 h-2 bg-gradient-to-r from-[#14B8A6] to-[#F59E42] rounded-full mb-2"
					/>
				</Motion.div>
			</section>

			{/* Core Values Section */}
			<section
				ref={valuesRef}
				className="relative py-20 px-4 flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg"
			>
				<Motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold text-[#0A4747] mb-10 text-center"
				>
					Our Core Values
				</Motion.h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
					<AnimatePresence>
						{coreValues.map((value, idx) => (
							<Motion.div
								key={value.title}
								className="bg-white/80 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center border border-[#14B8A6]/10 hover:scale-105 hover:shadow-2xl transition-all duration-500"
								variants={fadeInUp}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								custom={idx}
								transition={{
									delay: idx * 0.1,
									duration: 0.7,
									type: "spring",
								}}
								exit={{ opacity: 0, y: 60 }}
							>
								<div className="mb-4">{value.icon}</div>
								<h3 className="text-xl font-bold text-[#0A4747] mb-2 text-center">
									{value.title}
								</h3>
								<p className="text-[#0A4747]/80 text-base text-center">
									{value.desc}
								</p>
							</Motion.div>
						))}
					</AnimatePresence>
				</div>
				{/* Animated underline */}
				<Motion.div
					initial={{ width: 0 }}
					whileInView={{ width: "60%" }}
					transition={{ delay: 0.3, duration: 1.2 }}
					viewport={{ once: true }}
					className="h-1 bg-gradient-to-r from-[#F59E42] via-[#14B8A6] to-[#0A4747] rounded-full mt-12 mx-auto"
				/>
			</section>

			{/* Call to Action Section */}
			<section className="relative py-20 px-4 flex flex-col items-center justify-center">
				<Motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.1, type: "spring" }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-[#14B8A6] via-[#F59E42] to-[#0A4747] rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center max-w-3xl w-full"
				>
					<h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
						Join us on our journey to shape the future of payments.
					</h2>
					<p className="text-white/90 text-lg mb-8 text-center">
						Discover how Gryndle can help your business grow and thrive in a
						digital world.
					</p>
					<Motion.button
						whileHover={{
							scale: 1.07,
							boxShadow: "0 4px 24px #14B8A633",
						}}
						whileTap={{ scale: 0.97 }}
						className="h-[50px] w-[180px] text-[16px] flex flex-row justify-center items-center rounded-3xl cursor-pointer font-semibold transition-all duration-300 bg-white text-[#0A4747] shadow-lg"
						style={{
							background:
								"linear-gradient(90deg, #0A4747 0%, #14B8A6 100%)",
							color: "#fff",
						}}
						onClick={() => (window.location.href = "/contact")}
					>
						Contact Us
					</Motion.button>
				</Motion.div>
			</section>

			{/* Decorative animated background elements */}
			<Motion.div
				className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
			>
				{/* Floating circles */}
				{[...Array(8)].map((_, i) => (
					<Motion.div
						key={i}
						className="absolute rounded-full bg-[#14B8A6]/20"
						style={{
							width: `${60 + i * 10}px`,
							height: `${60 + i * 10}px`,
							left: `${10 + i * 10}%`,
							top: `${10 + (i % 2 === 0 ? 5 : 15) * i}px`,
							zIndex: 0,
						}}
						animate={{
							y: [0, 20, 0],
							x: [0, -10, 0],
							opacity: [0.7, 0.5, 0.7],
						}}
						transition={{
							repeat: Infinity,
							duration: 6 + i,
							ease: "easeInOut",
							delay: i * 0.5,
						}}
					/>
				))}
			</Motion.div>
		</div>
	);
};

export default AboutUs;
