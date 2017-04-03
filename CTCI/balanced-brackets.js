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
function isBalanced(expression) {
    expression = expression.split('');
    var stack = [];
    for(i = 0; i < expression.length; i++) {
        var lastItem = stack.slice(-1)[0];
        switch(expression[i]) {
            case '{':
            case '(':
            case '[':
                stack.push(expression[i]);
                break;
            case '}':
                if(lastItem === '{') {
                    stack.pop();
                    break;
                }
            case ')':
                if(lastItem === '(') {
                    stack.pop();
                    break;
                }
            case ']':
                if(lastItem === '[') {
                    stack.pop();
                    break;
                }
            default:
                return false;
        }
    }
    return !stack.length;
}


function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var expression = readLine();
        if(isBalanced(expression)) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}
