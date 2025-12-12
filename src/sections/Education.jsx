import { educationList } from "@data/education";
import { useScrollAnimation } from "@hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
	const { ref, isVisible } = useScrollAnimation();

	return (
		<section id="education" className="section-padding">
			<div className="container-custom" ref={ref}>
				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					animate={isVisible ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold text-center mb-12"
				>
					교육 & 학력 <span className="text-gradient">이력</span>
				</motion.h2>

				{/* Grid Cards */}
				<div className="grid gap-6 md:grid-cols-2">
					{educationList.map((edu, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 40 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="flex items-start gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
						>
							{/* 아이콘 */}
							<div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
								<GraduationCap size={18} />
							</div>

							{/* 내용 */}
							<div>
								<h3 className="text-lg font-semibold dark:text-white">
									{edu.title}
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{edu.institution} | {edu.period}
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
									{edu.description[0]}
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
									{edu.description[1]}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Education;
