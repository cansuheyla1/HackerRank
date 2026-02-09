

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length; 
    let sum1 = 0;
    let sum2 = 0;
    for (let i=0; i<n; i++) {
        sum1 += arr[i][i];
    }
    for (let i=n-1, j=0; i>=0, j<n; i--, j++) {
        sum2 += arr[j][i];
    }
    return Math.abs(sum1-sum2);
}

