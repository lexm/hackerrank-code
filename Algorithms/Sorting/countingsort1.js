function processData(input) {
    input = input.split('\n');
    var n = parseInt(input[0]);
    var ar = input[1].split(' ').map(Number);
    var countArr = [];
    for(a0 = 0; a0 < 100; a0++) {
        countArr.push(0);
    }
    ar.forEach(function(cur) {
        countArr[cur]++;
    })
    console.log(countArr.join(' '));
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
