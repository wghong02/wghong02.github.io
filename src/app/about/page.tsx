export default function ProjectPage() {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl pb-8">
				About Me
			</h1>
			<img
				src="/assets/pfp.jpg"
				alt="Profile Picture"
				className="w-56 rounded-full"
			/>

			<ul className="w-[80%] font-roboto list-disc pt-4">
				<li className="pt-2 ">
					I am studying computer science & physics and mathematics & statistics
					at Boston University.
				</li>
				<li className="pt-2">
					I am passionate about building and engineering new things.
				</li>
				<li className="pt-2">
					I love challenging myself to learn different skills and improving on
					my knowledge.
				</li>
				<li className="pt-2">
					I am experienced in full stack web development, machine learning, deep
					learning and statistical modeling.
				</li>
				<li className="pt-2">
					I am working on my software development skills and learning about more
					advanced big data technology.
				</li>
				<li className="pt-2">
					How to reach me:{" "}
					<a
						href="mailto:wghong@bu.edu"
						className=" hover:underline text-black hover:text-blue-500"
					>
						wghong@bu.edu
					</a>
				</li>
				<li className="pt-2">Pronouns: He/Him</li>
				<li className="pt-2"> Fun fact: big soccer fan! Hala Madrid!</li>
				<li className="pt-2">
					You can find my current resume{" "}
					<a
						href="/assets/Resume SWE FT.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className=" hover:underline text-black hover:text-blue-500"
					>
						here.
					</a>
				</li>
			</ul>
		</div>
	);
}
