var Node = function() {
  this.edgeList = [];
  this.visited = false;
  this.addToEdgeList = function(num) {
    this.edgeList.push(num);
  }
}

var NodeArray = function(length) {
  this.array = [];
  this.visitedPointer = 0;
  for(b0 = 0; b0 < length; b0++) {
    this.array.push(new Node());
  }

  this.addEdge = function(nodeNum1, nodeNum2) {
    this.array[nodeNum1].addToEdgeList(nodeNum2);
    this.array[nodeNum2].addToEdgeList(nodeNum1);
  }

  this.advancePointer = function() {
    var b1 = this.visitedPointer;
    while(b1 < this.array.length && this.array[b1].visited) {
      b1++;
    }
    this.visitedPointer = b1;
  }

  this.dfs = function(index) {
    this.array[index].visited = true;
    var storeThis = this;
    var count = 1;
    this.array[index].edgeList.forEach(function(cur) {
      if(!storeThis.array[cur].visited) {
        count += storeThis.dfs(cur);
      }
    });
    return count;
  }
}

var InputArray = function(input) {
  var currentLine = 0;
  var lines = input.split('\n');
  this.readLine = function() {
    if(currentLine < lines.length) {
      return lines[currentLine++];
    } else {
      return null;
    }
  }
}

function processData(input) {
    var inputArray = new InputArray(input);
    var n, p, a, b;
    [n, p] = inputArray.readLine().split(' ').map(Number);
    var nodeArray = new NodeArray(n);
    for(a0 = 0; a0 < p; a0++) {
        [a, b] = inputArray.readLine().split(' ').map(Number);
        nodeArray.addEdge(a, b);
    }
    var nations = [];
    while(nodeArray.visitedPointer < n) {
      nations.push(nodeArray.dfs(nodeArray.visitedPointer));
      nodeArray.advancePointer();
    }
    var result = 0;
    while(nations.length) {
        var lastPop = nations.pop();
        result += nations.reduce(function(acc, cur) {
            return acc + cur * lastPop;
        }, 0);

    }
    console.log(result);
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
