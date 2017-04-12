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

var Node = function() {
  this.edgeList = [];
  this.visited = false;
  this.addToEdgeList = function(cit) {
    this.edgeList.push(cit)
  }
}

var NodeArray = function(num) {
  this.array = [];
  this.visitedPointer = 0;
  for(b0 = 0; b0 < num; b0++) {
    this.array.push(new Node());
  }

  this.addEdge = function(cit1, cit2) {
    this.array[cit1 - 1].addToEdgeList(cit2);
    this.array[cit2 - 1].addToEdgeList(cit1);
  }

  this.advancePointer = function() {
    var b1 = this.visitedPointer;
    while(b1 < this.array.length && this.array[b1].visited) {
      // console.log('b1: ', b1, this.array[b1].visited, this.array.length);
      b1++;
    }
    this.visitedPointer = b1;
  }

  this.dfs = function(idx) {
    this.array[idx].visited = true;
    storeThis = this;
    var count = 1;
    this.array[idx].edgeList.forEach(function(cur, idx, arr) {
      if(!storeThis.array[cur - 1].visited) {
        count += storeThis.dfs(cur - 1);
      }
    });
    return count;
  }
}

// function dfs(array, idx) {
//   array[idx].visited = true
//   var count = 1;
//   array[idx].edgeList.forEach(function(cur) {
//     if(!array[cur - 1].visited) {
//       count += dfs(array, cur - 1);
//     }
//   });
//   return count;
// }
//
// function lastNotVisited(array) {
//   for(i = 0; i < array.length; i++) {
//     if(!array[i].visited) {
//       return i;
//     }
//   }
//   return array.length;
// }

function main() {
  var q = parseInt(readLine());
  for(var a0 = 0; a0 < q; a0++){
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var x = parseInt(n_temp[2]);
    var y = parseInt(n_temp[3]);
    if(x <= y) {
      console.log(n * x);
      for(var a1 = 0; a1 < m; a1++) {
        readLine();
      }
    } else {
      var nodeArray = new NodeArray(n);
      for(var a1 = 0; a1 < m; a1++){
        var city_1_temp = readLine().split(' ');
        var city_1 = parseInt(city_1_temp[0]);
        var city_2 = parseInt(city_1_temp[1]);
        // console.log(city_1, city_2, a0, a1, n, m);
        // nodeArray[city_1 - 1].edgeList.push(city_2);
        // nodeArray[city_2 - 1].edgeList.push(city_1);
        nodeArray.addEdge(city_1, city_2);
      }
      var cost = 0;
      // console.log(nodeArray.array);
      while(nodeArray.visitedPointer < n) {
        var roads = nodeArray.dfs(nodeArray.visitedPointer) - 1;
        cost += x + (roads * y);
        console.log(cost, roads, x, y);
        nodeArray.advancePointer();
      }
    }
  }
}
