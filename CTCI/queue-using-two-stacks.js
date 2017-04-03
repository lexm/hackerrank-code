var Queue = function() {
    this.queue = [];
    this.enqueue = function(newItem) {
        var tempStack = [];
        while(this.queue.length) {
            tempStack.push(this.queue.pop());
        }
        tempStack.push(newItem);
        while(tempStack.length) {
            this.queue.push(tempStack.pop());
        }
    }
    this.dequeue = function() {
        return this.queue.pop()
    }
    this.printHead = function() {
        console.log(this.queue.slice(-1)[0]);
    }
}

function processData(input) {
    input = input.split('\n');
    var newQueue = new Queue();
    var q = parseInt(input[0]);
    for (i = 0; i < q; i++) {
        var qType = input[i + 1][0];
        switch(qType) {
            case '1':
                newQueue.enqueue(parseInt(input[i + 1].slice(2)));
                break;
            case '2':
                newQueue.dequeue();
                break;
            case '3':
                newQueue.printHead();
                break;
            default:
                console.error('invalid input');
        }
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
