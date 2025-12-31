import { useScrollAnimation } from "@hooks/useScrollAnimation";
import { Mail, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
	const { ref, isVisible } = useScrollAnimation();
	return (
		<section id="contact" className="text-center mb-16">
			{" "}
			<div className="container-custom" ref={ref}>
				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					animate={isVisible ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold text-center mb-12"
				>
					<span className="text-gradient">Contact</span>
				</motion.h2>
			</div>
			<div className="flex justify-center gap-6 mb-4">
				<a
					href="https://github.com/seon022"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-gray-900"
				>
					<Github size={24} />
				</a>
			</div>
			<div className="flex justify-center mb-4">
				<a
					href="mailto:seon02d@gmail.com"
					className="flex items-center gap-2 hover:text-blue-600"
				>
					<Mail size={20} />
					seon02d@gmail.com
				</a>
			</div>
			<p className="text-sm text-gray-400">
				© {new Date().getFullYear()} Kang Seonyoung. All rights reserved.
			</p>
		</section>
	);
};

export default Contact;
