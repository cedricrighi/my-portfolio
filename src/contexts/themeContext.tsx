import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ThemeContextProps {
	theme: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<boolean>(true);

	const toggleTheme = () => {
		setTheme((prevTheme) => !prevTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}

export { ThemeProvider, useTheme };
