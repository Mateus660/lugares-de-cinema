 // Seleciona todas as cadeiras
 var cadeiras = document.querySelectorAll('.cadeiras');

 // Adiciona o evento de clique a cada uma
 cadeiras.forEach(function(cadeira) {
     cadeira.addEventListener("click", function() {
         cadeira.style.backgroundColor = "yellow"; // Muda a cor ao clicar
         
     });
 });