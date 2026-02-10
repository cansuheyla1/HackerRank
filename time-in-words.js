
/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    // Write your code here
    let s = '';
    let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen",
    "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", 
    "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "half"];
    
    if (m==0) s += words[h] + " o' clock";
    else if (m==15) s += 'quarter past ' + words[h];
    else if (m==30) s += 'half past ' + words[h];
    else if (m==45) s += 'quarter to ' + words[h+1];
    else if (m==1) s += 'one minute past ' + words[h];
    else if (m<30) s += words[m] + ' minutes past ' + words[h];
    else if (m>30) s += words[60-m] + ' minutes to ' + words[h+1];
    else if (m==59) s += 'one minute to ' + words[h+1];
    return s;
}