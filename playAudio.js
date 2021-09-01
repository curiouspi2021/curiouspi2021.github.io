myAudio=document.getElementById('audio2');
function bajao(){
    myAudio.play();
    setTimeout(function(){
        myAudio.pause();
        myAudio.currentTime = 1;
    },30000);    
}

setInterval(function(){
    bajao();}, 40000); //3600000
