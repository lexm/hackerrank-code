function processData(input) {
    input = input.split('\n');
    var [n, q] = input[0].split(' ').map(Number);
    var size = n;
    var array = [];
    while(size--) array[size] = [];
    var lastAns = 0;
    for(c0 = 1; c0 <= q; c0++) {
        let lineArr = input[c0].split(' ').map(Number);
        if(lineArr[0] == 1) {
            let x = lineArr[1];
            let y = lineArr[2];
            let seq = (x ^ lastAns) % n;
            array[seq].push(y);
        } else if(lineArr[0] == 2) {
            let x = lineArr[1];
            let y = lineArr[2];
            let seq = (x ^ lastAns) % n;
            size = array[seq].length;
            lastAns = array[seq][y % size];
            console.log(lastAns);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
