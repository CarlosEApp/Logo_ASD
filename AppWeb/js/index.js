  sessionStorage.setItem('logado','')
//localStorage.setItem('deviceId','');
setTimeout(function(){
var alth=localStorage.getItem('userId');
//alert(alt)
if(!alth||alth==''){
  swal(`Olá, Bem vindo meu Irmão(ã)! `,'Caso você esteja usando um aparelho móvel e vindo de um Link postado no Facebook ou Instagran, pode ocorrer erro no botão de dowload ele pode não funcionar. A solução é bem simples: Click nos tres pontinhos canto superior da tela e acesse o seu navegador padrão da web. 100%  Acertivo!!\n\n\n','src/Logo_ASD.png')
  let userId = localStorage.getItem('userId');
 
  if (!userId || userId=='') {
    userId = crypto.randomUUID(); // ou use outra forma de gerar UUID
    localStorage.setItem('userId', userId);
     //alert(deviceId)
  }
}else{

}
},7000)
function lbl_sair_P(){
  document.getElementById('input_heaader_pesq').value="";
var list= document.getElementById('Lista');
list.innerHTML = '';
 document.getElementById('lbl_sair_procura').style.display='none'

}
// Procura
function buscar_(){
    buscar('click')
}
  sessionStorage.setItem('pesQuiSar', '');
