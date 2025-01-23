const readlinesync = require("readline-sync");
const { isRowsame, isColumeSame, isSquareMatrix } = require("./help.js");

function inputMatrix() {
  const rows = readlinesync.questionInt("Enter the Number of rows: ");
  const columns = readlinesync.questionInt("Enter the Number of columns: ");

  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = readlinesync.questionInt(
        `Enter the value for index ${i}${j}: `
      );
    }
  }
  console.log("Matrix: ", matrix);
  return matrix;
}

function Addition() {
  let matrix1 = inputMatrix();
  let matrix2 = inputMatrix();

  if (!isRowsame(matrix1, matrix2) || !isColumeSame(matrix1, matrix2)) {
    console.log("Matrices dimensions do not match! Try again.");
    return;
  }

  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }

  console.log("Matrix 1: ", matrix1);
  console.log("Matrix 2: ", matrix2);
  console.log("Resulted Matrix: ", result);
}

function subtration() {
  let matrix1 = inputMatrix();
  let matrix2 = inputMatrix();

  if (!isRowsame(matrix1, matrix2) || !isColumeSame(matrix1, matrix2)) {
    console.log("Matrices dimensions do not match! Try again.");
    return;
  }

  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      result[i][j] = matrix1[i][j] - matrix2[i][j];
    }
  }

  console.log("Matrix 1: ", matrix1);
  console.log("Matrix 2: ", matrix2);
  console.log("Resulted Matrix: ", result);
}

function Multiplication() {
  let matrix1 = inputMatrix();
  let matrix2 = inputMatrix();

  if (!isRowsame(matrix1, matrix2) || !isColumeSame(matrix1, matrix2)) {
    console.log("Matrices dimensions do not match! Try again.");
    return;
  }

  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      result[i][j] = matrix1[i][j] * matrix2[i][j];
    }
  }

  console.log("Matrix 1: ", matrix1);
  console.log("Matrix 2: ", matrix2);
  console.log("Resulted Matrix: ", result);
}

function diagonal() {
  let matrix = inputMatrix();

  if (!isSquareMatrix(matrix)) {
    console.log("The matrix is not a square matrix!");
    return;
  }

  const diagonalElement = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i !== j && matrix[i][j] !== 0) {
        console.log(
          "Matrix is not diagonal as non-diagonal elements are not zero."
        );
        return;
      }
      if (i === j) {
        diagonalElement.push(matrix[i][j]);
      }
    }
  }

  console.log("Matrix: ", matrix);
  console.log("Diagonal Elements are: ", diagonalElement);
}

function trace() {
  const matrix = inputMatrix();

  if (!isSquareMatrix(matrix)) {
    console.log("The matrix is not a square matrix! Please try again.");
    return;
  }

  let Traceof = 0;
  for (let i = 0; i < matrix.length; i++) {
    Traceof += matrix[i][i];
  }

  console.log("Matrix: ", matrix);
  console.log("Trace of the Matrix: ", Traceof);
}

module.exports = { Addition, subtration, Multiplication, diagonal, trace };
