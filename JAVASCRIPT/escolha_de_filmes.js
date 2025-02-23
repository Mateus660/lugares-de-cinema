var filmes = document.querySelectorAll(".filmes");
var pros = document.getElementById('pros');

filmes.forEach(function (filme) {
    filme.addEventListener("click", function () {
        // Remove a borda de todos os filmes antes de selecionar um novo
        filmes.forEach(f => f.style.border = "none");

        // Adiciona a borda apenas no filme clicado
        filme.style.border = "3px solid black";
        filme.style.padding = "5px"
        pros.style.display = 'block';

    });

    function prosseguir() {
        location.href = "http://127.0.0.1:5500/HTML/sala-de-cinema.html"
    }
});
