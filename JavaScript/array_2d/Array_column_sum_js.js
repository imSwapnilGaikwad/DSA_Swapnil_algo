module.exports = { 
    //param A : array of array of integers
    //return a array of integers
       solve : function(A){
           
           let ans = [];
           let n = A.length; 
           let m = A[0].length;
           for(let j = 0; j < m; j++) {
               let sum = 0;
               
               for(let i = 0; i < n; i++)
                   sum += A[i][j];
               ans.push(sum);
           }
           return ans;
       }
   };