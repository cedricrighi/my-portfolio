import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/themeContext.tsx";

const root = document.getElementById("root");
root &&
	createRoot(root).render(
		<StrictMode>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</StrictMode>,
	);
