const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
        manipulaDados(e.target.textContent, e.target.parentNode)
        
    })
})
    
function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador")
    
    if (operacao ==="subtrair"){
        peca.value = parseInt(peca.value) -1
    }else{
        peca.value = parseInt(peca.value) +1
    }

}

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
