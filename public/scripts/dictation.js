  function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      console.log("supported");

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();
      
      console.log("started recog");

      recognition.onresult = function(e) {
        
        console.log("on_result : e = %O", e);
                
        document.getElementById('transcript').value
                                 = e.results[0][0].transcript;
        recognition.stop();
		
        //processInstruction();
        //document.getElementById('labnol').submit();
      };

      recognition.onerror = function(e) {
        
        console.log("on_error : e = %O", e);
        
        recognition.stop();
      }


      //console.log("recognition : %O",recognition);
    }
    else
    {
        console.log("not supported");
		alert("This feature is not supported on this browser. Please use Chrome v25+.");
    }
  }