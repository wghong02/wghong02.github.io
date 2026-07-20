import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Serenest Privacy Policy",
	description: "Privacy policy for the Serenest retirement planning app.",
};

const SerenestPolicyLayout = ({ children }: { children: React.ReactNode }) => {
	return children;
};

export default SerenestPolicyLayout;
