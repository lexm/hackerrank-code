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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    var magObj = {};
    magazine = readLine().split(' ');
    magazine.forEach(function(cur) {
        if(!magObj.hasOwnProperty(cur)) {
            magObj[cur] = 1;
        } else {
            magObj[cur]++;
        }
    });
    ransom = readLine().split(' ');
    var resultBool = ransom.reduce(function(acc, cur) {
        if(!magObj.hasOwnProperty(cur) || magObj[cur] <= 0) {
            return false;
        } else {
            magObj[cur]--;
            return acc;
        }
    }, true);
    if(resultBool) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
