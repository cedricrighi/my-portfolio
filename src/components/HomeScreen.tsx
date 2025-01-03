import { Link } from "react-scroll";
import "../styles/HomeScreen.css";
import AboutMySelf from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import TechnosFav from "./TechnosFav";
import { useTheme } from "../contexts/themeContext";

export default function HomeScreen() {
	const { theme } = useTheme();

	return (
		<>
			<div className="homescreen-container">
				<h1 className="main-title">
					Bonjour, je suis <span className="cedric-gradient">Cédric</span> 👋🏻
				</h1>
				<p className="description-paragraph">
					Développeur Full Stack passionné par la création d'applications web
					modernes
				</p>
				<div className="buttons-homescreen">
					<a
						href="/my-portfolio/cedric-righi-CV.pdf"
						download="cedric-righi-CV.pdf"
						className="download-cv"
					>
						<svg
							className="download-icon"
							viewBox="0 0 514 514"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>download button</title>
							<path
								className="download-icon"
								d="M270.5 2.93749C277.92 7.37946 282.734 13.2124 285.365 21.3825C286.502 26.0702 286.421 30.7209 286.399 35.5223C286.405 36.653 286.412 37.7837 286.419 38.9486C286.437 42.7211 286.435 46.4933 286.432 50.2659C286.44 52.9765 286.452 55.6872 286.463 58.3978C286.486 64.2254 286.498 70.0528 286.502 75.8804C286.509 84.306 286.532 92.7315 286.559 101.157C286.602 114.829 286.632 128.5 286.654 142.172C286.675 155.448 286.702 168.725 286.738 182.002C286.74 182.821 286.742 183.64 286.744 184.484C286.755 188.593 286.766 192.702 286.778 196.811C286.871 230.874 286.942 264.937 287 299C288.192 297.795 288.192 297.795 289.407 296.566C296.914 288.978 304.431 281.401 311.959 273.834C315.828 269.944 319.693 266.051 323.55 262.148C327.276 258.379 331.012 254.619 334.754 250.866C336.177 249.436 337.596 248.003 339.011 246.566C341.002 244.546 343.005 242.539 345.011 240.534C345.587 239.945 346.162 239.355 346.755 238.747C353.629 231.941 360.97 227.942 370.75 227.75C380.242 227.933 385.972 231.043 392.828 237.59C398.377 243.747 400.401 250.516 400.199 258.77C399.59 265.587 397.77 270.541 393.081 275.599C392.272 276.472 391.464 277.344 390.63 278.243C386.027 283.068 381.35 287.815 376.64 292.537C375.529 293.655 374.417 294.773 373.306 295.891C369.696 299.522 366.08 303.148 362.465 306.773C361.213 308.03 359.961 309.286 358.709 310.542C352.833 316.437 346.954 322.329 341.073 328.219C334.306 334.996 327.547 341.782 320.795 348.574C315.556 353.843 310.309 359.105 305.056 364.361C301.927 367.492 298.801 370.627 295.683 373.77C292.754 376.723 289.816 379.665 286.87 382.601C285.794 383.676 284.722 384.755 283.653 385.837C275.644 393.944 268.986 399.468 257.25 400.25C247.249 400.099 239.688 394.928 232.788 388.055C232.299 387.571 231.811 387.088 231.308 386.589C229.687 384.981 228.073 383.365 226.458 381.749C225.292 380.589 224.125 379.429 222.958 378.269C219.798 375.127 216.645 371.979 213.494 368.828C211.523 366.859 209.55 364.89 207.577 362.922C200.688 356.052 193.804 349.176 186.925 342.295C180.521 335.89 174.106 329.496 167.685 323.107C162.165 317.614 156.653 312.112 151.147 306.605C147.862 303.319 144.574 300.037 141.278 296.762C138.178 293.681 135.088 290.591 132.004 287.493C130.874 286.361 129.741 285.233 128.604 284.107C120.365 275.951 114.56 269.265 113.75 257.312C113.977 248.013 117.159 241.804 123.586 235.137C129.917 229.533 136.915 227.588 145.223 227.734C161.362 229.278 171.911 243.767 182.664 254.566C183.95 255.854 185.236 257.142 186.522 258.429C189.875 261.785 193.224 265.145 196.573 268.505C200.004 271.946 203.438 275.384 206.871 278.822C213.584 285.545 220.293 292.272 227 299C227.001 298.133 227.001 298.133 227.002 297.248C227.038 262.969 227.094 228.69 227.178 194.411C227.188 190.293 227.198 186.175 227.208 182.057C227.21 180.827 227.21 180.827 227.213 179.572C227.244 166.307 227.261 153.041 227.273 139.775C227.286 126.158 227.313 112.542 227.355 98.9249C227.38 90.5259 227.393 82.127 227.391 73.7279C227.391 67.9646 227.406 62.2015 227.432 56.4383C227.447 53.1155 227.453 49.7932 227.446 46.4703C227.439 42.8607 227.457 39.2521 227.481 35.6426C227.473 34.6017 227.465 33.5608 227.458 32.4884C227.57 22.8874 230.229 14.7687 236.98 7.76171C246.128 -0.217934 259.313 -2.01741 270.5 2.93749Z"
								fill="black"
							/>
							<path
								className="download-icon"
								d="M42.9414 344.684C50.2657 349.367 55.3524 354.575 58 363C58.8817 369.217 58.705 375.548 58.6875 381.813C58.765 403.441 60.1854 422.621 75.75 439.188C89.2651 452.112 106.291 455.328 124.372 455.254C125.558 455.257 126.744 455.26 127.966 455.263C131.222 455.27 134.478 455.268 137.734 455.261C141.26 455.257 144.786 455.264 148.311 455.269C155.204 455.278 162.096 455.276 168.989 455.271C174.594 455.266 180.199 455.265 185.804 455.268C186.604 455.268 187.404 455.268 188.228 455.269C189.853 455.269 191.478 455.27 193.103 455.271C208.317 455.276 223.531 455.27 238.745 455.259C251.781 455.25 264.817 455.252 277.853 455.261C293.015 455.271 308.177 455.276 323.339 455.27C324.958 455.269 326.577 455.268 328.196 455.268C328.992 455.267 329.789 455.267 330.609 455.267C336.203 455.265 341.797 455.268 347.391 455.273C354.215 455.278 361.038 455.277 367.861 455.266C371.338 455.261 374.815 455.259 378.292 455.265C382.071 455.271 385.849 455.264 389.628 455.254C391.256 455.261 391.256 455.261 392.917 455.267C410.61 455.178 426.12 450.527 439.188 438.25C451.555 425.317 455.053 409.135 455.238 391.77C455.247 390.961 455.256 390.152 455.265 389.319C455.295 385.971 455.315 382.624 455.305 379.276C455.293 367.952 455.647 359.449 463.176 350.379C471.195 343.562 477.13 341.353 487.754 341.66C495.94 342.517 501.438 345.776 507.211 351.512C512.48 358.84 513.594 365.587 513.496 374.473C513.498 375.554 513.499 376.635 513.5 377.749C513.499 380.029 513.487 382.31 513.467 384.59C513.438 388.028 513.446 391.466 513.459 394.904C513.445 410.412 512.494 424.938 506.875 439.563C506.575 440.354 506.275 441.146 505.966 441.962C495.302 469 473.425 492.253 446.787 503.974C444.414 504.962 442.028 505.899 439.625 506.812C438.907 507.091 438.19 507.369 437.451 507.655C420.592 513.734 403.505 513.439 385.831 513.392C382.022 513.385 378.213 513.396 374.403 513.404C366.962 513.417 359.521 513.415 352.079 513.406C346.026 513.399 339.973 513.398 333.92 513.401C333.055 513.402 332.19 513.402 331.3 513.403C329.542 513.404 327.785 513.405 326.028 513.406C309.589 513.414 293.15 513.405 276.711 513.388C262.635 513.375 248.559 513.377 234.483 513.391C218.099 513.407 201.715 513.413 185.331 513.404C183.581 513.403 181.83 513.402 180.08 513.401C179.219 513.401 178.358 513.401 177.471 513.4C171.432 513.397 165.393 513.402 159.354 513.409C151.985 513.417 144.616 513.415 137.246 513.399C133.494 513.391 129.741 513.388 125.988 513.398C108.181 513.442 91.2875 513.349 74.4375 506.875C73.6458 506.575 72.854 506.275 72.0383 505.966C45.038 495.317 21.6675 473.422 10.0264 446.771C9.03976 444.382 8.10199 441.98 7.1875 439.563C6.90947 438.837 6.63143 438.111 6.34497 437.363C0.991122 422.45 0.468267 407.879 0.499023 392.201C0.500003 388.677 0.458102 385.155 0.414062 381.631C0.408859 379.362 0.406167 377.093 0.40625 374.824C0.389855 373.785 0.373459 372.747 0.356567 371.676C0.440971 362.679 3.25934 355.894 9.1875 349.125C18.2489 340.882 32.0214 338.933 42.9414 344.684Z"
								fill="black"
							/>
						</svg>
						Télécharger CV
					</a>
					<Link className="link" to="projects" smooth offset={-50}>
						<button
							className="go-to-projects-button"
							type="button"
							style={{
								color: theme ? "black" : "white",
								borderColor: theme ? "black" : "white",
							}}
						>
							Voir mes projets
						</button>
					</Link>
				</div>
				<TechnosFav />
				<div className="link-to-bottom">
					<p>En découvrir plus</p>
					<Link to="about-me" smooth>
						<button type="button" className="button-to-bottom">
							<svg
								className="svg-icon-to-bottom"
								viewBox="0 0 12 12"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>arrowToBottom</title>
								<path
									d="M10.375 6.83333L6 11M6 11L1.625 6.83333M6 11L6 1"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</Link>
				</div>
			</div>
			<AboutMySelf />
			<Projects />
			<Contact />
		</>
	);
}
