function processData(input) {
    input = input.split('\n');
    var v = input[0];
    var n = input[1];
    var ar = input[2].split(' ');
    ar.forEach(function(cur, idx) {
        if(v === cur) {
            console.log(idx);
            return;
        }
    })
    //Enter your code here
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
