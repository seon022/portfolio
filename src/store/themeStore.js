import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
	persist(
		(set, get) => ({
			theme: "light",

			toggleTheme: () => {
				const newTheme = get().theme === "light" ? "dark" : "light";
				set({ theme: newTheme });

				// DOM 업데이트
				document.documentElement.setAttribute("data-theme", newTheme);
			},
			setTheme: (theme) => {
				set({ theme });
				document.documentElement.setAttribute("data-theme", theme);
				if (theme === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
				console.log("테마 설정됨:", theme);
			},

			// 시스템 테마 감지
			initializeTheme: () => {
				const savedTheme = get().theme;
				const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
					.matches
					? "dark"
					: "light";
				const initialTheme = savedTheme || systemTheme;

				get().setTheme(initialTheme);
			},
		}),
		{
			name: "theme-storage",
		}
	)
);

export default useThemeStore;
