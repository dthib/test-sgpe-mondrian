import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts"; // handles .d.ts bundling
import { resolve } from "path";

export default defineConfig({
    plugins: [
        react(),
        dts({ insertTypesEntry: true }), // generates index.d.ts
    ],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "MondrianTreemap",
            fileName: (format) => `mondrian-treemap.${format}.js`,
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: ["react", "react-dom", "echarts", "react/jsx-runtime", "react/jsx-dev-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    echarts: "echarts",
                    "react/jsx-runtime": "React",
                    "react/jsx-dev-runtime": "React",
                },
            },
        },
    },
    server: {
        port: 3000,
        open: "/src/demo/index.html",
    },
});
