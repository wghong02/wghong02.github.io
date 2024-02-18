---
layout: page
title: Project
permalink: /project/
---

# Welcome to my projects! Here are some projects I have worked on:

**San Francisco Crime Analysis in Apache Spark**

This projects uses San Francisco Crime data from 2003 to present to study and model crimes in the area, using big data OLAP techniques with Spark, to discover possible interesting trends as well as developing possible models for the number of crimes in the area. During the process, a data processing pipeline is set up using Spark RDD, a K-means model and a time series model are established attempting to understand the number of crimes in the area in terms of geographical relationships and relationships in time.

[Project Repo](https://github.com/wghong02/SF-crime-analysis)

**Automatic Liver Tumor CT Scan Segmentation**

This project adopts the UNet++ and transUNet model and improves the existing architecture, by leveraging an addition of Atrious Spatial Pyramid Pooling (ASPP) model at the end going through the output and integrating spatial channels attention blocks within the decoder for these two models, respectively. The model results are tested using a combined loss of Cross Entropy and Dice loss. The result shows improvement using the improved architecture.

[Project Repo](https://github.com/wghong02/Image_Segmentation) 

[Report](/assets/ATLS_Report.pdf)

**Semantic Analysis for Youtube user Comments**

This project uses a Spark-based machine learning algorithm to categorize users according to their YouTube video comments. The dataset is processed users comments via RegexTokenizer and Word2Vec in SparkML. The adopted Logistic Regression and Random Forest models are tuned via k-fold cross-validation. TF-IDF methodology is applied for feature extraction and implemented an unsupervised Latent Dirichlet Allocation (LDA) model to identify the top 5 topics among the target user group.

[Project Repo](https://github.com/wghong02/YouTube-comment)

**Stock Prices and Market Index Prediction**

This project builds a deep learning time series model (LSTM) to predict the price of stocks on TensorFlow. The time series data is segmented into different length of sequences and standardized the prices. The LSTM model parameters including activations function, learning rate, and drop-out rate are tuned via TensorFlow on GPU. The resulting model is tested on the stock of American Airlines (AAL) and reached the best performance with a MSE of 0.002

[Project Repo](https://github.com/wghong02/stock_lstm)

