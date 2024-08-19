export default function ProjectPage() {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<div className="w-[70%] max-w-3xl">
				<div className="text-left mb-4">Here are some of my experiences:</div>
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
