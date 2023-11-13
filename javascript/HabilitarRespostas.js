function mostrarOcultarParagrafo() {
    var paragrafo = document.getElementById("../part2/emprestimo/hidden-paragraph");
    
    if (paragrafo.style.display === "none" || paragrafo.style.display === "") {
        paragrafo.style.display = "block"; // Mostra o parágrafo
    } else {
        paragrafo.style.display = "none"; // Oculta o parágrafo
    }
}
