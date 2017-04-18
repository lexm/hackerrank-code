const Heap = function() {
  this.heapData = [];
}

Heap.prototype.moveUp = function(idx) {
  var element = this.heapData[idx];
  while(idx > 0) {
    var parentIdx = Math.floor((idx + 1) / 2) - 1;
    var parent = this.heapData[parentIdx];
    if(element >= parent) break;
    this.heapData[parentIdx] = element;
    this.heapData[idx] = parent;
    idx = parentIdx;
  }
}

Heap.prototype.moveDown = function(idx) {
  var length = this.heapData.length;
  var element = this.heapData[idx];
  while(true) {
    child1Idx = (idx + 1) * 2;
    child2Idx = child1Idx - 1;
    var newPosition = null;
    if(child1Idx < length) {
      var child1 = this.heapData[child1Idx];
      if(child1 < element) {
        newPosition = child1Idx;
      }
    }
    if(child2Idx < length) {
      var child2 = this.heapData[child2Idx];
      if(child2 < (newPosition == null ? element : child1)) {
        newPosition = child2Idx;
      }
    }
    if(newPosition == null) break;
    this.heapData[idx] = this.heapData[newPosition];
    this.heapData[newPosition] = element;
    idx = newPosition;
  }
}

Heap.prototype.addVal = function(value) {
  this.heapData.push(value);
  this.moveUp(this.heapData.length - 1);
}

Heap.prototype.pop = function() {
  var result = this.heapData[0];
  var lastVal = this.heapData.pop();
  if(this.heapData.length) {
    this.heapData[0] = lastVal;
    this.moveDown(0);
  }
  return result;
}

Heap.prototype.minimum = function() {
  return this.heapData[0];
}

Heap.prototype.length = function() {
  return this.heapData.length;
}

function processData(input) {
    input = input.split('\n').map(function(cur) {
        return cur.split(' ');
    });
    var n = parseInt(input[0][0]);
    var k = parseInt(input[0][1]);
    var a = input[1].map(Number);
    var heap = new Heap();
    while(a.length) {
      var element = a.pop();
      heap.addVal(element);
    }
    var result = 0;
    while(heap.length() > 1 && heap.minimum() < k) {
      result++;
      var least1 = heap.pop();
      var least2 = heap.pop();
      heap.addVal(least1 + 2 * least2);
    }
    if(heap.length() === 1 && heap.minimum() < k) {
        result = -1
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
