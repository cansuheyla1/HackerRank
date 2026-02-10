
function processData(input) {
    //Enter your code here
    const lines = input.trim().split("\n");
    let s = "";
    let arr = [];
    for (let i=0; i<lines.length; i++) {
        let parts = lines[i].trim().split(" ");
        
        if (parts[0] == 1) {
            arr.push(s);
            s += parts[1];
        }
        else if (parts[0] == 2) {
            arr.push(s);
            let k = Number(parts[1]);
            s = s.slice(0,s.length-k);
        }
        else if (parts[0] == 3) {
            let k = parts[1]
            let kth = s.at(k-1);
;           console.log(kth);
        }
        else if (parts[0] == 4) {
            s = arr.pop();
        }
    }
} 