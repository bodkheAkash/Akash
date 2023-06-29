console.log("File name : "+__filename);
console.log("Current Directory: "+__dirname);

setTimeout(function(){ console.log("after 5000ms") },7000);

console.log("Process id: "+process.id);
console.log("Process Current directory: "+process.cwd());