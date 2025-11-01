---
title: "Decomposición LU"
description: "Aplicación web interactiva para realizar operaciones LU y Cholesky en matrices cuadradas, ayudando a los usuarios visualizar y entender la factorización de matrices."
image: "../assets/LUDecomposition.png"
github: "https://github.com/YairJeri/AlgebraLineal.git"
url: "https://algebra-lineal-ebon.vercel.app/"
tags: ["Desarrollo Web"]
lang: "es"
---

**Decomposición LU** es una aplicación web que permite a los usuarios ingresar matrices cuadradas (n × n) y descomponerlas automáticamente utilizando la método más apropiado:

- **Descomposición Cholesky**: para matrices simétricas definidas positivamente
- **Descomposición LU simple**: cuando sea posible
- **Descomposición LU con permutación de filas**: para matrices generales

La aplicación está construida con **HTML, CSS y JavaScript**, soportando matrices de tamaño variable (n de 4 a 10) y proporcionando una interfaz interactiva para la visualización.

### Características clave
- Entrada dinámica del tamaño de matriz (4 ≤ n ≤ 10)
- Matrices simétricas editables generadas automáticamente para pruebas
- Selección automática del método de descomposición
- Visualización clara de las matrices resultantes (L, U y P si corresponde)
- Interfaz simple y responsiva adecuada para aprender conceptos de álgebra lineal
