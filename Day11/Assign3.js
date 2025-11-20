// const f = require('fs');
// f.readFile("sample1.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("error occured " + err)
//     } else
//         console.log(data);
// })
// f.readFileAsync()





const constants = require('constants');
const fs = require('fs');

try {
  fs.access('sampl1e.txt', constants.F_OK, (ERR) => {
    console.log(ERR)
  })

  const data = fs.readFileSync('sample.txt', 'utf8');


  for (let a = 1; a < 11; a++) {
    console.log(a);
  }
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}