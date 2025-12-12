import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useThemeStore, useNavStore } from "../../store/store";
import { useActiveSection } from "../../hooks/useScrollAnimation";

const Navigation = () => {
	const { theme, toggleTheme } = useThemeStore();
	const { isMenuOpen, toggleMenu, closeMenu, setActiveSection } = useNavStore();

	const navItems = ["hero", "about", "projects", "education", "contact"];
	const activeSection = useActiveSection(navItems);

	useEffect(() => {
		setActiveSection(activeSection);
	}, [activeSection, setActiveSection]);
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const nav = document.querySelector("nav");
			const navHeight = nav ? nav.offsetHeight : 80;

			const additionalOffset = window.innerWidth < 768 ? 20 : 10;

			const elementPosition =
				element.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elementPosition - navHeight - additionalOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});

			if (isMenuOpen) {
				setTimeout(() => {
					closeMenu();
				}, 100);
			}
		}
	};

	const handleMobileMenuClick = (sectionId) => {
		console.log(`Navigating to: ${sectionId}`);

		// 즉시 메뉴 닫기
		closeMenu();

		// 메뉴 애니메이션 완료 후 스크롤
		setTimeout(() => {
			scrollToSection(sectionId);
		}, 300);
	};

	const navItemsConfig = [
		{ id: "hero", label: "Home" },
		{ id: "about", label: "About" },
		{ id: "projects", label: "Projects" },
		{ id: "education", label: "Education" },
		{ id: "contact", label: "Contact" },
	];

	return (
		<nav id="nav">
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
			>
				<div className="container-custom">
					<div className="flex items-center justify-between h-16">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="text-xl font-bold text-gradient cursor-pointer"
							onClick={() => scrollToSection("hero")}
						>
							KSY Portfolio
						</motion.div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-8">
							{navItemsConfig.map((item) => (
								<motion.button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`relative py-2 px-1 text-sm font-medium transition-colors ${
										activeSection === item.id
											? "text-blue-600 dark:text-blue-400"
											: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
									}`}
									whileHover={{ y: -2, cursor: "pointer" }}
								>
									{item.label}
									{activeSection === item.id && (
										<motion.div
											layoutId="activeSection"
											className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
										/>
									)}
								</motion.button>
							))}

							<motion.button
								onClick={toggleTheme}
								className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
								whileHover={{ scale: 1.1, rotate: 15, cursor: "pointer" }}
								whileTap={{ scale: 0.9 }}
							>
								{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
							</motion.button>
						</div>

						{/* Mobile Menu Button */}
						<div className="flex items-center space-x-2 md:hidden">
							<motion.button
								onClick={toggleTheme}
								className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
								whileTap={{ scale: 0.9 }}
							>
								{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
							</motion.button>

							<motion.button
								onClick={toggleMenu}
								className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
								whileTap={{ scale: 0.9 }}
							>
								{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</motion.button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800"
						>
							<div className="container-custom py-4">
								{navItemsConfig.map((item, index) => (
									<motion.div
										key={item.id}
										whileHover={{ cursor: "pointer" }}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
										onClick={() => {
											handleMobileMenuClick(item.id);
										}}
										className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
											activeSection === item.id
												? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
												: "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800"
										}`}
									>
										{item.label}
									</motion.div>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>

			{/* Quick Navigation Dots (Desktop) */}
			<div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
				<div className="flex flex-col space-y-4">
					{navItemsConfig.map((item) => (
						<motion.button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={`group relative w-3 h-3 rounded-full transition-all ${
								activeSection === item.id
									? "bg-blue-600 dark:bg-blue-400 scale-125"
									: "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
							}`}
							whileHover={{ scale: 1.5, cursor: "pointer" }}
						>
							{/* Tooltip */}
							<span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
								{item.label}
							</span>
						</motion.button>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
