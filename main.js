var speechconfiguracao =window.webkitSpeechRecognition;
var configuracao = new  speechconfiguracao();


var caixadetexto = document.getElementById("caixadetexto")
function selfie() {
    caixadetexto.innerHTML = "";
    configuracao.start();

}

configuracao.onresult = function(e){
    console.log(e);
    conteudo = e.results[0][0].transcrpit
    caixadetexto.innerHTML = conteudo;
    if (conteudo =="tireminhaselfie") {
        console.log("tirando sua selfie")    
    }
}