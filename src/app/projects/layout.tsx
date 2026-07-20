import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Projects",
	description: "Gilbert's Projects",
};

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
	return children;
};

export default ProjectLayout;
