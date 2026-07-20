import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "About",
	description: "About Gilbert",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
	return children;
};

export default AboutLayout;
