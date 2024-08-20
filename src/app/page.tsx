"use client";

const navigation = [
	{ name: "Projects", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

export default function HomePage() {
	return (
		<div className="flex flex-col items-center min-w-sm">
			<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				Hi, Welcome!
			</h1>
			<p className="mt-20 text-lg sm:text-xl leading-8 text-gray-600">
				My name is Wanchen, you can also call me Gilbert!
			</p>
			<p className="mt-10 text-lg sm:text-xl leading-8 text-gray-600">
				I love building things and improve in the process
			</p>
			<p className="mt-10 text-lg sm:text-xl leading-8 text-gray-600">
				I enjoy learning and explore what I don't know already
			</p>
			<p className="mt-10 text-lg sm:text-xl leading-8 text-gray-600">
				I want to leave my trace in the wave of technology advancement
			</p>
			<p className="mt-10 text-lg sm:text-xl leading-8 text-gray-600">
				Let's make this world a better place together!
			</p>
		</div>
	);
}
