const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  function printDialognals(matrix){
      var n = matrix.length;
      for(var i= 0; i<n; i++){
          console.log(matrix[i][i])
      }
  
      for(var j=0; j<n;j++){
          console.log(matrix[i][n - 1- i])
      }
  }