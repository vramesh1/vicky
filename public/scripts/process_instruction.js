  function processInstruction()
  {
	var text = document.getElementById('transcript').value;
	console.log("text to process : " + text);
	
	var bbCommand = null;
		
	if (text.indexOf("send message to") === 0)
	{
		var recipient = text.substring(15);
		bbCommand = "MSG" + recipient;
	}
	else if (text.indexOf("show calendar") !== -1)
	{
		bbCommand = "APPT";
	}
	else if (text.indexOf("show flag for") === 0)
	{
		var flagSearch = text.substring(13);
		bbCommand = "FLAG " + flagSearch;
	}
	else if (text.indexOf("run") === 0)
	{
		var command = text.substring(4);
		bbCommand = command;
	}
	else if (text.indexOf("show chart for") === 0)
	{
		var chartSearch = text.substring(14);
		bbCommand = "CHART " + chartSearch;
	}
	else if (text.indexOf("show function of the day") !== -1)
	{
		bbCommand = "NI ODD";
	}
	else if (text.indexOf("trade complete") === 0)
    {
		var chartSearch = text.substring(14);
		bbCommand = "TC NLP " + chartSearch;
    }
	else if (text.indexOf("Amy") === 0)
    {
		var chartSearch = text.substring(3);
		bbCommand = "AIME " + chartSearch;
    }
    
	console.log("bbCommand : " + bbCommand);
	
	if (bbCommand)
	{
		window.open('bbg://screens/' + bbCommand);
	}
	else
	{
		alert("Vicky could not associate your instruction with any recommended Actions. Please try a different instruction.");
	}
	
  }
