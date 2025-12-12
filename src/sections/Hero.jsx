import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="hero"
			className="
		section-padding min-h-screen flex flex-col items-center justify-center
		relative overflow-hidden text-center backdrop-blur-sm
		bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]
		dark:from-[var(--bg-primary)] dark:to-[var(--bg-tertiary)]
	"
		>
			<motion.h1
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="relative z-10 mt-20 text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-gradient"
			>
				PORTFOLIO
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
				className="relative z-10 mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300"
			>
				SeonYoung • Frontend Developer
			</motion.p>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
				className="relative z-10 flex gap-6 mt-10"
			>
				{[
					{ icon: Github, href: "https://github.com/seon022", label: "GitHub" },
					{ icon: Mail, href: "mailto:seon022@icloud.com", label: "Email" },
				].map((social, index) => {
					const Icon = social.icon;
					return (
						<a
							key={index}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.label}
							className="
					p-3 rounded-full
					bg-white dark:bg-slate-800
					border border-gray-200 dark:border-gray-700
					shadow-md hover:shadow-lg
					text-gray-600 dark:text-gray-300
					hover:text-blue-600 dark:hover:text-blue-400
					transition-all
					focus:outline-none
				"
						>
							<Icon size={24} />
						</a>
					);
				})}
			</motion.div>

			<motion.button
				onClick={() => scrollToSection("about")}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="
		relative z-10 mt-20 text-gray-500 dark:text-gray-400 text-sm
		hover:text-blue-500 dark:hover:text-blue-300
		transition-colors
		focus:outline-none
	"
			>
				<span>Scroll Down</span>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
					className="
			flex items-center justify-center
			p-2 mt-2 rounded-full
			border border-gray-200 dark:border-gray-400
			cursor-pointer
		"
				>
					<ChevronDown size={20} />
				</motion.div>
			</motion.button>
		</section>
	);
};

export default Hero;
