const request = require('request');
const fs = require('fs');

//process.argv arguments URL and local file path and downloads the resource to the specified path 
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) console.log('error:', error); // Print the error if one occurred
  if (response.statusCode !== 200) console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 
  fs.writeFile(file, data[, options], callback) console.log('body:', body); // Print the HTML for the Google homepage.
});


