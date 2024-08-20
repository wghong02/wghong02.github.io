"use client";

export const ProjectCard = ({
	title,
	imageSrc,
	body,
	toolsUsed,
	url,
	repo,
}: {
	title: string;
	imageSrc: string;
	body: string;
	toolsUsed: string;
	url: string;
	repo: string;
}) => {
	return (
		<div className="min-w-96 max-w-md flex flex-col justify-between rounded overflow-hidden shadow-lg bg-white">
			{/* Title Section */}
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
			</div>

			{/* Picture Section */}
			{imageSrc != "" && (
				<div className="flex justify-center pb-2">
					<img className="w-[80%] max-h-80 object-contain" src={imageSrc} alt={title} />
				</div>
			)}

			{/* Body Section */}
			<div className="text-left px-8 py-2">
				<p className="text-gray-700 text-base">{body}</p>
			</div>

			{/* ToolsUsed Section */}
			<div className="text-left px-8 py-2">
				<p className="text-gray-900 font-semibold">Tools Used:</p>
				{toolsUsed.split("\n").map((line, index) => (
					<p key={index}>{line}</p>
				))}
			</div>

			{/* Footer Section */}
			<div
				className={`px-6 py-4 flex ${
					url !== "" ? "justify-between" : "justify-center"
				}`}
			>
				<a
					href={repo}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
				>
					{" "}
					View Project Repo
				</a>
				{url != "" && (
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-teal-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 focus:outline-none"
					>
						{" "}
						Visit Website
					</a>
				)}
			</div>
		</div>
	);
};
