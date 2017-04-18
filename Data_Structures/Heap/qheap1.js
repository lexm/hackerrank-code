const Heap = function() {
  this.mainData = [];

  this.addVal = function(value) {
    this.mainData.push(value);
    this.moveUp(this.mainData.length - 1);
  }

  this.moveUp = function(idx) {
    var ele = this.mainData[idx];
    while(idx > 0) {
      var parentIdx = Math.floor((idx + 1) / 2) - 1;
      var parent = this.mainData[parentIdx];
      if(ele >= parent) break;
      this.mainData[parentIdx] = ele;
      this.mainData[idx] = parent;
      idx = parentIdx;
    }
  }

  this.moveDown = function(idx) {
      var length = this.mainData.length;
      var ele = this.mainData[idx];
      while(true) {
          child1Idx = (idx + 1) * 2;
          child2Idx = child1Idx - 1;
          var newPos = null;
          if(child1Idx < length) {
              var child1 = this.mainData[child1Idx];
              if(child1 < ele) {
                  newPos = child1Idx;
              }
          }
          if(child2Idx < length) {
              var child2 = this.mainData[child2Idx];
              if(child2 < (newPos == null ? ele : child1)) {
                  newPos = child2Idx;
              }
          }
          if(newPos == null) break;
          this.mainData[idx] = this.mainData[newPos];
          this.mainData[newPos] = ele;
          idx = newPos;
      }
  }

  this.minimum = function() {
    return this.mainData[0];
  }

  this.removeVal = function(value) {
      var length = this.mainData.length;
      for(var ctr = 0; ctr < length; ctr++) {
          if(this.mainData[ctr] === value) {
              var last = this.mainData.pop();
              if(ctr === length - 1) break;
              this.mainData[ctr] = last;
              this.moveUp(ctr);
              this.moveDown(ctr);
          }
      }
  }
}

function processData(input) {
  var heap = new Heap();
  input = input.split('\n');
  var q = parseInt(input[0]);
  for(ctr0 = 1; ctr0 <= q; ctr0++) {
    var line = input[ctr0].split(' ').map(Number);
    if(line[0] === 1) {
      heap.addVal(line[1]);
    } else if (line[0] === 2) {
      heap.removeVal(line[1]);
    } else if (line[0] === 3) {
      console.log(heap.minimum());
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
