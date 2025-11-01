---
title: "Predicción de fuegos"
description: "Una cadena de procesamiento de imágenes basada en Python que detecta áreas de fuegos en imágenes de satélite utilizando procesamiento de imágenes clásico - no implica aprendizaje automático."
image: "../assets/Wildfire.webp"
github: "https://github.com/YairJeri/WildFireDetection"
tags: ["Python", "OpenCV", "Image Processing"]
lang: "es"
---

Una cadena de procesamiento de imágenes completamente hecha a mano construida con **OpenCV** y **NumPy**, diseñada para identificar zonas de fuegos en imágenes de satélite.

La aproximación aplica técnicas de visión por computador basadas en la **transformación del espacio de color (HSV)**, detección de texturas a través de filtros Laplacian, análisis de vegetación utilizando el **Índice de hoja verde (GLI)** y filtrado de contornos - para clasificar áreas en riesgo de fuegos **sin utilizar aprendizaje automático o redes neuronales**.

Este proyecto demuestra cómo los métodos de procesamiento de imágenes tradicionales aún pueden lograr resultados significativos y interpretables para análisis ambiental.

Características clave:
- Utiliza **transformación del espacio de color (HSV)** para el análisis de vegetación
- Implementa **filtrado de contornos** y **filtrado de texturas** para mejorar la clasificación
- Calcula el Índice de hoja verde (GLI) para delimitar áreas verdes
- Aplica **transformación de matrices lineales y filtrado de contornos** para final de clasificación
- Salida procesadas y predicciones de visualización
