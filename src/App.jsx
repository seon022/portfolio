import { useEffect } from "react";
import { useThemeStore } from "./store/store";
import "./styles/globals.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import ProjectDetailPage from "@pages/ProjectDetailPage";

function App() {
	const initTheme = useThemeStore((state) => state.initTheme);

	useEffect(() => {
		console.log("초기 테마 상태:", useThemeStore.getState().theme);
		initTheme();

		const setVH = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};

		setVH();
		window.addEventListener("resize", setVH);

		return () => window.removeEventListener("resize", setVH);
	}, [initTheme]);

	return (
		<div className="overflow-x-hidden">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project/:projectId" element={<ProjectDetailPage />} />
				</Routes>
			</BrowserRouter>

			{/* <Navigation />
			<main>
				<Hero />
				<About />
				<Projects />
				<Education />
				<Contact />
			</main>
			<Footer /> */}
		</div>
	);
}

export default App;
