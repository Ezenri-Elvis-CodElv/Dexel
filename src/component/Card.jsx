import React, { useRef, useState, useEffect } from "react";

const cards = [
	{
		step: "01 / 03",
		title: "Acquiring banks and fintechs",
		desc: "We enable banks and fintechs to modernize their payments infrastructure, reduce costs and scale without friction.",
		img: "/cardimage.gif",
	},
	{
		step: "02 / 03",
		title: "Payment gateways",
		desc: "We boost payment gateways with greater stability, security and payment options, optimizing conversion and operational efficiency.",
		img: "/cardimage2.gif",
	},
	{
		step: "03 / 03",
		title: "Payment Aggregators",
		desc: "We facilitate the management of multiple merchants with advanced tools to optimize payment acceptance and revenue distribution.",
		img: "/cardimage3.gif",
	},
];

const CardSlider = () => {
	const [current, setCurrent] = useState(0);
	const containerRef = useRef(null);
	const timeoutRef = useRef(null);
	const touchStartY = useRef(null);

	// Wheel for desktop, touch for mobile
	useEffect(() => {
		const handleWheel = (e) => {
			if (timeoutRef.current) return;
			if (e.deltaY > 0 && current < cards.length - 1) {
				setCurrent((prev) => prev + 1);
			} else if (e.deltaY < 0 && current > 0) {
				setCurrent((prev) => prev - 1);
			}
			timeoutRef.current = setTimeout(() => {
				timeoutRef.current = null;
			}, 400);
		};

		const handleTouchStart = (e) => {
			touchStartY.current = e.touches[0].clientY;
		};

		const handleTouchEnd = (e) => {
			if (timeoutRef.current) return;
			const touchEndY = e.changedTouches[0].clientY;
			const diff = touchStartY.current - touchEndY;
			if (diff > 40 && current < cards.length - 1) {
				setCurrent((prev) => prev + 1);
			} else if (diff < -40 && current > 0) {
				setCurrent((prev) => prev - 1);
			}
			timeoutRef.current = setTimeout(() => {
				timeoutRef.current = null;
			}, 400);
		};

		const container = containerRef.current;
		container.addEventListener("wheel", handleWheel, { passive: false });
		container.addEventListener("touchstart", handleTouchStart, { passive: false });
		container.addEventListener("touchend", handleTouchEnd, { passive: false });

		return () => {
			container.removeEventListener("wheel", handleWheel);
			container.removeEventListener("touchstart", handleTouchStart);
			container.removeEventListener("touchend", handleTouchEnd);
		};
	}, [current]);

	return (
		<div
			ref={containerRef}
			className="relative w-full h-[420px] md:h-[500px] flex flex-col items-center justify-center overflow-visible"
			style={{ minHeight: 320 }}
		>
			{cards.map((card, idx) => {
				// Only render the current card and the next/previous for transition
				if (idx < current - 1 || idx > current + 1) return null;

				let translateY = 0;
				let zIndex = 10;
				let blur = "none";
				let opacity = 1;
				let scale = 1;
				let boxShadow = "0 4px 24px #0A474733";
				let pointerEvents = idx === current ? "auto" : "none";
				let transition = "all 0.5s cubic-bezier(0.4,0,0.2,1)";

				if (idx === current) {
					translateY = 0;
					zIndex = 30;
					blur = "none";
					opacity = 1;
					scale = 1;
					pointerEvents = "auto";
				} else if (idx === current + 1) {
					translateY = 80;
					zIndex = 20;
					blur = "blur(4px)";
					opacity = 0.7;
					scale = 0.97;
					pointerEvents = "none";
				} else if (idx === current - 1) {
					translateY = -80;
					zIndex = 20;
					blur = "blur(4px)";
					opacity = 0.7;
					scale = 0.97;
					pointerEvents = "none";
				}

				return (
					<div
						key={idx}
						className={`
              absolute left-1/2 
              w-[96%] md:w-[90%] 
              h-[90%] md:h-[80%] 
              flex flex-col md:flex-row items-center justify-center 
              border-2 rounded-2xl shadow-xl
              bg-gradient-to-br from-[#bdd8ce] to-[#14B8A6]
            `}
						style={{
							top: "50%",
							transform: `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`,
							zIndex,
							filter: blur,
							opacity,
							borderColor: "#0A4747",
							boxShadow,
							pointerEvents,
							transition,
						}}
					>
						<div className="w-full md:w-[60%] h-[60%] md:h-full flex flex-col items-start justify-center p-4 md:pl-7">
							<p className="text-[15px] font-semibold" style={{ color: "#14B8A6" }}>{card.step}</p>
							<h1 className="text-[22px] md:text-[32px] font-bold mb-2" style={{ color: "#0A4747" }}>
								{card.title}
							</h1>
							<p className="text-[15px] md:text-[16px]" style={{ color: "#64748B" }}>{card.desc}</p>
						</div>
						<div className="w-full md:w-[40%] h-[180px] md:h-full flex items-center justify-center bg-[#F5F7FA] rounded-b-2xl md:rounded-tr-[10px] md:rounded-br-[10px]">
							<img
								src={card.img}
								alt={card.title}
								className="object-contain w-[80%] h-[80%] mx-auto"
							/>
						</div>
					</div>
				);
			})}
			{/* Mobile navigation dots */}
			<div className="flex md:hidden justify-center items-center gap-2 mt-4 absolute bottom-2 left-1/2 -translate-x-1/2">
				{cards.map((_, i) => (
					<button
						key={i}
						className={`w-2 h-2 rounded-full ${current === i ? "bg-[#14B8A6]" : "bg-gray-300"}`}
						onClick={() => setCurrent(i)}
						aria-label={`Go to card ${i + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default CardSlider;
