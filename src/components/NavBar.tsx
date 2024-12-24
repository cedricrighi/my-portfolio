import "../styles/NavBar.css";

export default function NavBar() {
	return (
		<>
			<nav>
				<div className="nav-left-part">
					<h1>Cédric Righi</h1>
				</div>
				<div className="nav-right-part">
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>dark moon icon</title>
						<path
							d="M13 7.52667C12.8951 8.66147 12.4692 9.74294 11.7722 10.6445C11.0751 11.5461 10.1357 12.2305 9.0638 12.6177C7.99195 13.0049 6.83199 13.0787 5.71967 12.8307C4.60735 12.5827 3.58867 12.023 2.78282 11.2172C1.97697 10.4113 1.4173 9.39265 1.16927 8.28033C0.921253 7.16801 0.995147 6.00806 1.38231 4.9362C1.76947 3.86434 2.45389 2.92491 3.35548 2.22784C4.25707 1.53076 5.33853 1.10487 6.47334 1C5.80894 1.89884 5.48924 3.0063 5.57236 4.12094C5.65548 5.23559 6.13591 6.28337 6.92627 7.07373C7.71663 7.86409 8.76442 8.34452 9.87906 8.42764C10.9937 8.51077 12.1012 8.19106 13 7.52667Z"
							stroke="#1E1E1E"
							strokeWidth="1.6"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<svg
						width="20"
						height="13"
						viewBox="0 0 20 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>dark burger menu icon</title>
						<rect width="20" height="3" rx="1.5" fill="black" />
						<rect y="5" width="20" height="3" rx="1.5" fill="#010101" />
						<rect y="10" width="20" height="3" rx="1.5" fill="#060606" />
					</svg>
				</div>
			</nav>
		</>
	);
}
