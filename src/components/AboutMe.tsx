import "../styles/AboutMe.css";

interface AboutMySelfProps {
	id: string;
}

export default function AboutMySelf({ id }: AboutMySelfProps) {
	return (
		<div id={id} className="about-me-container">
			<h2>À propos de moi</h2>
			<div className="photo-container" />
			<div className="presentation">
				<h3>Développeur Web Fullstack</h3>
				<p>
					Après une année en licence de Mathématiques puis une autre en
					Informatique, j'ai choisi de me spécialiser dans le développement web
					à la Wild Code School. Cette formation pratique me permet de
					transformer ma curiosité pour le code en compétences concrètes pour
					créer des applications web modernes.
				</p>
			</div>
		</div>
	);
}
