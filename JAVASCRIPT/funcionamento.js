 // Seleciona todas as cadeiras
 var cadeiras = document.querySelectorAll('.cadeiras');
 var resultado = document.getElementById('resultado')
 var prosseguir = document.getElementById('prosseguir')

 // Adiciona o evento de clique a cada uma
 cadeiras.forEach(function(cadeira) {
     cadeira.addEventListener("click", function() {
         cadeira.style.backgroundColor = "yellow"; // Muda a cor ao clicar
         resultado.style.display = "block"
         resultado.innerText = "Lugar " + cadeira.innerText + " selecionado";
         prosseguir.style.display = "block"  
    });
 });