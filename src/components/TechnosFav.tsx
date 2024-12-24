import { useTheme } from "../contexts/themeContext";
import "../styles/TechnosFav.css";

export default function TechnosFav() {
	const technosFav = ["React", "Vite", "TypeScript", "MySQL"];
	const { theme } = useTheme();

	return (
		<div
			className="technos-fav-container"
			style={{
				boxShadow: theme
					? "1px 3px 10px -4px #272727"
					: "1px 3px 20px -4px rgb(255, 255, 255)",
			}}
		>
			<h4>Technologies préférées</h4>
			<div className="technos-fav-list-container">
				{technosFav.map((techno, index) => {
					const id = index + 1;
					return <p key={id}>{techno}</p>;
				})}
			</div>
		</div>
	);
}
