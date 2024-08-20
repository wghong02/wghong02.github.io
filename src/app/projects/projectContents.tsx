export const ProjectContents = [
	{
		title: "Postare",
		imageSrc: "/assets/postare.png",
		body: `Postare a full-stack web application that serves as a visual discovery engine, 
        allowing users to explore, save, and organize image posts seamlessly. The platform 
        ensures a secure and intuitive environment for users to share and discover creative ideas.`,
		toolsUsed:
			"Backend: Go, Java Spring, PostgreSQL \n Frontend: Next.js, CharkraUI \n Cloud: AWS RDS, ECR and EC2",
		url: "http://3.133.130.137:3000",
		repo: "https://github.com/wghong02/postare",
	},
	{
		title: "San Francisco Crime Analysis in Apache Spark",
		imageSrc: "",
		body: `This projects uses San Francisco Crime data from 2003 to present to study and model crimes in the area, 
        using big data OLAP techniques with Spark, to discover possible interesting trends as well as developing 
        possible models for the number of crimes in the area. During the process, a data processing pipeline is 
        set up using Spark RDD, a K-means model and a time series model are established to model 
        the number of crimes in the area in terms of geographical and temporal relationships.`,
		toolsUsed:
			"Programming & Tools: Python, Spark, Numpy, Pandas, Seaborn, Matplot \n Modeling: ARIMA and K- means model",
		url: "",
		repo: "https://github.com/wghong02/SF-crime-analysis",
	},
	{
		title: "Automatic Liver Tumor CT Scan Segmentation",
		imageSrc: "",
		body: `This project adopts the UNet++ and transUNet model and improves the existing architecture, 
        by leveraging an addition of Atrious Spatial Pyramid Pooling (ASPP) model at the end going through 
        the output and integrating spatial channels attention blocks within the decoder for these two models, 
        respectively. The model results are tested using a combined loss of Cross Entropy and Dice loss. 
        The result shows improvement using the improved architecture. `,
		toolsUsed: "Programming: Python, PyTorch \n Modeling: UNet, ASPP",
		url: "",
		repo: "https://github.com/wghong02/Image_Segmentation",
	},
];
