function isRowsame(matrix1,matrix2){

    if(matrix1.length != matrix2.length){
        return false;
    }
    return true;
}
function isColumeSame(matrix1,matrix2){

    if(!matrix1.length || ! matrix2.length){
        return false;
    }
    for(let i = 0; i < Math.max(matrix1.length,matrix2.length);i++){
        if(matrix1[i]?.length != matrix2[i].length){
            return false;
        }
    }
    return true;
}
function isSquareMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        if(matrix.length != matrix[i].length){
            return false;
        }
    }
    return true;
}

module.exports = {
    isRowsame,isColumeSame,isSquareMatrix
}