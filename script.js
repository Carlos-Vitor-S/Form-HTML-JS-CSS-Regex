var botaoApresentar = document.querySelector("#botaoApresentar")
var divPainelExibicao = document.querySelector(".containerExibicao")

var checkBoxPainel = document.querySelector("#habilitarPainel")
var divPainel = document.querySelector(".containerPainel")

checkBoxPainel.addEventListener("click", function(){
   
    if(checkBoxPainel.checked){
        divPainel.style.display = "block"
    }
    else {
        divPainel.style.display = "none"
    }

})

botaoApresentar.addEventListener("click" , function(){

    
    if(divPainelExibicao.style.display != "block"){
        divPainelExibicao.style.display = "block"
    }
    else{
        divPainelExibicao.style.display = "none"
    }

})

botaoApresentar.addEventListener("click" , function(e){
    e.preventDefault();
    
    /* Pegar valor do formulario*/
    var formNome = document.querySelector("#nome").value
    var formIdade = document.querySelector("#idade").value
    var formSex = document.querySelector('input[name="escolher"]:checked').value
    var formTexto = document.querySelector("#textoPainel").value
    
    /*Pegar valor dos elementos da lista*/
    var listarNome = document.querySelector("#listarNome")
    var listarSexo = document.querySelector("#listarSexo")
    var listarIdade = document.querySelector("#listarIdade")
    var listarNascimento = document.querySelector("#listarNascimento")
    var listarTotalPalavras = document.querySelector("#listarTotalPalavras")

    var formulario = document.querySelector("form").value
    
    /*pegar total de palavras*/
    var conversao = contarTexto()

    /*coletar valor do formulario e adicionar ao objeto Date*/
    var dataConversor = new Date(document.querySelector("input[type=date]").value);         

    listarNome.innerHTML += formNome
    /*definir valor para timezone UTC e formatar exibição para padrão pt-br */
    listarNascimento.innerHTML += Intl.DateTimeFormat("pt-BR", {timeZone: "UTC",}).format(dataConversor);
    listarIdade.innerHTML += formIdade
    listarSexo.innerHTML += formSex
    listarTotalPalavras.innerHTML += conversao 
       
    formulario.reset()

   
})

function contarTexto(){
    /*Função contar total de espaços em branco e retorna o total de palavras*/

    var contadorTexto = document.querySelector("#textoPainel").value
    contadorTexto = contadorTexto.replace(/(^\s*)|(\s*$)/gi,"");
	contadorTexto = contadorTexto.replace(/[ ]{2,}/gi," ");
	contadorTexto = contadorTexto.replace(/\n /,"\n");
    
    return contadorTexto.split(' ').filter(function(str){return str!="";}).length;
    
    
    
    
    /*var conversorTexto = formTexto.split(" ")
    var conversorTextoVirgula = formTexto.split(", ")
    var conversorPonto = formTexto.split(". ")
    var tamanhoTexto = conversorTexto.length
    return tamanhoTexto*/
}



