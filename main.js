var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();

var caixadetexto = document.getElementById("caixadetexto")
function selfie() {
    caixadetexto.innerHTML = "";
    configuracao.start();

}

configuracao.onresult = function(e){
    console.log(e);
 var conteudo = e.results[0][0].transcript;
    caixadetexto.innerHTML = conteudo;
    if (conteudo =="tireminhaselfie") {
        console.log("tirando sua selfie")    
    }
}
