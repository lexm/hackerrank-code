function processData(input) {
    //Enter your code here
    input = input.split('\n').map(function(cur) {
        return cur.split(' ').map(Number);
    });
    var [n, d] = input[0];
    var arr = input[1];
    var result = arr.slice(d).concat(arr.slice(0, d))
    console.log(result.join(' '));
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