function buscar(){
   var resp=  document.getElementById('select_procura').value;
  if(resp=='PDF'){
 window.open('Paginas/pdf.html','_blank')
  }else{
    var list= document.getElementById('Lista');
list.innerHTML = '';
var selectLista= document.getElementById('select_procura').value;
var pesquisa= document.getElementById('select_Departamentos').value;
var pesQuiSar= sessionStorage.getItem('pesQuiSar');
sessionStorage.setItem('itens',``)
var firebaseConfig = {
apiKey: "AIzaSyD7q-qzsIhACByHciJkDBI3yPuKK_bgHUM",
authDomain: "logos-asd.firebaseapp.com",
projectId: "logos-asd",
storageBucket: "logos-asd.firebasestorage.app",
messagingSenderId: "801633317687",
appId: "1:801633317687:web:3a38f39b2e9861902e20b2",
measurementId: "G-GJEW931Y73"
};
firebase.initializeApp(firebaseConfig);  
respList('click')
var db = firebase.firestore();
if(!pesQuiSar|| pesQuiSar== ''){
    var coleção= `Coleção_${selectLista}`
}else{
var coleção= `Codigos`
var pesquisa=`${pesQuiSar}`;

}
respList('click')
var produtosRef = db.collection(`${coleção}`);

produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens= querySnapshot.size;
 function removerAcentos(texto) {
return (texto ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
         if(
removerAcentos(pesquisa.toLowerCase()) === removerAcentos(doc.Código?.toLowerCase()) ||
removerAcentos(pesquisa.toLowerCase()) === removerAcentos(doc.Departamento?.toLowerCase()) ||
removerAcentos(pesquisa.toLowerCase()) === removerAcentos(doc.Nome?.toLowerCase())||
removerAcentos(pesquisa.toLowerCase()) === removerAcentos(doc.Titulo?.toLowerCase())
) {

var div1=document.createElement('div');
var div2=document.createElement('div');
var div3=document.createElement('div');        
var img=document.createElement('img');
var imgbotão=document.createElement('img');
var botão1= document.createElement('button');
var botão2= document.createElement('button'); 
var botão3= document.createElement('button'); 
var botão4= document.createElement('button'); 
var label1= document.createElement('label');
var label2= document.createElement('label'); 
var label3= document.createElement('label');
var br1=  document.createElement('br');
var br2=  document.createElement('br');  
var br3=  document.createElement('br');  
var br4=  document.createElement('br');
var br5=  document.createElement('br'); 

div1.id='div1List_';
div3.id='div3List_';
div2.id='div2List';
img.id='imgList';
label1.id='label1List';
label2.id='label2List'; 
label3.id='label3List';
botão1.id='botão1List';
botão2.id='botão2List'; 
botão3.id='botão3List'; 
botão4.id='botão3List'; 
imgbotão.id='imgList2';

img.src=`${doc.URL}`;

label1.textContent=`${doc.Titulo}`;
label2.textContent=`${doc.Nome}`;
label3.textContent=`Código: ${doc.Código}`;
if(!doc.Canvas||doc.Canvas==''){
 
  imgbotão.src='src/Logo_ASD.png'
} else{
   
imgbotão.src='src/logoCanva.png'
}
botão1.title='Canva';
botão2.title='Ver mais';
botão3.title='Compartilhar';
botão4.title='Download';
botão2.textContent='';
botão2.className=`fa-solid fa-eye`;
botão3.textContent='';
botão3.className=`fa-solid fa-square-share-nodes`;
botão4.className=`fa-solid fa-download`;

botão1.appendChild(imgbotão);
div1.appendChild(label1);
div1.appendChild(br1); 
div1.appendChild(img);
div2.appendChild(label2); 
div2.appendChild(br2); 
div2.appendChild(label3); 
div3.appendChild(botão1);
div3.appendChild(botão2); 
div3.appendChild(botão4); 
div3.appendChild(botão3); 
div1.appendChild(div2);
div1.appendChild(div3);
list.appendChild(div1) ;
 sessionStorage.setItem('pesQuiSar', '');
 sessionStorage.setItem('itens',`${itens}`)
  document.getElementById('a_select_procura').click()
 document.getElementById('lbl_sair_procura').style.display='block'
botão4.addEventListener('click', () => {
  var id =localStorage.getItem('userId');
  var data= sessionStorage.getItem('data')
  var hora= sessionStorage.getItem('hora')
  var nome= doc.Nome_Arquivo;
  var name= nome.split('/')
  var n1= name[0]
  var n2= name[1]
  fetch(doc.URL)
    .then(res => res.blob())
    .then(blob => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobURL;
      a.download = n2 || 'arquivo.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobURL);
    })
    .catch(err => {
      console.error("Erro ao baixar:", err);
      Swal.fire("Oops!", "Não foi possível fazer o download.", "error");
    });
         var down= firebase.firestore();
    down.collection('Dowloads').doc(`${doc.Código}-${hora}`).set({
      Download: `${data}-${hora}`,
      Codigo:doc.Código,
      Nome_Arquivo: doc.Nome,
      ID:id,
    })
});
 botão2.addEventListener('click', function(){
  if(!doc.Criador|| doc.Criador==''){
    var criador='Desconhecido'
  } else{
     var criador= doc.Criador

  }
 swal(`${doc.Titulo}`,`Formato do arquivo: ${doc.Formato}\n\n Nome: ${doc.Nome}\n\n__________________Descrição________________\n\n${doc.Descrição}\n\nCriado por: ${criador} \nData de Criação: ${doc.Data_criação}`,`${doc.URL}`)
});
 img.addEventListener('click', function(){
   window.open(doc.URL,'_blank')
 });
 botão3.addEventListener('click',function(){
  Swal.fire({
 title: `Compartilhar <i id='i_compart' class="fa-solid fa-square-share-nodes"></i>`,
 html: `
       <br> 
     <button id="face" title="">Facebook <i class="fa-brands fa-facebook-f"></i></button>  
     <br><br>   
     <button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
     <br><br><br><button id='sair_'>Cancelar</button><br><br>
     `,
   background: 'rgb(255, 255, 255)', // Cor de fundo
  color: 'black', // Cor do texto
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
    popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
  },
    didOpen: () => {
    document.body.style.paddingRight = '0px';
  }
});
document.getElementById('sair_').addEventListener('click',function(){
  Swal.close()

});
document.getElementById('face').addEventListener('click',function(){
  var url = encodeURIComponent("https://carloseapp.github.io/Logo_ASD/AppWeb/Index.html");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");

});
 document.getElementById('whats').addEventListener('click',function(){
var url = "https://carloseapp.github.io/Logo_ASD/AppWeb/Index.html";
var img = `${doc.Titulo}: ${doc.URL}`;
var cod=`${doc.Código}`
var whatsappMessage =`Pagina Web: ${url}\n\n📷 ${img}\n\n Canva edite: ${doc.Canvas} \n\n Código: ${cod}\n\n`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

window.open(whatsappLink, "_blank");
 });

});
botão1.addEventListener('click',function(){
 if(doc.Canvas==''){
     swal('desculpe-me!','Esse design não possui link para edição no Canva..','src/Sorry.png')
 } else{
    window.open(`${doc.Canvas}`,'_blank')
 }
});
} else{
}
})
})
}}
//Alerta de lista vazia
function respList(){
Swal.fire({
title: ``,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_alert' // Aplica a classe CSS personalizada
},
didOpen: () => {
Swal.showLoading();
 document.body.style.paddingRight = '0px';        
}
});
setTimeout(function(){
var respl=  sessionStorage.getItem('itens')
if(!respl||respl==''){
 Swal.fire({
title: `Lista Vazia! `,
text: ``,
allowOutsideClick: false,
showConfirmButton: true,
customClass: {
popup: 'my-custom_alertlist' // Aplica a classe CSS personalizada
},
didOpen: () => {
 document.body.style.paddingRight = '0px';        
}
});
document.getElementById('input_heaader_pesq').value='';
 document.getElementById('lbl_sair_procura').style.display='none'
 sessionStorage.setItem('pesQuiSar','');
}else{
Swal.close()
}
},5000)
}
//Alerta de lista vazia
function respList_(){
Swal.fire({
title: ``,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_alert' // Aplica a classe CSS personalizada
},
didOpen: () => {
Swal.showLoading();
 document.body.style.paddingRight = '0px';        
}
});
setTimeout(function(){
var respl=  sessionStorage.getItem('itens_')
if(!respl||respl==''){
  Swal.fire({
title: `Lista Vazia! `,
text: ``,
allowOutsideClick: false,
showConfirmButton: true,
customClass: {
popup: 'my-custom_alertlist' // Aplica a classe CSS personalizada
},
didOpen: () => {
 document.body.style.paddingRight = '0px';        
}
});
document.getElementById('itensListInit').style.display='none'
}else{
Swal.close()
}
},5000)
}
// Recebendo password
sessionStorage.setItem('PasswordData', '');
sessionStorage.setItem('PasswordHora', ''); 
sessionStorage.setItem('senha','');
sessionStorage.setItem('RecPasswor', '');

