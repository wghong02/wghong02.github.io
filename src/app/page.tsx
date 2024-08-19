"use client";

const navigation = [
	{ name: "Projects", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

export default function HomePage() {
	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				Hi, Welcome!
			</h1>
			<p className="mt-6 text-lg leading-8 text-gray-600">
				My name is Wanchen, you can also call me Gilbert!
			</p>
		</div>
	);
}
