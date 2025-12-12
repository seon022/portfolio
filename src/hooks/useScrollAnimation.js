import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useScrollAnimation = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return { ref, isVisible: inView, entry };
};

export const useStaggerAnimation = (itemsCount, delay = 100) => {
	const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
	const [visibleItems, setVisibleItems] = useState([]);

	useEffect(() => {
		if (inView && visibleItems.length === 0) {
			const timeouts = [];

			for (let i = 0; i < itemsCount; i++) {
				const timeout = setTimeout(() => {
					setVisibleItems((prev) => [...prev, i]);
				}, i * delay);

				timeouts.push(timeout);
			}

			return () => timeouts.forEach(clearTimeout);
		}
	}, [inView, itemsCount, delay, visibleItems.length]);

	return {
		ref,
		isItemVisible: (index) => visibleItems.includes(index),
	};
};

// 스크롤 진행도
export const useScrollProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			const scrollHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrollTop = window.scrollY;
			const progress = (scrollTop / scrollHeight) * 100;
			setProgress(Math.min(progress, 100));
		};

		window.addEventListener("scroll", updateProgress);
		return () => window.removeEventListener("scroll", updateProgress);
	}, []);

	return progress;
};

export const useActiveSection = (sectionIds) => {
	const [activeSection, setActiveSection] = useState(sectionIds[0]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const centerPoint = scrollY + windowHeight / 2; // 화면 중앙점

			let currentActiveSection = sectionIds[0];
			let minDistance = Infinity;

			sectionIds.forEach((id) => {
				const element = document.getElementById(id);
				if (!element) return;

				const rect = element.getBoundingClientRect();
				const elementTop = rect.top + scrollY;
				const elementBottom = elementTop + rect.height;
				const elementCenter = elementTop + rect.height / 2;

				// 방법 1: 화면 중앙점에 가장 가까운 섹션 찾기
				const distance = Math.abs(elementCenter - centerPoint);

				// 방법 2: 섹션이 화면에 일정 비율 이상 보이는지 확인
				const visibleTop = Math.max(elementTop, scrollY);
				const visibleBottom = Math.min(elementBottom, scrollY + windowHeight);
				const visibleHeight = Math.max(0, visibleBottom - visibleTop);
				const visibilityRatio = visibleHeight / rect.height;

				// 섹션이 30% 이상 보이고, 중앙점에 가장 가까운 섹션을 선택
				if (visibilityRatio > 0.3 && distance < minDistance) {
					minDistance = distance;
					currentActiveSection = id;
				}
			});

			setActiveSection(currentActiveSection);
		};

		// 스크롤 이벤트 리스너 등록 (throttling 적용)
		let ticking = false;
		const throttledScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		// 초기 실행 및 스크롤 이벤트 등록
		handleScroll();
		window.addEventListener("scroll", throttledScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", throttledScroll);
		};
	}, [sectionIds]);

	return activeSection;
};
