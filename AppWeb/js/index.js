



// Procura
function buscar_(){
    buscar('click')
}
  sessionStorage.setItem('pesQuiSar', '');
function buscar(){
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

botão2.textContent='';
botão2.className=`fa-solid fa-download`;
botão3.textContent='';
botão3.className=`fa-solid fa-square-share-nodes`;




botão1.appendChild(imgbotão);
div1.appendChild(label1);
div1.appendChild(br1); 
div1.appendChild(img);
div2.appendChild(label2); 
div2.appendChild(br2); 
div2.appendChild(label3); 
div3.appendChild(botão1);
div3.appendChild(botão2); 
div3.appendChild(botão3); 
div1.appendChild(div2);
div1.appendChild(div3);
list.appendChild(div1) ;
 sessionStorage.setItem('pesQuiSar', '');
 sessionStorage.setItem('itens',`${itens}`)

botão1.addEventListener('click',function(){
    if(doc.Canvas==''){
       Swal.fire('desculpe-me!','Esse design não possue link para edição no canva.')
    } else{
       window.open(`${doc.Canvas}`,'_blank')
    }
   
})
    
} else{

}

})
})
}

//Alerta de lista vazia
function respList(){
Swal.fire({
title: `Procurando Arquivos... `,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
Swal.showLoading();
 document.body.style.paddingRight = '0px';        
}
});
setTimeout(function(){
var respl=  sessionStorage.getItem('itens')
if(!respl||respl==''){
Swal.fire('Lista Vazia')
document.getElementById('input_heaader_pesq').value=''
 sessionStorage.setItem('pesQuiSar','');
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
Swal.fire({
title: `Menu <i class="fa-solid fa-bars"></i>`,
html:` <div  class="menu-container">
    <br>
    <button id='PsqCódigo'>Código <i id="pesq-1" onclick="pesquisar()" class="fa-solid fa-magnifying-glass"></i> </button>
    <br><br>
    <button id="Tela" title="">Tela Cheia <i class="fa-solid fa-desktop"></i></button>
    <br><br>
    <button id='admin'> Administração <i class="fa-sharp-duotone fa-solid fa-lock"></i></button>
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
document.getElementById('Sair').addEventListener('click',function(){
Swal.close('click')
});
document.getElementById('Tela').addEventListener('click',function(){
 toggleFullScreen('click')
 Swal.close()
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
    var resp1= sessionStorage.getItem('senha')
    var resp2=  sessionStorage.getItem('RecPasswor');
    var passWord= document.getElementById('password').value;
    if(!passWord||passWord==''){
        Swal.fire('Preencha o campo "Password"','','warning');
    } else{
        if(passWord== resp1|| passWord== resp2){
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
    var pesquisar= document.getElementById('input_heaader_pesq').value.trim()
    if(!pesquisar|| pesquisar==''||pesquisar.length <= 6){
    document.getElementById('pesqheaad').style.display='none';
    }else{
        document.getElementById('pesqheaad').style.display='block';
    }
    
})













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


