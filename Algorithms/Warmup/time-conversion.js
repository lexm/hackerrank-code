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
    var result;
    var time = readLine();
    if (time.slice(8) === 'AM') {
        if (time.slice(0, 2) !== '12') {
            result = time.slice(0, 8);
        } else {
            result = '00' + time.slice(2, 8);
        }
    } else {
        if (time.slice(0, 2) === '12') {
            result = time.slice(0, 8);
        } else {
            hrs = parseInt(time.slice(0, 2)) + 12;
            result = hrs + time.slice(2, 8);
        }
    }
    console.log(result);
}
