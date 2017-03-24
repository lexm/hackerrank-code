function processData(input) {
    input = input.split('\n');
    var size = parseInt(input[0]);
    var arr = input[1].split(' ').map(function(cur) {return parseInt(cur);});
    console.log('size:', size);
    console.log('arr: ', arr);
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
