const fs = require("fs")

fs.writeFile("hello.txt ", 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});