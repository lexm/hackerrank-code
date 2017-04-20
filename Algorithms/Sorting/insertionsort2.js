function printArray(arr) {
    var len = arr.length;
    var out = '';
    for(i = 0; i < len; i++) {
        out += arr[i];
        if(i < len - 1) {
            out += ' ';
        }
    }
    console.log(out);
}



function processData(input) {
  input = input.split('\n');
  var size = parseInt(input[0]);
  var ar = input[1].split(' ').map(function(cur) {return parseInt(cur)});
  for(i = 1; i < ar.length; i++) {
    var idx = i;
    var newNum = ar[idx];
    while(idx && ar[idx - 1] > newNum) {
      ar[idx] = ar[idx - 1];
      idx = idx - 1;
    }
    ar[idx] = newNum;
    printArray(ar);
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
