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

function swap(array, idx1, idx2) {
  var temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var numSwaps = 0;
    for(var i = 0; i < n; i++) {
        var swapCount = 0;
        for(j = 0; j < n - 1; j++) {
            if(a[j] > a[j + 1]) {
                swap(a, j, j + 1);
                swapCount++;
            }
        }
        if(swapCount === 0) {
            break;
        } else {
            numSwaps += swapCount;
        }
    }
    console.log('Array is sorted in ' + numSwaps + ' swaps.');
    console.log('First Element: ' + a[0]);
    console.log('Last Element: ' + a[n - 1]);
}