var firebaseConfig = {
apiKey: "AIzaSyD7q-qzsIhACByHciJkDBI3yPuKK_bgHUM",
authDomain: "logos-asd.firebaseapp.com",
projectId: "logos-asd",
storageBucket: "logos-asd.firebasestorage.app",
messagingSenderId: "801633317687",
appId: "1:801633317687:web:3a38f39b2e9861902e20b2",
measurementId: "G-GJEW931Y73"
};
firebase.initializeApp(firebaseConfig);  
var db = firebase.firestore();
var produtosRef = db.collection(`PasswordAdmin`);

produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
sessionStorage.setItem('PasswordData', doc.Data);
sessionStorage.setItem('PasswordHora', doc.Hora); 
sessionStorage.setItem('senha',doc.Senha);
sessionStorage.setItem('RecPasswor', doc.RecSenha);
sessionStorage.setItem('Foto_zap',doc.Imagem);
setTimeout(function(){
 var resp1= sessionStorage.getItem('senha')
var resp2=  sessionStorage.getItem('RecPasswor');
var resp3=  sessionStorage.getItem('PasswordData');
var resp4=  sessionStorage.getItem('PasswordHora'); 
//Swal.fire('',`Senha: ${resp1}<br>Recuparação: ${resp2}<br><br>Data: ${resp3} - Hora: ${resp4}`,'')
},4000)
})
})
function Menu(){
    sessionStorage.setItem('logado','')
Swal.fire({
title: `Menu <i class="fa-solid fa-bars"></i>`,
html:` <div  class="menu-container">
    <br>
    <button id='PsqCódigo'>Código <i id="pesq-1" onclick="pesquisar()" class="fa-solid fa-magnifying-glass"></i> </button>
    <br><br> 
    <button id='PDF' > PDF </button>
      <br><br>  
    <button id='instagran' > Instagran <i class="fa-brands fa-instagram"></i> </button>
      <br><br>  
    <button id='whatsapp' > WhatsApp <i class="fa-brands fa-whatsapp"></i> </button>
     <br><br>
    <button id='admin'> Administração <i class="fa-sharp-duotone fa-solid fa-lock"></i></button>
     <br><br>  
    <button id='Sair' class='cancelar'> Cancelar </button>
    </div> <br><br>  
`,
background: 'black', // Cor de fundo
  color: '#fff', // Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
    document.body.style.paddingRight = '0px';
 }
});  
document.getElementById('PDF').addEventListener('click',function(){
  window.open('Paginas/pdf.html','_blank')
});
document.getElementById('instagran').addEventListener('click',function(){
  instagran('click')
  Swal.click();
});
document.getElementById('whatsapp').addEventListener('click',function(){
whatsapp('click') 
  Swal.click()
});
document.getElementById('PsqCódigo').addEventListener('click',function(){ 
     sessionStorage.setItem('pesQuiSar', '');
    Swal.fire({
title: `Pesquise por Código`,
html:` <div  class="menu-container">
  <p>Digite Código</p>
  <br>
  <input id='idcódigo' type='text' placeholder='Código...'>
  <br><br>
  <button id="PasqCodigo" title="">Start <i id="pesq-1" onclick="pesquisar()" class="fa-solid fa-magnifying-glass"></i> </button>
  <br><br>  
  <button id='Sair' class='cancelar'> Cancelar </button>
</div>
`,
background: 'black', // Cor de fundo
  color: '#fff', // Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_PesqCódigo' // Aplica a classe CSS personalizada
},
didOpen: () => {
  document.body.style.paddingRight = '0px';
}
});  
 document.getElementById('idcódigo').value='';
document.getElementById('Sair').addEventListener('click',function(){
Swal.close()
});
document.getElementById('PasqCodigo').addEventListener('click',function(){
sessionStorage.setItem('itens',``)
var respDoc= document.getElementById('idcódigo').value.trim();
if(!respDoc|| respDoc==''){
 sessionStorage.setItem('pesQuiSar', '');
 Swal.fire('Campo código vazio!')
}else{
  sessionStorage.setItem('pesQuiSar', respDoc);
  setTimeout(function(){
   sessionStorage.setItem('pesQuiSar', respDoc);
   buscar()
  },1000)
}
})
})
document.getElementById('Sair').addEventListener('click',function(){
Swal.close('click')
});

