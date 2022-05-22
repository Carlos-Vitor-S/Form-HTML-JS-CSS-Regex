
/*Container da textarea e a seleção do checkbox*/
var checkBoxPainel = document.querySelector("#habilitarPainel")
var divPainel = document.querySelector(".containerPainel")

/*botão final de envio dos dados */
var botaoApresentar = document.querySelector("#botaoApresentar")

/*Container da listagem de dados e botão para fechar listagem*/
var containerModal = document.querySelector(".containerModal")
var botaoFecharModal = document.querySelector("#botaoFecharModal")

 /*Pegando os valores dos inputs do form e definindo nas tags de apresentação dos dados*/

const formularioGeral = document.querySelector("form")
document.querySelector("form").addEventListener("submit", (evento)=>{
    evento.preventDefault()
    
   

    const formulario = evento.target
    var texto1 = document.querySelector("#textoPainel").value
   
    const formNascimento = Intl.DateTimeFormat("pt-BR", {timeZone: "UTC",}).format(new Date(formulario.nascimento.value))
    
    document.querySelector("#listarNome").innerHTML = `Nome: ${formulario.nome.value}`  
    document.querySelector("#listarSexo").innerHTML = `Sexo: ${formulario.sexo.value}` 
    document.querySelector("#listarIdade").innerHTML = `Idade: ${formulario.idade.value}`
    document.querySelector("#listarNascimento").innerHTML = `Data Nascimento: ${formNascimento}`
    //document.querySelector("#listarTotalPalavras").innerHTML = `Total de Palavras: ${contarTexto(formulario.TextoArea.value)}`

    var totalTexto = contarTexto(texto1)
    document.querySelector("#listarTotalPalavras").innerHTML = `Total de Palavras: ${totalTexto}`
    
    if (totalTexto!=null){
        
        var totalExcessoes = contarExcessoesTextuais(texto1)
        document.querySelector("#listarTotalPalavras").innerHTML = `Total de Palavras: ${totalTexto - totalExcessoes}`
    }

    
})

checkBoxPainel.addEventListener("click", ()=>{
    /*Evento criado ao ativar/desativar o checkbox fazendo aparecer o painel da area de texto*/
    if(checkBoxPainel.checked){
        divPainel.style.display = "block"
    }
    else {
        divPainel.style.display = "none"
    }

})

botaoApresentar.addEventListener("click" , ()=>{
     
    if(containerModal.style.display != "none"){
        containerModal.style.display = "none"
    }
    else{
        containerModal.style.display = "flex"
    }
    
})




formularioGeral.addEventListener("submit" , ()=>{
    if(containerModal.style.display != "none"){
        containerModal.style.display = "none"
    }
    else{
        containerModal.style.display = "flex"
    }
    
})



botaoFecharModal.addEventListener("click" , ()=>{
    if(containerModal.style.display != "none"){
        containerModal.style.display = "none"
    }
    

})

function contarTexto(contadorTexto){
    /*Função contar total de espaços em branco e retorna o total de palavras*/
    
    contadorTexto = contadorTexto.replace(/(^\s*)|(\s*$)/gi,"");
	contadorTexto = contadorTexto.replace(/[ ]{2,}/gi," ");
	contadorTexto = contadorTexto.replace(/\n /,"\n");
    
    return contadorTexto.split(' ').filter(function(str){return str!="";}).length;
    
}


function contarExcessoesTextuais(textoExcessoes){

    // \d+ = digitos numericos
    // \[%#@$&*'"~^´`] = caracteres especiais
    // \b[b-df-hj-np-tv-z]+\b = consoantes

    textoExcessoes.split(/[,.?!\s/]+/)
  
    textoExcessoes = textoExcessoes.match(/\d+|[%#@$&*'"~^`.,]+|\b[b-df-hj-np-tv-z]+\b/gi)

    //retorna o total de excessoes
    
    return textoExcessoes.length
    
      
}







