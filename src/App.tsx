import "./App.css";
import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import { useTheme } from "./contexts/themeContext";

function App() {
	const { theme } = useTheme();

	return (
		<div
			style={{
				backgroundColor: theme ? "white" : "#02002f",
				color: theme ? "black" : "white",
			}}
		>
			<NavBar />
			<HomeScreen />
		</div>
	);
}

export default App;