document.getElementById('admin').addEventListener('click',function(){
Swal.fire({
title: `Password <i class="fa-sharp-duotone fa-solid fa-lock"></i>`,
html:` <div  class="menu-container">
    <br>
    <p>Digite senha:
    <br>
    <input id='password' type='password' placeholder='Digite password..'> <i id='iPasWord' class="fa-solid fa-eye"></i>
    <br><br>
    <button id='Start'> Enter <i  class="fa-sharp-duotone fa-solid fa-unlock"></i></button>
    <br><br>  
    <button id='Sair' class='cancelar'> Cancelar </button>
    </div>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
    document.body.style.paddingRight = '0px';
 }
}); 
setTimeout(function(){
document.getElementById('input_heaader_pesq').value='';
sessionStorage.setItem('pesQuiSar','');
},1000)
document.getElementById('iPasWord').addEventListener('click',function(){
  var ii= document.getElementById('iPasWord');
  var iPW= document.getElementById('password');
  if(iPW.type=='password'){
      iPW.type='text'
      ii.className='fa-solid fa-eye-low-vision';
  } else{
      iPW.type='password';
      ii.className='fa-solid fa-eye';
  }
});
document.getElementById('Sair').addEventListener('click',function(){
Swal.close('click')
}); 
document.getElementById('Start').addEventListener('click',function(){
  sessionStorage.setItem('logado','')
  var resp1= sessionStorage.getItem('senha')
  var resp2=  sessionStorage.getItem('RecPasswor');
  var passWord= document.getElementById('password').value;
  if(!passWord||passWord==''){
      Swal.fire('Preencha o campo "Password"','','warning');
  } else{
      if(passWord== resp1|| passWord== resp2){
       sessionStorage.setItem('logado','Esta logado')
           window.open('Paginas/Cadastro.html')
       Swal.close()
      }else{
            Swal.fire('Senha incorreta!','','error');
      }
  }
}); 
});
}
//Botão para acessar a tela de cadastros
document.getElementById('heaad_btn03').addEventListener('click',function(){
});
//Pesquisa do Heaader
document.getElementById('input_heaader_pesq').focus()
function pesquisar(){
    var pesquisar= document.getElementById('input_heaader_pesq').value.trim();
    if(!pesquisar|| pesquisar==''){
        Swal.fire({
title: ``,
html:` 
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
    document.body.style.paddingRight = '0px';
 }
}); 
       Swal.fire('Atenção!','Preencha o campo pesquisa.','warning')
    } else{
    sessionStorage.setItem('pesQuiSar', pesquisar);
    buscar()
    } 
}
setInterval(function(){
 //   var pesquisar= document.getElementById('input_heaader_pesq').value.trim()
   // if(!pesquisar|| pesquisar==''||pesquisar.length <= 4){
   // document.getElementById('pesqheaad').style.display='none';
   // }else{
   //   document.getElementById('pesqheaad').style.display='block';
  //  } 
})
   sessionStorage.setItem('Tel_Whats','');
   sessionStorage.setItem('Foto_zap','');
