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
    var alphString = 'abcdefghijklmnopqrstuvwxyz'
    var resultArray = [];
    for(i = 0; i < alphString.length; i++) {
        resultArray.push(0);
    }
    var a = readLine();
    var b = readLine();
    a.split('').forEach(function(char) {
        resultArray[alphString.indexOf(char)]++;
    });
    b.split('').forEach(function(char) {
        resultArray[alphString.indexOf(char)]--;
    });
    var result = resultArray.reduce(function(acc, cur) {
        return acc + Math.abs(cur);
    }, 0);
    console.log(result);
}
