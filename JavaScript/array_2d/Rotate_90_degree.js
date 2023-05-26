
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

function rotateMatrix(matrix){
    const n = matrix.length;
    for(var i =0; i<n;i++){
        for(var j=i+1;j<n;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]] 
        }
    }

    for(let i=0;i<n;i++){
        let start = 0;
        let end = n-1;
        while(start < end){
            [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]];
            start++;
            end--; 
        }
    }
    console.log(matrix);
}

rotateMatrix(matrix)
