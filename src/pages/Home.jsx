import Hero from "@sections/Hero";
import Navigation from "@components/layout/Navigation";
import About from "@sections/About";
import Education from "@sections/Education";
import Projects from "@sections/Projects";
import { useEffect } from "react";
import Contact from "@sections/Contact";

const Home = () => {
	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace("#", "");
			setTimeout(() => {
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}, 100);
		}
	}, []);
	return (
		<>
			<Navigation />
			<main>
				<Hero />
				<About />
				<Projects />
				<Education />
				<Contact />
			</main>
		</>
	);
};

export default Home;
