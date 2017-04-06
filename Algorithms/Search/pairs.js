function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var line1 = input[0].split(' ');
    var line2 = input[1].split(' ').map(function(cur) {
        return parseInt(cur)
    });
    var n = parseInt(line1[0]);
    var k = parseInt(line1[1]);
    var ctr = 0;
 //   var len = line2.length;
    line2.sort(function(a, b) {
        return(a - b);
    });
    var i = 0;
    var j = 1;
    while(j < n) {
        if(line2[j] - line2[i] < k) {
            j++
        } else if(line2[j] - line2[i] === k) {
            ctr++;
            i++;
            j++;
        } else {
            i++;
            if(i === j) {
                j++
            }
        }
    }
    console.log(ctr);
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
