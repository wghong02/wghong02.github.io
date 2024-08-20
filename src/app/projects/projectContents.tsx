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
		title: "Echo Tune",
		imageSrc: "/assets/echotune.png",
		body: `Postare a Kotlin based Android mobile application that functions as music player, 
        where users can find, listen to, and favorite their own songs and albums.`,
		toolsUsed:
			"Backend: Kotlin, Room Database \n Frontend: Android Jetpack, Google Exoplayer",
		url: "",
		repo: "https://github.com/wghong02/echo-tune",
	},
	{
		title: "Vegrendishop",
		imageSrc: "/assets/vegrendishop.png",
		body: `Vegrendishop is a simple e-commerce platform for handcrafts. Built as a full-stack web application, 
        it allows users to explore, purchase, and post their own crafts easily. The platform 
        ensures a secure environment to purchase (ensured with StripeAPI) and discover different crafts.`,
		toolsUsed:
			"Backend: Go, ElasticSearch \n Frontend: React, AntDesign \n Cloud: Google Cloud",
		url: "",
		repo: "https://github.com/wghong02/vegrendishop",
	},
	{
		title: "Pocket Twitch Player",
		imageSrc: "/assets/pockettwitchplayer.png",
		body: `Pocket Twitch Player is a full-stack web player that recommends personalized twitch contents 
        to the users, which allows users to search for Twitch resources such as streams, videos, and save
        them for future usage. Personalized recommendations are added to improve user experience.`,
		toolsUsed:
			"Backend: Java SpringBoot, MySQL \n Frontend: React, AntDesign \n Cloud: Amazon RDS",
		url: "",
		repo: "https://github.com/wghong02/pocket-twitch-player",
	},
	{
		title: "Semantic Analysis for Youtube user Comment",
		imageSrc: "",
		body: `This project uses a Spark-based machine learning algorithm to categorize users according to 
        their YouTube video comments. The dataset is processed users comments via RegexTokenizer and Word2Vec 
        in SparkML. The adopted Logistic Regression and Random Forest models are tuned via k-fold cross-validation. 
        TF-IDF methodology is applied for feature extraction and implemented an unsupervised Latent Dirichlet 
        Allocation (LDA) model to identify the top 5 topics among the target user group.`,
		toolsUsed:
			"Programming & Tools: Python, Spark, Numpy, Pandas, Seaborn, Matplotlib \n Modeling: Tokenizers, TF-IDF and LDA",
		url: "",
		repo: "https://github.com/wghong02/YouTube-comment",
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
			"Programming & Tools: Python, Spark, Numpy, Pandas, Seaborn, Matplotlib \n Modeling: ARIMA and K- means model",
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
	{
		title: "Stock Prices and Market Index Prediction",
		imageSrc: "",
		body: `This project builds a deep learning time series model (LSTM) to predict the price of 
        stocks on TensorFlow. The time series data is segmented into different length of sequences and 
        standardized the prices. The LSTM model parameters including activations function, learning rate, 
        and drop-out rate are tuned via TensorFlow on GPU. The resulting model is tested on the stock 
        of American Airlines (AAL) and reached the best performance with a MSE of 0.002`,
		toolsUsed:
			"Programming & Tools: Python, Spark, Numpy, Pandas, Seaborn, Matplotlib \n Modeling: ARIMA and K- means model",
		url: "",
		repo: "https://github.com/wghong02/stock_lstm",
	},
];
