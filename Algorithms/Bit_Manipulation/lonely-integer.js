function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var n = parseInt(input[0]);
    var array = input[1].split(' ').map(Number);
    var result = array.reduce(function(acc, cur) {
        return acc ^ cur;
    });
    console.log(result);
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
