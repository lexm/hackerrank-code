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
}

var InputArray(input) {
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
