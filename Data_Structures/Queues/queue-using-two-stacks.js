const Queue = function() {
    var stack1 = [];
    var stack2 = [];
    this.enqueue = function(value) {
        while(stack1.length) stack2.push(stack1.pop());
        stack2.push(value);
    }
    this.dequeue = function() {
        while(stack2.length) stack1.push(stack2.pop());
        return stack1.pop();
    }
    this.printNext = function() {
        while(stack2.length) stack1.push(stack2.pop());
        console.log(stack1[stack1.length - 1]);
    }
}

function processData(input) {
    input = input.split('\n').map(function(cur) {
        return cur.split(' ').map(Number);
    });
    var queue = new Queue();
    var [q] = input.shift();
    while(input.length) {
        var [type, x] = input.shift();
        if(type === 1) queue.enqueue(x);
        else if(type === 2) queue.dequeue();
        else if(type === 3) queue.printNext();
    }
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