//redes sociais
// instagran
 function instagran(){
  var URL_Intagran= localStorage.getItem('URL_Intagran')
if(!URL_Intagran|| URL_Intagran==''){
var url_Inst='https://www.instagram.com/asd.logos.design?utm_source=qr&igsh=MXg3aGF5cTY0ZGNzZQ=='
} else{
var url_Inst= URL_Intagran;
}
 window.open( url_Inst,'_blank')
 }
 // Compartlhar pagina
function Compartilhar(){
  
  Swal.fire({
 title: `Compartilhar <i id='i_compart'  class="fa-solid fa-square-share-nodes"></i>`,
 html: `
       <br> 
     <button id="face" title="">Facebook <i class="fa-brands fa-facebook-f"></i></button>  
     <br><br>   
     <button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
     <br><br><br><button id='sair_'>Cancelar</button><br><br>
     `,
  background: 'rgb(255, 255, 255)', // Cor de fundo
  color: 'black', // Cor do texto
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
    popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
  },
    didOpen: () => {
    document.body.style.paddingRight = '0px';
  }
});
document.getElementById('sair_').addEventListener('click',function(){
  Swal.close()
});
document.getElementById('face').addEventListener('click',function(){
  var url = encodeURIComponent("https://carloseapp.github.io/Logo_ASD/AppWeb/Index.html");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
 document.getElementById('whats').addEventListener('click',function(){
var url = "https://carloseapp.github.io/Logo_ASD/AppWeb/Index.html";
var whatsappMessage =`Visite ASD logos Pagina Web: ${url}`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
})
}
function whatsapp(){
   var tell= sessionStorage.getItem('Tel_Whats');
   var imagem= sessionStorage.getItem('Foto_zap');
   if(!tell||tell==''){
    var telefone=`11995501463`
   }else{
    var telefone=`${tell}`
   };
   if(!imagem||imagem==''){
    var imagem=`src/Carlos.jpg`
   }else{
   };
Swal.fire({
 title: `WhatsApp <i id='i_whats' class="fa-brands fa-whatsapp"></i>`,
 html: `
     <div id='divWhats'>
     <img id='imgWhats'src=''> <label>Carlos Eduardo</label> </div>
     <p>Envie sua opinião ou sugestão!
     <br>  <br>   
     <button id="btn_whats" title="">Mensagem <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
     <br><br><br><button id='sair_'>Cancelar</button>
     `,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
    popup: 'my-custom_login_Swl' // Aplica a classe CSS personalizada
  },
    didOpen: () => {
    document.body.style.paddingRight = '0px';
  }
});
 document.getElementById('imgWhats').src=`${imagem}`
 document.getElementById('imgWhats').addEventListener('click',function(){
  swal('','',`${imagem}`)
 })
 document.getElementById('btn_whats').addEventListener('click',function(){
  var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
  var url = "https://wa.me/"+`${numero}?text= ASD Logos design pedido de contato`;
  window.open(url, "_blank");
  Swal.fire(`WhatsApp`,``,'success')       
});
document.getElementById('sair_').addEventListener('click',function(){
  Swal.fire('Sair')
  Swal.close()
});
}
// A HOME
function home(){
  document.getElementById('a_HOME').click()
}
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
function selectInit(){
    var selectL= document.getElementById('select_procuraTdlist').value;
   
  if(selectL=='PDF'){
  var list= document.getElementById('listaInicial');
  list.innerHTML = '';
  document.getElementById('itensListInit').style.display='none'
  window.open('Paginas/pdf.html','_blank')
  }else{
    sessionStorage.setItem('ListInicio', selectL)
    listaInicil('click')
}
}
// lista inicial firebase
function listaInicil(){
var listaInt= sessionStorage.getItem('ListInicio');
var itensListInit= document.getElementById('itensListInit');
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
var list= document.getElementById('listaInicial');
list.innerHTML = '';
sessionStorage.setItem('itens_',``)
var firebaseConfig = {
apiKey: "AIzaSyD7q-qzsIhACByHciJkDBI3yPuKK_bgHUM",
authDomain: "logos-asd.firebaseapp.com",
projectId: "logos-asd",
storageBucket: "logos-asd.firebasestorage.app",
messagingSenderId: "801633317687",
appId: "1:801633317687:web:3a38f39b2e9861902e20b2",
measurementId: "G-GJEW931Y73"
};
firebase.initializeApp(firebaseConfig);  
respList_('click')
var produtosRef = db.collection(`Coleção_${listaInt}`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens= querySnapshot.size;
var div1=document.createElement('div');
var div2=document.createElement('div');
var div3=document.createElement('div');        
var img=document.createElement('img');
var imgbotão=document.createElement('img');
var botão1= document.createElement('button');
var botão2= document.createElement('button'); 
var botão3= document.createElement('button'); 
var botão4= document.createElement('button'); 
var label1= document.createElement('label');
var label2= document.createElement('label'); 
var label3= document.createElement('label');
var br1=  document.createElement('br');
var br2=  document.createElement('br');  
var br3=  document.createElement('br');  
var br4=  document.createElement('br');
var br5=  document.createElement('br'); 

div1.id='div1List_';
div3.id='div3List_';
div2.id='div2List';
img.id='imgList';
label1.id='label1List';
label2.id='label2List'; 
label3.id='label3List';
botão1.id='botão1List';
botão2.id='botão2List'; 
botão3.id='botão3List'; 
botão4.id='botão3List'; 
imgbotão.id='imgList2';

img.src=`${doc.URL}`;

label1.textContent=`${doc.Titulo}`;
label2.textContent=`${doc.Nome}`;
label3.textContent=`Código: ${doc.Código}`;
if(!doc.Canvas||doc.Canvas==''){
 
  imgbotão.src='src/Logo_ASD.png'
} else{
   
imgbotão.src='src/logoCanva.png'
}
botão1.title='Canva';
botão2.title='Ver mais';
botão3.title='Compartilhar';
botão4.title='Download';
botão2.textContent='';
botão2.className=`fa-solid fa-eye`;
botão3.textContent='';
botão3.className=`fa-solid fa-square-share-nodes`;
botão4.className=`fa-solid fa-download`;

botão1.appendChild(imgbotão);
div1.appendChild(label1);
div1.appendChild(br1); 
div1.appendChild(img);
div2.appendChild(label2); 
div2.appendChild(br2); 
div2.appendChild(label3); 
div3.appendChild(botão1);
div3.appendChild(botão2); 
div3.appendChild(botão4); 
div3.appendChild(botão3); 
div1.appendChild(div2);
div1.appendChild(div3);
list.appendChild(div1) ;

sessionStorage.setItem('pesQuiSar', '');
sessionStorage.setItem('itens_',`${itens}`)
itensListInit.innerHTML=`(${itens}) Itens `;

document.getElementById('itensListInit').style.display='block'
//document.getElementById('a_select_procuraTdlist').click()

botão4.addEventListener('click', () => {
  var id =localStorage.getItem('userId');
  var data= sessionStorage.getItem('data')
  var hora= sessionStorage.getItem('hora')
  var nome= doc.Nome_Arquivo;
  var name= nome.split('/')
  var n1= name[0]
  var n2= name[1]

  fetch(doc.URL)
 .then(res => res.blob())
 .then(blob => {
   const blobURL = URL.createObjectURL(blob);
   const a = document.createElement('a');
   a.href = blobURL;
   a.download = n2 || 'arquivo.png';
   document.body.appendChild(a);
   a.click();
   a.remove();
   URL.revokeObjectURL(blobURL);
 })
 .catch(err => {
   console.error("Erro ao baixar:", err);
   Swal.fire("Oops!", "Não foi possível fazer o download.", "error");
 });
      var down= firebase.firestore();
 down.collection('Dowloads').doc(`${doc.Código}-${hora}`).set({
   Download: `${data}-${hora}`,
   Codigo:doc.Código,
   Nome_Arquivo: doc.Nome,
   ID:id,
 })
});
 botão2.addEventListener('click', function(){
if(!doc.Criador|| doc.Criador==''){
    var criador='Desconhecido'
  } else{
     var criador= doc.Criador
  }
 swal(`${doc.Titulo}`,`Formato do arquivo: ${doc.Formato}\n\n Nome: ${doc.Nome}\n\n__________________Descrição________________\n\n${doc.Descrição}\n\nCriado por: ${criador} \nData de Criação: ${doc.Data_criação}`,`${doc.URL}`)
});
 img.addEventListener('click', function(){
   window.open(doc.URL,'_blank')
 });
 botão3.addEventListener('click',function(){
  Swal.fire({
 title: `Compartilhar <i id='i_compart'  class="fa-solid fa-square-share-nodes"></i>`,
 html: `
       <br> 
     <button id="face" title="">Facebook <i class="fa-brands fa-facebook-f"></i></button>  
     <br><br>   
     <button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
     <br><br><br><button id='sair_'>Cancelar</button><br><br>
     `,
  background: 'rgb(255, 255, 255)', // Cor de fundo
  color: 'black', // Cor do texto
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
    popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
  },
    didOpen: () => {
    document.body.style.paddingRight = '0px';
  }
});
document.getElementById('sair_').addEventListener('click',function(){
  Swal.close()
});
document.getElementById('face').addEventListener('click',function(){
  var url = encodeURIComponent("https://carloseapp.github.io/Logo_ASD/AppWeb/Index.html");
   window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
 document.getElementById('whats').addEventListener('click',function(){
var url = "https://carloseapp.github.io/Logo_ASD/AppWeb/Index.html";
var img = `${doc.Titulo}: ${doc.URL}`;
var cod=`${doc.Código}`
var whatsappMessage =`Pagina Web: ${url}\n\n📷 ${img}\n\n Canva edite: ${doc.Canvas} \n\n Código: ${cod}\n\n`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
 });
});
botão1.addEventListener('click',function(){
    if(doc.Canvas==''){
       swal('desculpe-me!','Esse design não possui link para edição no Canva..','src/Sorry.png')
    } else{
       window.open(`${doc.Canvas}`,'_blank')
    }
});

})
})
}

 selectInit()

 





