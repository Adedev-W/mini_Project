/* JS comes here */
function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
        output.classList.remove("hide");
        get(transcript) 
    };
  
     // start recognition
     recognition.start();
}


function tr(v) {
	let msg = new SpeechSynthesisUtterance();
	msg.lang = document.getElementById("o").value;
	msg.text = v;
	window.speechSynthesis.speak(msg);
	
}

function get(ur) {
	var sourceLang = document.getElementById("i").value;
	var targetLang = document.getElementById("o").value;
	var sourceText = ur;
	var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
	fetch(url)
	  .then((response) => response.json())
	  .then((data) => {
	    var obj = data[0][0][0];
	    tr(obj);
	   }); 
}


function swapit() {
	var second=document.getElementById("i");
	var first=document.getElementById("o");
	var temp;
	temp = second.value;
	second.value = first.value;
	first.value = temp;
}


