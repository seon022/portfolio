import { useScrollAnimation } from "@hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Sparkles } from "lucide-react";
import styled from "styled-components";

const GradientCard = styled(motion.div)`
	background: linear-gradient(
		135deg,
		rgba(59, 130, 246, 0.08) 0%,
		rgba(139, 92, 246, 0.08) 100%
	);
	backdrop-filter: blur(10px);
	transition: all 0.3s ease;

	&:hover {
		background: linear-gradient(
			135deg,
			rgba(59, 130, 246, 0.15) 0%,
			rgba(139, 92, 246, 0.15) 100%
		);
		transform: translateY(-6px);
	}
`;

const About = () => {
	const { ref, isVisible } = useScrollAnimation();

	const features = [
		{
			icon: Heart,
			title: "웹을 좋아합니다",
			description:
				"디자인이 코드로 구현되는 과정이 즐겁습니다. 사용자의 입장에서 더 나은 경험을 고민합니다.",
		},
		{
			icon: Lightbulb,
			title: "배움을 즐깁니다",
			description:
				"새로운 기술을 익히고 적용하며 성장합니다. 변화를 두려워하지 않습니다.",
		},
		{
			icon: Users,
			title: "협업을 중시합니다",
			description:
				"프로젝트는 혼자보다 함께할 때 더 성장한다고 믿습니다. 열린 대화로 문제를 해결합니다.",
		},
		{
			icon: Sparkles,
			title: "디테일에 집중합니다",
			description:
				"작은 인터랙션과 픽셀 단위의 완성도가 사용자 경험을 결정한다고 생각합니다.",
		},
	];

	return (
		<section id="about" className="section-padding">
			<div className="container-custom">
				<div
					ref={ref}
					className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
				>
					{/* Left: Text */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<motion.span
							initial={{ opacity: 0 }}
							animate={isVisible ? { opacity: 1 } : {}}
							transition={{ delay: 0.2 }}
							className="text-blue-600 dark:text-blue-400 font-semibold text-lg"
						>
							About Me
						</motion.span>

						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="text-3xl md:text-4xl font-bold mt-2 mb-6"
						>
							함께 일하고 싶은 <br />
							<span className="text-gradient dark:from-blue-400 dark:to-purple-400 from-blue-600 to-purple-600">
								신입 프론트엔드 개발자 강선영
							</span>
						</motion.h2>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="space-y-4 text-lg leading-relaxed"
						>
							<p>
								문제점을 해결하여 사용자 경험을 직관적으로 개선할 수 있다는 점이
								매력적이라 프론트엔드 개발을 선택했습니다.
							</p>
							<p>
								디자인을 코드로 구현하며, 구조적이고 재사용 가능한 UI를 만드는
								것에 흥미를 느낍니다. 작은 디테일이 웹의 완성도를 높인다고
								믿습니다.
							</p>
							<p>
								협업 속에서 성장하며, 함께 일하고 싶은 개발자로 기억되고
								싶습니다.
							</p>
						</motion.div>
					</motion.div>

					{/* Right: Values / Features */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="grid grid-cols-1 sm:grid-cols-2 gap-6"
					>
						{features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									animate={isVisible ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
								>
									<GradientCard
										className="p-6 rounded-2xl h-full"
										whileHover={{ scale: 1.02 }}
									>
										<motion.div
											className="w-12 h-12 bg-blue-700 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-4"
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.5 }}
										>
											<Icon size={24} className="text-white" />
										</motion.div>

										<h3 className="font-semibold text-lg mb-2">
											{feature.title}
										</h3>

										<p className="text-sm leading-relaxed">
											{feature.description}
										</p>
									</GradientCard>
								</motion.div>
							);
						})}
					</motion.div>
				</div>

				{/* Background Decoration */}
				<motion.div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-5 blur-3xl -z-10"
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			</div>
		</section>
	);
};

export default About;
