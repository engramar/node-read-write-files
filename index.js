var fs  = require("fs");

let i = 0;
fs.readFileSync('./exercise-data.json').toString().split('\n').forEach(function (line) { 
    console.log(line);
    i++;
    console.log(`Number of lines read so far: ${i}`)
    fs.appendFileSync("./output.txt", line.toString() + "\n");
});
