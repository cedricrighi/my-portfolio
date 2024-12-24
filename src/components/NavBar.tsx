import { useTheme } from "../contexts/themeContext";
import "../styles/NavBar.css";

export default function NavBar() {
	const { theme, toggleTheme } = useTheme();
	return (
		<>
			<nav
				style={{
					backgroundColor: theme ? "white" : "#02002f",
					borderBottom: theme
						? "1px solid rgb(80, 80, 80)"
						: "1px solid #e6e6e6",
				}}
			>
				<div className="nav-left-part">
					<h1>Cédric Righi</h1>
				</div>
				<div className="nav-right-part">
					{theme ? (
						<svg
							className="moon-icon"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							onClick={() => toggleTheme()}
							onKeyDown={() => toggleTheme()}
						>
							<title>dark moon icon</title>
							<path
								d="M13 7.52667C12.8951 8.66147 12.4692 9.74294 11.7722 10.6445C11.0751 11.5461 10.1357 12.2305 9.0638 12.6177C7.99195 13.0049 6.83199 13.0787 5.71967 12.8307C4.60735 12.5827 3.58867 12.023 2.78282 11.2172C1.97697 10.4113 1.4173 9.39265 1.16927 8.28033C0.921253 7.16801 0.995147 6.00806 1.38231 4.9362C1.76947 3.86434 2.45389 2.92491 3.35548 2.22784C4.25707 1.53076 5.33853 1.10487 6.47334 1C5.80894 1.89884 5.48924 3.0063 5.57236 4.12094C5.65548 5.23559 6.13591 6.28337 6.92627 7.07373C7.71663 7.86409 8.76442 8.34452 9.87906 8.42764C10.9937 8.51077 12.1012 8.19106 13 7.52667Z"
								stroke={theme ? "#1E1E1E" : "white"}
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					) : (
						<svg
							className="moon-icon"
							onClick={() => toggleTheme()}
							onKeyDown={() => toggleTheme()}
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>light icon</title>
							<g clip-path="url(#clip0_1_666)">
								<path
									d="M8.00002 0.666656V1.99999M8.00002 14V15.3333M2.81335 2.81332L3.76002 3.75999M12.24 12.24L13.1867 13.1867M0.666687 7.99999H2.00002M14 7.99999H15.3334M2.81335 13.1867L3.76002 12.24M12.24 3.75999L13.1867 2.81332M11.3334 7.99999C11.3334 9.84094 9.84097 11.3333 8.00002 11.3333C6.15907 11.3333 4.66669 9.84094 4.66669 7.99999C4.66669 6.15904 6.15907 4.66666 8.00002 4.66666C9.84097 4.66666 11.3334 6.15904 11.3334 7.99999Z"
									stroke="#FFF654"
									stroke-width="1.6"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1_666">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
					)}
				</div>
			</nav>
		</>
	);
}
