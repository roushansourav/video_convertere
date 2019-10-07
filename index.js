require('path').basename(__dirname);
const hdbjs = require('./encoder/encoder');
console.log(__dirname);
let input_path = `${__dirname}\\uploads\\sample.webm`;
console.log(input_path);
const options = {
    input: input_path ,
    output: 'output2.avi',
    width: '1024',
    height:'768'
  };
hdbjs(options);