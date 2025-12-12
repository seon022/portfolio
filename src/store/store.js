import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
	persist(
		(set, get) => ({
			theme: "light",

			toggleTheme: () => {
				const newTheme = get().theme === "light" ? "dark" : "light";
				set({ theme: newTheme });
				document.documentElement.setAttribute("data-theme", newTheme);
				console.log("테마 토글됨, 현재 테마:", newTheme);
			},

			setTheme: (theme) => {
				set({ theme });
				document.documentElement.setAttribute("data-theme", theme);
				console.log("테마 설정됨:", theme);
			},

			initTheme: () => {
				const saved = get().theme;
				const system = window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light";
				const theme = saved || system;

				set({ theme });
				document.documentElement.setAttribute("data-theme", theme);
			},
		}),
		{ name: "theme-storage" }
	)
);

export const useNavStore = create((set) => ({
	isMenuOpen: false,
	activeSection: "hero",

	toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
	closeMenu: () => set({ isMenuOpen: false }),
	setActiveSection: (section) => set({ activeSection: section }),
}));

export const useContactStore = create((set) => ({
	formData: {
		name: "",
		email: "",
		message: "",
	},
	isSubmitting: false,
	submitStatus: null, // 'success' | 'error' | null

	updateFormData: (field, value) =>
		set((state) => ({
			formData: { ...state.formData, [field]: value },
		})),

	resetForm: () =>
		set({
			formData: { name: "", email: "", message: "" },
			submitStatus: null,
		}),

	setSubmitting: (status) => set({ isSubmitting: status }),
	setSubmitStatus: (status) => set({ submitStatus: status }),
}));
