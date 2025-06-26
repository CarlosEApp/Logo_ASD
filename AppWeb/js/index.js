


//Botão para acessar a tela de cadastros
document.getElementById('heaad_btn03').addEventListener('click',function(){
 window.open('Paginas/Cadastro.html')
});


//Time Relogio
setInterval(function() {
 const newDate = new Date()
 var dia = String(newDate.getDate()).padStart(2, '0');
 var mes = String(newDate.getMonth() + 1).padStart(2, '0');
 var ano = String(newDate.getFullYear()).padStart(2, '0')
 var data = `${dia}/${mes}/${ano}`
 const now = new Date();
 const hours = now.getHours().toString().padStart(2, '0');
 const minutes = now.getMinutes().toString().padStart(2, '0');
 const seconds = now.getSeconds().toString().padStart(2, '0');
 const timeString = `${hours}:${minutes}:${seconds}`;
 // const lbl_data = document.getElementById('lbl-data');
 // lbl_data.innerHTML = `${data}`
 sessionStorage.setItem('data', data)
 sessionStorage.setItem('hora', timeString)
 //var Data = document.getElementById('lbl_data_head')
 //Data.innerHTML= data;
 }, 1000)

  // Tela Cheia
   function toggleFullScreen() {
 if ((document.fullScreenElement && document.fullScreenElement !== null) ||
  (!document.mozFullScreen && !document.webkitIsFullScreen)) {
  if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
  } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  }
 } else {
  if (document.cancelFullScreen) {
      document.cancelFullScreen();
  } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
 }
}
} 

//Carregamento do Banner
 document.getElementById('banner').addEventListener('click',function(){
         const video = document.getElementById('video_banner');
       video.src="src/Logos_ASD_.mp4"
    video.play()
 });

  window.addEventListener('load', function () {
    const video = document.getElementById('video_banner');
    video.play().catch(function (erro) {
      console.warn('O navegador bloqueou o autoplay:', erro);
    });
  });
  
       
 const video = document.getElementById('video_banner');
   video.load();

  // Tenta executar o vídeo
  video.play().then(() => {
    console.log('Vídeo executado com sucesso.');
  }).catch((erro) => {
    console.warn('Falha ao executar o vídeo:', erro); });


 
