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
function leftRotate(array, length, rotations) {
    var newArray = [];
    array.forEach(function(cur, idx, arr) {
        newArray[(idx - rotations + length) % length] = cur;
    });
    return newArray;
}

function printArray(array, length) {
    var result = '';
    array.forEach(function(cur, idx) {
        result += cur;
        if(idx + 1 < length) {
            result += ' ';
        }
    });
    console.log(result);
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    printArray(leftRotate(a, n, k), n);
}
