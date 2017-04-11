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

function Node() {
  this.edgeList = [];
  this.visited = false;
}

function dfs(array, idx) {
  array[idx].visited = true
  var count = 1;
  array[idx].edgeList.forEach(function(cur) {
    if(!array[cur - 1].visited) {
      count += dfs(array, cur - 1);
    }
  });
  return count;
}

function lastNotVisited(array) {
  for(i = 0; i < array.length; i++) {
    if(!array[i].visited) {
      return i;
    }
  }
  return array.length;
}

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
      var nodeArray = [];
      for(var citNum = 0; citNum < n; citNum++) {
        nodeArray.push(new Node());
      }
      for(var a1 = 0; a1 < m; a1++){
        var city_1_temp = readLine().split(' ');
        var city_1 = parseInt(city_1_temp[0]);
        var city_2 = parseInt(city_1_temp[1]);
        // console.log(city_1, city_2, a0, a1, n, m);
        nodeArray[city_1 - 1].edgeList.push(city_2);
        nodeArray[city_2 - 1].edgeList.push(city_1);
      }
      var curNode = 0;
      var cost = 0
      while(curNode < n) {
        var roads = dfs(nodeArray, curNode) - 1;
        cost += x + (roads * y);
        console.log(cost);
        curNode = lastNotVisited(nodeArray);
      }
    }
  }
}
