import { ProjectCard } from "@/components/projectCard";
import { ProjectContents } from "./projectContents";

export default function ProjectPage() {
	return (
		<div className="text-center w-full">
			<div className="text-center lg:w-max-70%" >
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
					My Projects
				</h1>
				<div className="flex flex-wrap justify-center w-full lg:gap-x-12 pt-8">
					{ProjectContents.map((item) => (
						<ProjectCard
							key={item.title}
							title={item.title}
							imageSrc={item.imageSrc}
							body={item.body}
							toolsUsed={item.toolsUsed}
							url={item.url}
                            repo={item.repo}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
