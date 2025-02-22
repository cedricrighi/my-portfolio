import memoryGame from "/img/memory-game.png";
import trombiProject from "/img/trombi-project.png";
import cineWild from "/img/cine-wild.png";
import Geocode from "/img/geocode.png";
import carFinder from "/img/carFinder.png";
import solarSystem from "/img/solar-system.png";
import "../styles/Projects.css";
import { useTheme } from "../contexts/themeContext";

export default function Projects() {
	const projects = [
		{
			image: trombiProject,
			title: "Trombinoscope",
			techs: ["HTML", "CSS", "JS"],
			link: "https://cedricrighi.github.io/project1-trombi/",
		},
		{
			image: memoryGame,
			title: "Jeu de mémoire",
			techs: ["React", "TypeScript"],
			link: "https://cedricrighi.github.io/memory-game/",
		},
		{
			image: cineWild,
			title: "Site de recherche de film (en cours de déploiement)",
			techs: ["React", "TypeScript", "Express"],
			link: "#",
		},
		{
			image: Geocode,
			title:
				"Site de réservation de borne de recharge (en cours de développement)",
			techs: ["React", "TypeScript", "MySQL"],
			link: "#",
		},
		{
			image: solarSystem,
			title: "Système solaire",
			techs: ["React", "TypeScript"],
			link: "https://cedricrighi.github.io/solar-system/",
		},
		{
			image: carFinder,
			title: "Site de recherche de voiture ( que le frontend de déployé )",
			techs: ["React", "TypeScript", "Express"],
			link: "https://car-finder-with-just-front.vercel.app/",
		},
	];

	const { theme } = useTheme();

	return (
		<div
			className="my-projects-container"
			id="projects"
			style={{ backgroundColor: theme ? "#f6f6f6" : "#080548" }}
		>
			<h2>Mes projets</h2>
			<div className="projects-container">
				{projects.map((project, index) => {
					const id = index + 1;
					return (
						<div key={id} className="project">
							<img src={project.image} alt="project" className="project-img" />
							<div
								className="project-description"
								style={{ backgroundColor: theme ? "white" : "#02002f" }}
							>
								<h3>{project.title}</h3>
								<div className="techs">
									{project.techs.map((tech, index) => {
										const id = index + 1;
										return (
											<p key={id} className="tech">
												{tech}
											</p>
										);
									})}
								</div>
								<a
									href={project.link}
									rel="noreferrer noopener"
									target="_blank"
								>
									Voir le projet{" "}
									<svg
										className="external-link-icon"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>external link icon</title>
										<path
											d="M11 7.66667V11.6667C11 12.0203 10.8595 12.3594 10.6095 12.6095C10.3594 12.8595 10.0203 13 9.66667 13H2.33333C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667V4.33333C1 3.97971 1.14048 3.64057 1.39052 3.39052C1.64057 3.14048 1.97971 3 2.33333 3H6.33333M9 1H13M13 1V5M13 1L5.66667 8.33333"
											stroke="#005AB4"
											strokeWidth="1.6"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
