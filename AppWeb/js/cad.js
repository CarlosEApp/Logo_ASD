


  ///menu
function Menu(){
Swal.fire({
title: `Menu <i class="fa-solid fa-bars"></i>`,
html:` <div  class="menu-container">
 <br>
 <button id='PsqCódigo'>Código <i id="pesq-1" onclick="pesquisar()" class="fa-solid fa-magnifying-glass"></i> </button>
  <br><br>
<button id="Tela" title="">Tela Cheia <i class="fa-solid fa-desktop"></i></button>
<br><br>  <button id='Sair' class='cancelar'> Cancelar </button>
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
Swal.close()

});

document.getElementById('Tela').addEventListener('click',function(){
toggleFullScreen('click')
Swal.close()
});
document.getElementById('PsqCódigo').addEventListener('click',function(){
lbl_sair_Cad('click');
lbl_sair_Procura('click');
lbl_sair_lista('click');
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
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_PesqCódigo' // Aplica a classe CSS personalizada
},
didOpen: () => {
  document.body.style.paddingRight = '0px';
}
});  
document.getElementById('Sair').addEventListener('click',function(){
Swal.close()

});
document.getElementById('PasqCodigo').addEventListener('click',function(){
sessionStorage.setItem('itens',``)
var respDoc= document.getElementById('idcódigo').value.trim();

Swal.fire({
title: ``,
html:` <div  id='listSwal' class="menu-container">
</div>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});  
setTimeout(function(){
var time=  sessionStorage.getItem('itens')
if(!time|| time==''){
Swal.close()
}

},3000)
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
var produtosRef = db.collection(`Codigos`);
var listC= document.getElementById('listSwal');
listC.innerHTML = '';
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens= querySnapshot.size;

if(respDoc== doc.Código){

var div1=document.createElement('div');
var div2=document.createElement('div');
var div3=document.createElement('div');        
var img=document.createElement('img');
var botão1= document.createElement('button');
var botão2= document.createElement('button'); 
var label1= document.createElement('label');
var label2= document.createElement('label'); 
var label3= document.createElement('label');
var br1=  document.createElement('br');
var br2=  document.createElement('br');  
var br3=  document.createElement('br');  
var br4=  document.createElement('br');
var br5=  document.createElement('br'); 

div1.id='div1List_C';
div2.id='div2List';
img.id='imgList';
label1.id='label1List';
label2.id='label2List'; 
label3.id='label3List';
botão1.id='botão1List';
botão2.id='botão2List'; 

img.src=`${doc.URL}`;
label1.textContent=`${doc.Titulo}`;
label2.textContent=`${doc.Nome}`;
label3.textContent=`Código: ${doc.Código}`;
botão1.textContent='';
botão1.className=`fa-solid fa-pen-to-square`;
botão2.textContent='';
botão2.className=`fa-solid fa-trash`;

div1.appendChild(img);
div2.appendChild(label1);
div2.appendChild(br1); 
div2.appendChild(label2); 
div2.appendChild(br2); 
div2.appendChild(label3); 
div3.appendChild(botão1);
div3.appendChild(br3); 
div3.appendChild(br4); 
div3.appendChild(botão2); 
div1.appendChild(div2);
div1.appendChild(div3);
listC.appendChild(div1) ;

sessionStorage.setItem('itens',`${itens}`)
img.addEventListener('click',function(){
swal('',`${doc.Nome}`,`${doc.URL}`)
});
botão1.addEventListener('click',function(){
document.getElementById('body02').style.display='none';
document.getElementById('div_cadastro').style.display='block';
document.getElementById('select_lista').value= doc.Lista;
document.getElementById('input_nome').value= doc.Nome;
document.getElementById('select_Departamentos_Ministerial').value= doc.Departamento; 
document.getElementById('input_Titulo').value= doc.Titulo;
document.getElementById('input_descriçao').value= doc.Descrição;
document.getElementById('input_formato').value= doc.Formato;
document.getElementById('criaçãoData').value= doc.Data_criação;
document.getElementById('input_canvas').value= doc.Canvas;
document.getElementById('img_apresent').src= doc.URL;
document.getElementById('input_codigo').value= doc.Código;
document.getElementById('input_criador').value= doc.Criador;
sessionStorage.setItem('ArquivoUrl',doc.URL) 
sessionStorage.setItem('Nome_arquivo',doc.Nome_Arquivo)
Swal.close()
 
});
botão2.addEventListener('click',function(){
Swal.close()
Swal.fire({
title: `Excluir Arquivo!`,
html:` <div  class="menu-container">
<p>Digite o código e click em Excluir. <br> A exclusão não podera ser desfeita!</p>
<br>
<input id='inputEx' type='text' placeHolder='Digite código...'>
<br><br>
<button id="SwalExCód" title="">Excluir <i class="fa-solid fa-trash"></i></button>
<br><br>  <button id='Sair' class='cancelar'> Cancelar </button>
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
document.getElementById('SwalExCód').addEventListener('click',function(){
var respC= doc.Código;
var respINP= document.getElementById('inputEx').value;
if(respC == respINP){

var dbex = firebase.firestore();
dbex.collection(`Coleção_${doc.Lista}`).doc(respINP).delete();

setTimeout(function(){
var db= firebase.firestore();
db.collection(`Codigos`).doc(respC).delete();
},1000)



var img_file = firebase.storage();
var mm = img_file.ref(`${doc.Nome_Arquivo}`);
// Deletar o arquivo
mm.delete().then(() => {
// window.swal('Sucesso!','Imagem deletada do banco de dados','success')
}).catch((error) => {
window.swal('ERRO!','','error')
});

Swal.fire({
title: `Deletando Arquivos... `,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
   Swal.showLoading();
    document.body.style.paddingRight = '0px';        
}
});
setTimeout(function(){
Swal.fire('Sucesso!','','success')
setTimeout(function(){
select('click')
},2000)
},5000)

}else{
Swal.fire('Código incorreto','O Código digitado não corresponde ao arquivo que você deseja excluir.<br><br>Tente Novamente!','error')
}

})

})
} else{

}

})
})

});

});

}

// Sair lista procura
function lbl_sair_Procura(){
var list= document.getElementById('list_result');
list.innerHTML = '';
document.getElementById('lbl_sair_procura').style.display='none'
document.getElementById('select_procura').style.backgroundColor=' #ffffff'
document.getElementById('select_procura').style.color='black'
document.getElementById('div_lista_result').style.display='none'
}
//Select Procura detalhada
function Procura(){

document.getElementById('select_procura').style.backgroundColor=' #ffffff'
document.getElementById('select_procura').style.color='black'
document.getElementById('lbl_sair_procura').style.display='none'
var selectLista= document.getElementById('select_procura').value;
var selecctDepartamento= document.getElementById('select_Departamentos').value;
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
var produtosRef = db.collection(`Coleção_${selectLista}`);
var list= document.getElementById('list_result');
list.innerHTML = '';
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens= querySnapshot.size;

if(selecctDepartamento== doc.Departamento){

var div1=document.createElement('div');
var div2=document.createElement('div');
var div3=document.createElement('div');        
var img=document.createElement('img');
var botão1= document.createElement('button');
var botão2= document.createElement('button'); 
var label1= document.createElement('label');
var label2= document.createElement('label'); 
var label3= document.createElement('label');
var br1=  document.createElement('br');
var br2=  document.createElement('br');  
var br3=  document.createElement('br');  
var br4=  document.createElement('br');
var br5=  document.createElement('br'); 

div1.id='div1List_';
div2.id='div2List';
img.id='imgList';
label1.id='label1List';
label2.id='label2List'; 
label3.id='label3List';
botão1.id='botão1List';
botão2.id='botão2List'; 

img.src=`${doc.URL}`;
label1.textContent=`${doc.Titulo}`;
label2.textContent=`${doc.Nome}`;
label3.textContent=`Código: ${doc.Código}`;
botão1.textContent='';
botão1.className=`fa-solid fa-pen-to-square`;
botão2.textContent='';
botão2.className=`fa-solid fa-trash`;

div1.appendChild(img);
div2.appendChild(label1);
div2.appendChild(br1); 
div2.appendChild(label2); 
div2.appendChild(br2); 
div2.appendChild(label3); 
div3.appendChild(botão1);
div3.appendChild(br3); 
div3.appendChild(br4); 
div3.appendChild(botão2); 
div1.appendChild(div2);
div1.appendChild(div3);
list.appendChild(div1) ;

sessionStorage.setItem('itens',`${itens}`)
document.getElementById('lbl_sair_procura').style.display='block'
document.getElementById('div_lista_result').style.display='block'

img.addEventListener('click',function(){
swal('',`${doc.Nome}`,`${doc.URL}`)
});
botão1.addEventListener('click',function(){
document.getElementById('body02').style.display='none';
document.getElementById('div_cadastro').style.display='block';
document.getElementById('select_lista').value= doc.Lista;
document.getElementById('input_nome').value= doc.Nome;
document.getElementById('select_Departamentos_Ministerial').value= doc.Departamento; 
document.getElementById('input_Titulo').value= doc.Titulo;
document.getElementById('input_descriçao').value= doc.Descrição;
document.getElementById('input_formato').value= doc.Formato;
document.getElementById('criaçãoData').value= doc.Data_criação;
document.getElementById('input_canvas').value= doc.Canvas;
document.getElementById('img_apresent').src= doc.URL;
document.getElementById('input_codigo').value= doc.Código;
document.getElementById('input_criador').value= doc.Criador;
sessionStorage.setItem('ArquivoUrl',doc.URL) 
sessionStorage.setItem('Nome_arquivo',doc.Nome_Arquivo)
aRefCad('click')
 
});
botão2.addEventListener('click',function(){

Swal.fire({
title: `Excluir Arquivo!`,
html:` <div  class="menu-container">
<p>Digite o código e click em Excluir. <br> A exclusão não podera ser desfeita!</p>
<br>
<input id='inputEx' type='text' placeHolder='Digite código...'>
<br><br>
<button id="SwalExCód" title="">Excluir <i class="fa-solid fa-trash"></i></button>
<br><br>  <button id='Sair' class='cancelar'> Cancelar </button>
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
document.getElementById('SwalExCód').addEventListener('click',function(){
var respC= doc.Código;
var respINP= document.getElementById('inputEx').value;
if(respC == respINP){
  

var dbex = firebase.firestore();
dbex.collection(`Coleção_${doc.Lista}`).doc(respINP).delete();

setTimeout(function(){
var db= firebase.firestore();
db.collection(`Codigos`).doc(respC).delete();
},1200)



var img_file = firebase.storage();
var mm = img_file.ref(`${doc.Nome_Arquivo}`);

// Deletar o arquivo
mm.delete().then(() => {
  
//window.swal('Sucesso!','Imagem deletada do banco de dados','success')
}).catch((error) => {
window.swal('ERRO!','','error')
});

Swal.fire({
title: `Deletando Arquivos... `,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
   Swal.showLoading();
    document.body.style.paddingRight = '0px';        
}
});
setTimeout(function(){
Swal.fire('Sucesso!','','success')
setTimeout(function(){
select('click')
},2000)
},5000)

}else{
Swal.fire('Código incorreto','O Código digitado não corresponde ao arquivo que você deseja excluir.<br><br>Tente Novamente!','error')
}
})
})
} else{
}
})
})
};

