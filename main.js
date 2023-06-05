var speechconfiguracao =window.webkitSpeechRecognition;
var configuracao = new  speechconfiguracao();


var caixadetexto = document.getElementById("caixadetexto")
function selfie() {
    caixadetexto.innerHTML = "";
    configuracao.start();

}

configuracao.onresult = function(e){
    console.log(e);
    conteudo = e.results[0][0].transcrpit;
    caixadetexto.innerHTML = conteudo;
    if (conteudo =="tire minha selfie") {
        console.log("tirando sua selfie") ;
        falar()   
    }
}

function falar() {
    var api = window.speechSynthesis;
    var config = new SpeechSynthesisUtterance("tirando sua selfie em 3, 2 1");
    api.speak(config);
    Webcam.attach(camera)
    setTimeout(function(){
        tirarselfie();
        save()
    },5000)
}
camera = document.getElementById("webcam");
Webcam.set({
    width:370, height:250, image_format:"jpeg", jpeg_quality:90
})
function tirarselfie() {
    Webcam.snap(function(imagem){
        document.getElementById("foto").innerHTML="<img id = 'fotocapturada' src = '"+imagem+"'>";
    })
}
 function save() {
    link = document.getElementById("link");
    imagem = document.getElementById("fotocapturada");
    link.href = imagem;
    link.cilck();
 }
