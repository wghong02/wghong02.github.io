export default function SerenestSupport() {
	return (
		<div className="mx-auto w-full max-w-3xl text-left text-gray-700">
			<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Serenest Support
			</h1>
			<p className="pt-2 text-sm text-gray-500">Last updated: July 19, 2026</p>

			<p className="pt-6">
				Serenest is a retirement planning app that helps you track accounts and
				project your financial future, entirely on your device. If you have a
				question, run into a problem, or want to request a feature, we&apos;re
				happy to help.
			</p>

			<h2 className="pt-8 text-xl font-semibold text-gray-900">Contact</h2>
			<p className="pt-2">
				Email us at{" "}
				<a
					href="mailto:wghong02@gmail.com"
					className="text-black hover:text-blue-500 hover:underline"
				>
					wghong02@gmail.com
				</a>
				. We aim to respond within a few business days.
			</p>

			<h2 className="pt-8 text-xl font-semibold text-gray-900">
				Reporting a problem
			</h2>
			<p className="pt-2">
				To help us resolve issues quickly, please include:
			</p>
			<ul className="list-disc pt-2 pl-6">
				<li className="pt-1">Your device model and iOS version</li>
				<li className="pt-1">The app version (Settings &rarr; About)</li>
				<li className="pt-1">
					A description of what happened and the steps to reproduce it
				</li>
			</ul>

			<h2 className="pt-8 text-xl font-semibold text-gray-900">
				Your data &amp; privacy
			</h2>
			<p className="pt-2 pb-4">
				All Serenest data is stored only on your device — we have no servers and
				collect no personal information. For details, see the{" "}
				<a
					href="/apps/policy/serenest"
					className="text-black hover:text-blue-500 hover:underline"
				>
					Serenest Privacy Policy
				</a>
				.
			</p>
		</div>
	);
}
