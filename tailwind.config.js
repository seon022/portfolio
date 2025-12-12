import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blue: colors.blue,
				purple: colors.purple,
				gray: colors.gray,
				slate: colors.slate,
			},
		},
	},
	plugins: [typography],
};
