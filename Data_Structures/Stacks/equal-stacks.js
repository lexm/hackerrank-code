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
    var n1_temp = readLine().split(' ');
    var n1 = parseInt(n1_temp[0]);
    var n2 = parseInt(n1_temp[1]);
    var n3 = parseInt(n1_temp[2]);
    h1 = readLine().split(' ');
    h1 = h1.map(Number);
    h2 = readLine().split(' ');
    h2 = h2.map(Number);
    h3 = readLine().split(' ');
    h3 = h3.map(Number);
    var valMap = {};
    var total1 = 0;
    while(h1.length) {
        total1 += h1.pop();
        if(valMap.hasOwnProperty(total1)) valMap[total1]++;
        else valMap[total1] = 1;
    }
    var total2 = 0;
    while(h2.length) {
        total2 += h2.pop();
        if(valMap.hasOwnProperty(total2)) valMap[total2]++;
        else valMap[total2] = 1;
    }
    var total3 = 0;
    while(h3.length) {
        total3 += h3.pop();
        if(valMap.hasOwnProperty(total3)) valMap[total3]++;
        else valMap[total3] = 1;
    }
    var keyArr = Object.keys(valMap);
    var result = 0
    while(keyArr.length) {
        var curKey = keyArr.pop();
        if(valMap[curKey] === 3) {
            result = curKey;
            break;
        }
    }
    console.log(result);
}
