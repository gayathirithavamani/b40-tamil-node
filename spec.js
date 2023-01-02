const os = require("os");

// console.log("Free memory", os.freemem() / 1024 / 1024 / 1024);
// console.log("Total memory", os.totalmem() / 1024 / 1024 / 1024);
// console.log("Version", os.version());
// console.log("CPU", os.cpus());

fs.readFile("./cool.txt", "utf-8", (err, data) => {
  console.log(data);
});
