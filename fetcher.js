const request = require('request');
const fs = require('fs');

//process.argv arguments URL and local file path and downloads the resource to the specified path 
const url = process.argv[2];
const filePath = process.argv[3];
const fileName = `${url.split('.')[1]}.txt`

function getFileSize() {
  const stats = fs.statSync(fileName)
  return stats.size;
}

request(url, (error, response, body) => {
  if (error) console.log('error:', error); // Print the error if one occurred
  if (response.statusCode !== 200) console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log("hello!"); 
  fs.writeFile(fileName, body, (err) => {
    if (err) throw err;
    const fileSize = getFileSize(fileName);
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`); // Print the H
  }) 
});


