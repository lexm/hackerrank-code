function printArray(arr) {
    var len = arr.length;
    var out = '';
    for(i = 0; i < len; i++) {
        out += arr[i];
        if(i < len - 1) {
            out += ' ';
        }
    }
    console.log(out);
}

function processData(input) {
    input = input.split('\n');
    var size = parseInt(input[0]);
    var arr = input[1].split(' ').map(function(cur) {return parseInt(cur);});
    var idx = arr.length - 1
    var newNum = arr[idx];
    while(arr[idx - 1] > newNum) {
        arr[idx] = arr[idx - 1];
        idx = idx - 1;
        printArray(arr);
    }
    arr[idx] = newNum;
    printArray(arr);
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
