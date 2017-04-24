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
    var result = "";
    countArr.forEach(function(cur, idx) {
        for(a1 = 0; a1 < cur; a1++) {
            result += idx + ' ';
        }
    })
    console.log(result.slice(0, -1));
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
