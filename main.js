var speechrecognition= window.webkitSpeechRecognition;
var recognition= new speechrecognition();


function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}

recognition.onresult=function(event){
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
    console.log("Taking your selfie in 5 seconds")
    speak()
    }
    
}

function speak(){
    Bhavik= window.speechSynthesis;
    say="Taking your selfie in 5 seconds";
    utter=new SpeechSynthesisUtterance(say);
    Bhavik.speak(utter);
    Webcam.attach(cam);
    setTimeout(function(){
        takepic();
        save();
    },5000
    );
}

Webcam.set({
    width:360, height:360, image_format:'png', png_quality:90
});

cam=document.getElementById("camera");

function takepic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="pic" src="'+data_uri+'"/>';
    }

    );
}
function save(){
    link=document.getElementById("link");
    i1=document.getElementById("pic").src;
    link.href=i1;
    link.click();
}