//iniciar da pagina
sessionStorage.setItem('ArquivoUrl',``)
sessionStorage.setItem('Nome_arquivo',``)
document.getElementById('div_cadastro').style.display='none';

//Botão para acessar o cadastro
function Cadastrar(){
LimparCad('click')
var resp1= document.getElementById('div_cadastro');
if(resp1.style.display=='block'){
document.getElementById('body02').style.display='block';
document.getElementById('div_cadastro').style.display='none';
} else{
sessionStorage.setItem('ArquivoUrl',``)
sessionStorage.setItem('Nome_arquivo',``)
document.getElementById('body02').style.display='none';
document.getElementById('div_cadastro').style.display='block';
var hora = sessionStorage.getItem('hora');
var num= hora.split(':')
var n0= num[0];
var n1= num[1];
var n2= num[2];
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let codigo = '';
for (let i = 0; i < 8; i++) {
codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}
document.getElementById('input_codigo').value= codigo+n1+n2
}
};
//Sair do Cadastro
function lbl_sair_Cad(){
document.getElementById('body02').style.display='block';
document.getElementById('div_cadastro').style.display='none';
}
// Formatar data
function formatarDataS(input) {
var data = sessionStorage.getItem('data');
var hora = sessionStorage.getItem('hora');
var valor = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos
if (valor.length > 2) valor = valor.slice(0, 2) + '/' + valor.slice(2);
if (valor.length > 5) valor = valor.slice(0, 5) + '/' + valor.slice(5, 9);
input.value = valor;
if (valor.length > 9){
       input.value = `${valor}`;
}
};
//Alerta de carregamento
function mostrarAlerta() {
Swal.fire({
title: `Carregando arquivo... `,
text: `Aguarde carregando...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
Swal.showLoading();
 document.body.style.paddingRight = '0px';        
}
});
};
//Alerta do cadastro
function mostrarAlertaSalv() {
Swal.fire({
title: `Salvando Cadastro... `,
text: `Aguarde salvando...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
Swal.showLoading();
 document.body.style.paddingRight = '0px';        
}
});
};
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
}else{
Swal.close()
}

},5000)

}

