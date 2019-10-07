const hbjs = require('handbrake-js')
const path = require('path');

module.exports=(options)=>{hbjs.spawn(options)
  .on('error', err => {
    // invalid user input, no video found etc
    console.log("No video found");

  })
  .on('progress', progress => {
    console.log(
      'Percent complete: %s, ETA: %s',
      progress.percentComplete,
      progress.eta
    )
  })}