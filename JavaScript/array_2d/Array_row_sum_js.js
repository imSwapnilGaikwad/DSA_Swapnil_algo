module.exports = { 
    //param A : array of array of integers
    //return a array of integers
       solve : function(A){
           let ans = [];
           let n = A.length;
           let m = A[0].length;
           
           for(let i = 0; i < n; i++) {
               let row_sum = 0;
               // Finding sum of elements of ith row
               for(let j = 0; j <m; j++)
                   row_sum += A[i][j];
               ans.push(row_sum);
           }
           return ans;
       }
   };