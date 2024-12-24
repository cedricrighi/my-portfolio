import "../styles/Contact.css";

export default function Contact() {
	return (
		<div className="contact-container">
			<h2>Retrouvez-moi</h2>
			<div className="icon-list-contact">
				<a
					href="https://www.linkedin.com/in/cedric-righi-64383732b"
					rel="noreferrer noopener"
					target="_blank"
				>
					<svg
						width="48"
						height="48"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>linkedin icon</title>
						<path
							d="M32 16C35.1826 16 38.2348 17.2643 40.4853 19.5147C42.7357 21.7652 44 24.8174 44 28V42H36V28C36 26.9391 35.5786 25.9217 34.8284 25.1716C34.0783 24.4214 33.0609 24 32 24C30.9391 24 29.9217 24.4214 29.1716 25.1716C28.4214 25.9217 28 26.9391 28 28V42H20V28C20 24.8174 21.2643 21.7652 23.5147 19.5147C25.7652 17.2643 28.8174 16 32 16Z"
							stroke="#1E1E1E"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 18H4V42H12V18Z"
							stroke="#1E1E1E"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
							stroke="#1E1E1E"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</a>
				<a
					href="https://github.com/cedricrighi"
					rel="noreferrer noopener"
					target="_blank"
				>
					<svg
						width="48"
						height="48"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>github icon</title>
						<g clipPath="url(#clip0_1_551)">
							<path
								d="M18 38C8 41 8 33 4 32M32 44V36.26C32.075 35.3063 31.9462 34.3476 31.622 33.4476C31.2979 32.5476 30.7859 31.7268 30.12 31.04C36.4 30.34 43 27.96 43 17.04C42.9995 14.2477 41.9254 11.5624 40 9.54C40.9117 7.09701 40.8472 4.3967 39.82 2C39.82 2 37.46 1.3 32 4.96C27.416 3.71764 22.584 3.71764 18 4.96C12.54 1.3 10.18 2 10.18 2C9.15275 4.3967 9.08829 7.09701 10 9.54C8.06025 11.5774 6.98505 14.2869 7 17.1C7 27.94 13.6 30.32 19.88 31.1C19.222 31.7799 18.7145 32.5908 18.3906 33.4798C18.0667 34.3689 17.9336 35.3161 18 36.26V44"
								stroke="#1E1E1E"
								strokeWidth="4"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_551">
								<rect width="48" height="48" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</a>
				<a href="mailto:votre.email@example.com">
					<svg
						width="53"
						height="53"
						viewBox="0 0 53 53"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>mail icon</title>
						<path
							d="M8.83329 44.1667C7.61871 44.1667 6.57895 43.7342 5.71402 42.8693C4.84909 42.0044 4.41663 40.9646 4.41663 39.75V13.25C4.41663 12.0355 4.84909 10.9957 5.71402 10.1308C6.57895 9.26584 7.61871 8.83337 8.83329 8.83337H44.1666C45.3812 8.83337 46.421 9.26584 47.2859 10.1308C48.1508 10.9957 48.5833 12.0355 48.5833 13.25V39.75C48.5833 40.9646 48.1508 42.0044 47.2859 42.8693C46.421 43.7342 45.3812 44.1667 44.1666 44.1667H8.83329ZM26.5 28.7084L8.83329 17.6667V39.75H44.1666V17.6667L26.5 28.7084ZM26.5 24.2917L44.1666 13.25H8.83329L26.5 24.2917ZM8.83329 17.6667V13.25V39.75V17.6667Z"
							fill="#1D1B20"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
}
