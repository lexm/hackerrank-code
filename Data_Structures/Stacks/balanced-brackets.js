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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var s = readLine();
        var stack = [];
        var balanced = true;
        for(a1 = 0; a1 < s.length; a1++) {
            let nextChar = s[a1];
            if(nextChar === '{' || nextChar === '(' || nextChar === '[') {
                stack.push(nextChar);
            } else if(nextChar === '}') {
                if(stack.pop() !== '{') {
                    balanced = false;
                    break;
                }
            } else if(nextChar === ')') {
                if(stack.pop() !== '(') {
                    balanced = false;
                    break;
                }
            } else if(nextChar === ']') {
                if(stack.pop() !== '[') {
                    balanced = false;
                    break;
                }
            }
        }
        balanced ? console.log('YES') : console.log('NO');
    }
}
