  function processInstruction()
  {
	var text = document.getElementById('transcript').value;
	console.log("text to process : " + text);
	
	var bbCommand = null;
	
	if (text.indexOf("send message") !== -1)
	{
		bbCommand = "MSG ME";
	}
	
	if (text.indexOf("send message to cash team") !== -1)
	{
		bbCommand = "MSG CASHTEAM";
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