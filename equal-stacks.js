

/*
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */

function equalStacks(h1, h2, h3) {
    // Write your code here
    let n1 = h1.length;
    let n2 = h2.length;
    let n3 = h3.length;
    let sum = [0,0,0];
    for (let i=0; i<n1; i++) sum[0] += h1[i];
    for (let i=0; i<n2; i++) sum[1] += h2[i];
    for (let i=0; i<n3; i++) sum[2] += h3[i];
    let e = isEqual(sum[0], sum[1], sum[2]);
    while (!e) {
        let max = Math.max(sum[0], sum[1], sum[2]);
        let decrease = [];
        if (sum[0]==max) {
            decrease = h1.splice(0,1);
            sum[0] -= decrease[0];
        }
        else if (sum[1]==max) {
            decrease = h2.splice(0,1);
            sum[1] -= decrease[0];
        }
        else if (sum[2]==max) {
            decrease = h3.splice(0,1);
            sum[2] -= decrease[0];
        }
        e = isEqual(sum[0], sum[1], sum[2]);
    }
    return sum[0];
}
function isEqual(s1, s2, s3) {
 if (s1!=s2 || s1!=s3 || s2!=s3) return false;
 else return true;
} 

