import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	applicationName:"Wanchen Hong",
	title:{
		template: '%s | Wanchen Hong',
		default: 'Wanchen Hong',
	  },
	description: "Wanchen Hong's Personal Website",
	keywords: ["Wanchen Hong", "Wanchen", "Hong"],
	creator: 'Wanchen Hong',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header></Header>
				<div className="bg-white">
					<div className="relative isolate px-4 min-h-screen">
						<div
							aria-hidden="true"
							className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						>
							<div
								style={{
									clipPath:
										"polygon(74.1% 44.1%, 95% 61.6%, 92.5% 26.9%, 85.5% 90.1%, 80.7% 2%, 53.4% 68.1%, 47.5% 58.3%, 85.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%, 85% 21% )",
								}}
								className="relative left-[calc(50%-11rem)] aspect-[1155/678] -translate-x-1/2 rotate-[45deg] bg-gradient-to-tr from-[#0388fc] to-[#03fca5] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
							/>
						</div>
						<div className="mx-auto max-w-70% py-16 sm:py-24 lg:py-32">
							{children}
						</div>
						<div
							aria-hidden="true"
							className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
						>
							<div
								style={{
									clipPath:
										"polygon(4.1% 44.1%, 10% 61.6%, 67.5% 26.9%, 5.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
								}}
								className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/4 bg-gradient-to-tr from-[#0388fc] to-[#03fca5] opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
							/>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
