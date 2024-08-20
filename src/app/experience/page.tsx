export default function ExperiencePage() {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				My Experience
			</h1>
			<div className="w-[70%] max-w-3xl pt-8">
				<div className="text-left mb-4 font-semibold">My education:</div>
				<div className="flex justify-between">
					<div className="">Boston University</div>
					<div>Aug 2020 - Jan 2025</div>
				</div>

				<ul className="font-roboto list-none">
					<li className="pt-2">
						<div className="flex justify-between">
							<div>BA/MA in Mathematics and Statistics</div>
							<div>GPA: 3.86</div>
						</div>
					</li>
					<li className="pt-2">BA in Computer Science and Physics</li>
				</ul>
			</div>

			<div className="w-[70%] max-w-3xl pt-8">
				<div className="text-left mb-4 font-semibold">My skills:</div>

				<ul className="font-roboto list-none">
					<li className="pt-2 ">
						Programming Languages: Java, Javascript, Typescript, Python, Go, R,
						C, HTML, CSS
					</li>
					<li className="pt-2">
						Databases and Big Data Tools: PostgreSQL, MySQL, Spark, Hadoop,
						MapReduce
					</li>
					<li className="pt-2">
						Frameworks and Platforms: Next.js, React, ChakraUI, Tailwind CSS,
						ant Design, Node.js, AWS, Google Cloud, Git, Firebase, Pytorch,
						Tensorflow
					</li>
				</ul>
			</div>
			<div className="w-[70%] max-w-3xl pt-8">
				<div className="text-left mb-4 font-semibold">
					My relative experience:
				</div>
				<div className="flex justify-between">
					<div>TCW Lab, Bioinformatics Research, Boston University</div>
					<div>Jan 2022 - Mar 2023</div>
				</div>

				<ul className="font-roboto list-disc">
					<li className="pt-2">
						Analyzed the impact of gene's aging on Alzheimer's Disease (AD)
						through the mouse model using R.
					</li>
					<li className="pt-2">
						Performed RNA sequencing and single-cell RNA sequencing with
						existing lab pipelines and R packages including scRNAseq, seurat,
						and deseq2.
					</li>
					<li className="pt-2">
						Identified key gene markers via gene enrichment analysis, such as
						GSEA and PEA.
					</li>
					<li className="pt-2">
						Developed a visualization pipeline that uses heatmaps, bar graphs,
						and upset graphs.
					</li>
				</ul>
			</div>
		</div>
	);
}
