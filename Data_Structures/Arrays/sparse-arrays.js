function processData(input) {
    //Enter your code here
    var input = input.split('\n');
    var n = parseInt(input[0]);
    var strArray = input.slice(1, n + 1);
    var q = parseInt(input[n + 1]);
    var qryArray = input.slice(n + 2);
    qryArray.forEach(function(cur) {
        var result = 0;
        var idx = strArray.indexOf(cur);
        while(idx != -1) {
            result ++;
            idx = strArray.indexOf(cur, idx + 1);
        }
        console.log(result);
    })
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
