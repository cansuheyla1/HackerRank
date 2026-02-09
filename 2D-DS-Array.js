


/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let h_arr = [];
    let sum = 0;
    
    for (let row=0; row<4; row++) {
        h_arr[row] = []
        for (let i=0; i<4; i++) {
            sum += arr[row][i] + arr[row][i+1] + arr[row][i+2] + arr[row+1][i+1] +
                    arr[row+2][i] + arr[row+2][i+1] + arr[row+2][i+2];
            h_arr[row].push(sum);
            sum = 0;
        }
    }
    
    let max = -Infinity;
    h_arr.forEach(row => {
        row.forEach(value => {
            if (value > max) { max = value; }
        })
    })
    return max;
}

