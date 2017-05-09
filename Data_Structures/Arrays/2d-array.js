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

function hourglass(arr, x, y) {
    var result = arr[x + 1][y + 1];
    for(c0 = 0; c0 <=2; c0++) {
        result += arr[x][y + c0];
        result += arr[x + 2][y + c0];
    }
    return result;
}

function main() {
    var arrDim = [6, 6]
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    var result;
    for(c1 = 0; c1 < arrDim[0] - 2; c1++) {
        for(c2 = 0; c2 < arrDim[1] - 2; c2++) {
            let hg = hourglass(arr, c1, c2);
            if((typeof result == 'undefined') || result < hg) result = hg;
        }
    }
    console.log(result);
}
