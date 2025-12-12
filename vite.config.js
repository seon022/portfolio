import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@layout": path.resolve(__dirname, "./src/components/layout"),
			"@sections": path.resolve(__dirname, "./src/sections"),
			"@data": path.resolve(__dirname, "./src/data"),
			"@store": path.resolve(__dirname, "./src/store"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@pages": path.resolve(__dirname, "./src/pages"),
		},
	},
});