//Limpar inputs do cadastro
function LimparCad(){
document.getElementById('select_lista').value='';
document.getElementById('input_nome').value='';
document.getElementById('select_Departamentos_Ministerial').value=''; 
document.getElementById('input_Titulo').value='';
document.getElementById('input_descriçao').value='';
document.getElementById('input_formato').value='';
document.getElementById('criaçãoData').value='';
document.getElementById('img_apresent').src='../src/Logo_ASD.png';
document.getElementById('input_canvas').value='';
sessionStorage.setItem('ArquivoUrl',``);
document.getElementById('input_criador').value= '';
var url_imagem=''
};
// Subir Arquivos IMG, GIF, Design...
function selectIMG(){
var lista= document.getElementById('select_lista').value;
var nome= document.getElementById('input_nome').value;
var departamento= document.getElementById('select_Departamentos_Ministerial').value;

if(!lista||lista==''||!departamento||departamento==''||!nome||nome==''){
Swal.fire('Preencha todos os Campoa acima!','','warning')
}else{
if(lista=='logos'||lista=='design'){
var formato='.png'
} else if(lista=='GIF'){
var formato='.gif'
} else if(lista=='video'){
  var formato='.mp4'
}else{

}
var resp=  document.getElementById('input_codigo').value;
document.getElementById('Files').click()
var firebaseConfig= {
apiKey: "AIzaSyD7q-qzsIhACByHciJkDBI3yPuKK_bgHUM",
authDomain: "logos-asd.firebaseapp.com",
projectId: "logos-asd",
storageBucket: "logos-asd.firebasestorage.app",
messagingSenderId: "801633317687",
appId: "1:801633317687:web:3a38f39b2e9861902e20b2",
measurementId: "G-GJEW931Y73"
};
firebase.initializeApp(firebaseConfig); 
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('Files');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${resp}/${nome}${formato}`);

var task = storageRef.put(file);
mostrarAlerta()
task.on('state_changed', function progress(snapshot) {
var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
uploader.value = percentage;
}, function error(err) {
}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem) {
Swal.close()
sessionStorage.setItem('Nome_arquivo',`${resp}/${nome}${formato}`)
document.getElementById('myProgress').style.display = 'block'

var i = 0;
if (i == 0) {
i = 1;
var elem = document.getElementById("myBar");
var width = 1;
var id = setInterval(frame, 30);
function frame() {
if (width >= 100) {
clearInterval(id);
i = 0;                     
document.getElementById('img_apresent').src=url_imagem  
// document.getElementById('img6').value=`${url_imagem}`
sessionStorage.setItem('ArquivoUrl',`${url_imagem}`)   

setTimeout(function(){
document.getElementById('a_visible_img').click()    
document.getElementById('myProgress').style.display = 'none'
},1000)
} else {
width++;
elem.style.width = width + "%";
elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
}
}
}
})
})
})  
}      
};
//botão para ver a imagem no cadastro
function click_IMG(){
var imagem= sessionStorage.getItem('ArquivoUrl') ;
var nomeArquivo= sessionStorage.getItem('Nome_arquivo')
if(!imagem ||imagem==''){
swal('',`${nomeArquivo}`,`../src/Logo_ASD.png`)
} else{
swal('','',`${imagem}`)
}

};

// botão para salvar o cadastro
function SalvarCad(){
var lista= document.getElementById('select_lista').value;
var nome= document.getElementById('input_nome').value;
var departamento= document.getElementById('select_Departamentos_Ministerial').value; 
var titulo= document.getElementById('input_Titulo').value;
var descriçao= document.getElementById('input_descriçao').value;
var formato=   document.getElementById('input_formato').value;
var data_criação=   document.getElementById('criaçãoData').value;
var codigo= document.getElementById('input_codigo').value;
var arquivo= sessionStorage.getItem('ArquivoUrl') 
var nomeArquivo= sessionStorage.getItem('Nome_arquivo')
var data = sessionStorage.getItem('data');
var hora = sessionStorage.getItem('hora');
var urlCanvas= document.getElementById('input_canvas').value;
var criador= document.getElementById('input_criador').value;

if(!lista||lista==''||!titulo||titulo==''||!departamento||departamento==''||!descriçao||descriçao==''||!formato||formato==''||!codigo||codigo==''||!nome||nome=='') {
Swal.fire('Preencha todos os Campoa acima!','','warning')
}else{
var firebaseConfigure= {
apiKey: "AIzaSyD7q-qzsIhACByHciJkDBI3yPuKK_bgHUM",
authDomain: "logos-asd.firebaseapp.com",
projectId: "logos-asd",
storageBucket: "logos-asd.firebasestorage.app",
messagingSenderId: "801633317687",
appId: "1:801633317687:web:3a38f39b2e9861902e20b2",
measurementId: "G-GJEW931Y73"
};
firebase.initializeApp(firebaseConfigure); 
var dbcd= firebase.firestore();
mostrarAlertaSalv('click')
dbcd.collection(`Coleção_${lista}`).doc(`${codigo}`).set({

Lista: lista,
Departamento:departamento,
Titulo: titulo,
Nome:nome,
Descrição: descriçao,
Formato: formato,
Data_criação: data_criação,
Código:codigo,
Especifc: lista,
Data: data,
Hora: hora,
URL: arquivo,
Nome_Arquivo:nomeArquivo,
Canvas:urlCanvas,
Criador:criador,

});
var dbcc= firebase.firestore();
dbcc.collection(`Codigos`).doc(`${codigo}`).set({

Lista: lista,
Departamento:departamento,
Titulo: titulo,
Nome:nome,
Descrição: descriçao,
Formato: formato,
Data_criação: data_criação,
Código:codigo,
Especifc: lista,
Data: data,
Hora: hora,
URL: arquivo,
Nome_Arquivo:nomeArquivo,
Canvas:urlCanvas,
Criador:criador,

})
setTimeout(function(){
Swal.fire('Sucesso!','Aquivo salvo com sucesso! ','success')
document.getElementById('aVisible_heaad').click()
setInterval(function(){
window.location.reload()
},2000)
},4000)

}      

}
//btns complementares 
function Home(){
document.getElementById('aVisible_heaad').click()
};


// sair lista
function lbl_sair_lista(){
var respItens= document.getElementById('p_itens_list');
var arquivos= document.getElementById('lbl_arquivos');
var lista = document.getElementById('listas');
lista.innerHTML = '';
arquivos.innerHTML= ''
respItens.innerHTML= 'Arquivos';
document.getElementById('lbl_sair_lista').style.display='none'
document.getElementById('select_procuraTdlist').value='';

}
//Selec lista do heaader função optino botão
function select(){
document.getElementById('lbl_sair_lista').style.display='none'
document.getElementById('body02').style.display='block';
document.getElementById('div_cadastro').style.display='none';
var respItens= document.getElementById('p_itens_list');
var arquivos= document.getElementById('lbl_arquivos');
sessionStorage.setItem('itens',``)
var resp=  document.getElementById('select_procuraTdlist').value;
if(!resp||resp==''){
document.getElementById('lbl_sair_lista').style.display='none'
var lista = document.getElementById('listas');
lista.innerHTML = '';
arquivos.innerHTML= ''
respItens.innerHTML= 'Arquivos';
}else{

respList('click')
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
var produtosRef = db.collection(`Coleção_${resp}`);
var lista = document.getElementById('listas');
lista.innerHTML = '';
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens= querySnapshot.size

var div1=document.createElement('div');
var div2=document.createElement('div');
var div3=document.createElement('div');        
var img=document.createElement('img');
var botão1= document.createElement('button');
var botão2= document.createElement('button'); 
var label1= document.createElement('label');
var label2= document.createElement('label'); 
var label3= document.createElement('label');
var br1=  document.createElement('br');
var br2=  document.createElement('br');  
var br3=  document.createElement('br');  
var br4=  document.createElement('br');
var br5=  document.createElement('br'); 

div1.id='div1List';
div2.id='div2List';
img.id='imgList';
label1.id='label1List';
label2.id='label2List'; 
label3.id='label3List';
botão1.id='botão1List';
botão2.id='botão2List'; 

img.src=`${doc.URL}`;
label1.textContent=`${doc.Titulo}`;
label2.textContent=`${doc.Nome}`;
label3.textContent=`Código: ${doc.Código}`;
botão1.textContent='';
botão1.className=`fa-solid fa-pen-to-square`;
botão2.textContent='';
botão2.className=`fa-solid fa-trash`;


div1.appendChild(img);
div2.appendChild(label1);
div2.appendChild(br1); 
div2.appendChild(label2); 
div2.appendChild(br2); 
div2.appendChild(label3); 
div3.appendChild(botão1);
div3.appendChild(br3); 
div3.appendChild(br4); 
div3.appendChild(botão2); 
div1.appendChild(div2);
div1.appendChild(div3);
lista.appendChild(div1) ;

sessionStorage.setItem('itens',`${itens}`)
respItens.innerHTML= itens;
arquivos.innerHTML= doc.Lista
document.getElementById('lbl_sair_lista').style.display='block'

img.addEventListener('click',function(){
swal('',`${doc.Nome}`,`${doc.URL}`)
});
botão1.addEventListener('click',function(){
document.getElementById('body02').style.display='none';
document.getElementById('div_cadastro').style.display='block';
document.getElementById('select_lista').value= doc.Lista;
document.getElementById('input_nome').value= doc.Nome;
document.getElementById('select_Departamentos_Ministerial').value= doc.Departamento; 
document.getElementById('input_Titulo').value= doc.Titulo;
document.getElementById('input_descriçao').value= doc.Descrição;
document.getElementById('input_formato').value= doc.Formato;
document.getElementById('criaçãoData').value= doc.Data_criação;
document.getElementById('input_canvas').value= doc.Canvas;
document.getElementById('img_apresent').src= doc.URL;
document.getElementById('input_codigo').value= doc.Código;
document.getElementById('input_criador').value= doc.Criador;
sessionStorage.setItem('ArquivoUrl',doc.URL) 
sessionStorage.setItem('Nome_arquivo',doc.Nome_Arquivo)
 
});
botão2.addEventListener('click',function(){

Swal.fire({
title: `Excluir Arquivo!`,
html:` <div  class="menu-container">
<p>Digite o código e click em Excluir. <br> A exclusão não podera ser desfeita!</p>
<br>
<input id='inputEx' type='text' placeHolder='Digite código...'>
<br><br>
<button id="SwalExCód" title="">Excluir <i class="fa-solid fa-trash"></i></button>
<br><br>  <button id='Sair' class='cancelar'> Cancelar </button>
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
document.getElementById('SwalExCód').addEventListener('click',function(){
var respC= doc.Código;
var respINP= document.getElementById('inputEx').value;
if(respC == respINP){

var dbex = firebase.firestore();
dbex.collection(`Coleção_${doc.Lista}`).doc(respINP).delete();

setTimeout(function(){
var db= firebase.firestore();
db.collection(`Codigos`).doc(respC).delete();
},1200)

var img_file = firebase.storage();
var mm = img_file.ref(`${doc.Nome_Arquivo}`);
// Deletar o arquivo
mm.delete().then(() => {
// window.swal('Sucesso!','Imagem deletada do banco de dados','success')
}).catch((error) => {
window.swal('ERRO!','','error')
});

Swal.fire({
title: `Deletando Arquivos... `,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
   Swal.showLoading();
    document.body.style.paddingRight = '0px';        
}
});
setTimeout(function(){
Swal.fire('Sucesso!','','success')
setTimeout(function(){
select('click')
},2000)
},5000)

}else{
Swal.fire('Código incorreto','O Código digitado não corresponde ao arquivo que você deseja excluir.<br><br>Tente Novamente!','error')
}
});
});
})
})
}
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

   

