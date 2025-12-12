import { projects } from "@data/projects";
import { useScrollAnimation } from "@hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Projects = () => {
	const { ref, isVisible } = useScrollAnimation();
	const navigate = useNavigate();

	const handleProjectClick = (projectId) => {
		navigate(`/project/${projectId}`);
	};

	return (
		<section id="projects" className="section-padding">
			<div className="container-custom" ref={ref}>
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					animate={isVisible ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold text-center mb-12"
				>
					프로젝트 <span className="text-gradient">모음</span>
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 40 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							onClick={() => handleProjectClick(project.id)}
							className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
						>
							<div className="relative overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>

							<div className="p-6 flex flex-col h-full">
								<h3 className="text-xl font-semibold mb-2 dark:text-white">
									{project.title}
								</h3>
								<div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
									{project.period}
								</div>

								<div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
									{project.role}
								</div>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
