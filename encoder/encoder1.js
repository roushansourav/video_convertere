let Ffmpeg = require('fluent-ffmpeg');

Ffmpeg('https://res.cloudinary.com/videoconvertertrial/video/upload/v1568723212/videoconverter_source/Sher_Aaya_Sher___Gully_Boy___Siddhant_Chaturvedi___Ranveer_Singh_Alia_Bhatt___fxiplq.mp4')
  .size('1920x1080')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('progress', function(progress) {
    console.log('Processing: ' + progress.percent + '% done');
  })
  .on('end', function() {
    console.log('Processing finished !');
  })
  .save('output.mkv');
