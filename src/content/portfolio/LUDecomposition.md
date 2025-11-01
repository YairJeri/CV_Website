---
title: "LU Decomposition"
description: "Interactive web app for performing LU and Cholesky decompositions on square matrices, helping users visualize and understand matrix factorization."
image: "LUDecomposition.png"
github: "https://github.com/YairJeri/AlgebraLineal.git"
url: "https://algebra-lineal-ebon.vercel.app/"
tags: ["Web Development"]
---

**LU Decomposition** is a web application that allows users to input square matrices (n × n) and automatically decomposes them using the most appropriate method:

- **Cholesky Decomposition**: for symmetric positive-definite matrices  
- **Simple LU Decomposition**: when possible  
- **LU with Row Permutation**: for general matrices  

The app is built with **HTML, CSS, and JavaScript**, supporting matrices of variable size (n from 4 to 10) and providing an interactive interface for visualization.  

### Key Features
- Dynamic matrix size input (4 ≤ n ≤ 10)  
- Auto-generated editable symmetric matrices for testing  
- Automatic selection of the decomposition method  
- Clear visualization of resulting matrices (L, U, and P if applicable)  
- Simple and responsive interface suitable for learning linear algebra concepts  