function processData(input) {
    input = input.split('\n').map(function(cur) {
        return cur.split(' ').map(Number);
    })
    var n = input[0][0];
    var stack = [];
    var max;
    for(c0 = 1; c0 < input.length; c0++) {
        var query = input[c0][0];
        if(query == 1) {
            var newVal = input[c0][1];
            if(!max || newVal > max) max = newVal;
            stack.push(newVal);
        } else if(query == 2) {
            var topVal = stack.pop();
            if(!stack.length) {
                max = null;
            } else if(topVal == max) {
                max = stack.reduce(function(acc, cur) {
                    if(acc < cur) return cur;
                    return acc;
                });
            }
        } else if(query == 3) {
            console.log(max);
        }
    }
    //Enter your code here
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
