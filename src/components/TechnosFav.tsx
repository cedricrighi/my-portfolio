import "../styles/TechnosFav.css";

export default function TechnosFav() {
	const technosFav = ["React", "Vite", "TypeScript", "MySQL"];

	return (
		<div className="technos-fav-container">
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
