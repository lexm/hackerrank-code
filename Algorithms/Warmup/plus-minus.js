process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var len = arr.length;
    var res = arr.reduce(function(acc, cur) {
        if(cur > 0) {acc[0] += 1}
        else if (cur < 0) {acc[1] += 1}
        else {acc[2] += 1};
        return acc;
    }, [0, 0, 0]);
    res.forEach(function(cur) {
        console.log(cur / len)
    })
}
