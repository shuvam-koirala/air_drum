const modelParams = {
    flipHorizontal: false,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 2,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.89,    // confidence threshold for predictions.
  }

  navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;
  //select html//
  const video=document.querySelector('#video');
  const audio=document.querySelector('#audio');
   let model;
   handTrack.startVideo(video)
    .then(status =>
        {
     if(status)
     {
         navigator.getUserMedia({video: {}},stream =>{
             video.srcObject= stream;
             //start detection//
          setInterval(runDetection,400);
         },
         err => console.log(err)
         )
     }
    })
     
    function runDetection()
    {
      model.detect(video)
      .then(predictions =>
        {
         if(predictions.length!==0)
         {
           let hand1=predictions[0].bbox;
           let x1=hand1[0];
           let x2=hand2[0];
           let y1=hand1[1];
           let y2=hand2[1];
           
           audio.src="./audio/audio9.mpg";

           if(y1>300||y2>300)
           {   
               if((x1<60 && x1>0 )||(x2<60 && x2>0 ))
               {
                   audio.src = 'audio/audio2.mpg';
               }
               else if((x1>60 && x1<130 )||(x2>60 && x2<130 ))
               {
                   audio.src='audio/audio3.mpg';
               }
               else if((x1>130 && x1<200 )||(x2>130 && x2<200 ))
               {
                   audio.src='audio/audio1.mpg';
               }
               else if((x1>200 && x1<260 )||(x2>200 && x2<260 ))
               {
                   audio.src='audio/audio5.mpg';
               }
               else if((x1>260 && x1<320 )||(x2>260 && x2<320 ))
               {
                   audio.src='audio/audio4.mpg';
               }
               else if((x1>320 && x1<380 )||(x2>320 && x2<380 ))
               {
                   audio.src='audio/audio7.mpg';
               }
               else if((x1>380 && x1<440 )||(x2>380 && x2<440 ))
               {
                   audio.src='audio/audio8.mpg';
               }
               else if((x1>440 && x1<500 )||(x2>440 && x2<500 ))
               {
                   audio.src='audio/audio9.mpg';
               }
               else if((x1>500 && x1<580 )||(x2>500 && x2<580 ))
               {
                   audio.src='audio/audio6.mpg';
               }
            }

           audio.play();
         }
        })
    }

    handTrack.load(modelParams)
    .then(lmodel=>
    {
      model=lmodel;
    })