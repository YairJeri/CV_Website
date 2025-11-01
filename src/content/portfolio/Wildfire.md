---
title: "Wildfire Detection"
description: "A Python-based pipeline that detects wildfire-prone areas from satellite imagery using classical image processing — no machine learning involved."
image: "Wildfire.webp"
github: "https://github.com/YairJeri/WildFireDetection"
tags: ["Python", "OpenCV", "Image Processing"]
---

A fully handcrafted image processing pipeline built with **OpenCV** and **NumPy**, designed to identify wildfire-prone zones from satellite images.

The approach applies fundamental computer vision techniques — including color space transformations (HSV), texture detection via Laplacian filters, vegetation analysis using the **Green Leaf Index (GLI)**, and contour filtering — to classify areas at risk of wildfires **without using machine learning or neural networks**.

This project demonstrates how traditional image processing methods can still achieve meaningful and interpretable results for environmental analysis.

Key highlights:
- Uses **HSV color space** for vegetation segmentation  
- Implements **contrast enhancement** and **texture-based filtering**  
- Computes **GLI** to isolate green regions  
- Applies **morphological and contour-based criteria** for final classification  
- Outputs processed masks and prediction visualizations
