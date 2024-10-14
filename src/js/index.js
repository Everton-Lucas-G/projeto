const listaSelecaoPokedev = document.querySelectorAll(".pokedev");

listaSelecaoPokedev.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev();
        
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        desativarPokedevNaListagem();

        ativarPokedevSelecionadonaListagem(idPokedevSelecionado);
    });
});

function ativarPokedevSelecionadonaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    if (pokedevSelecionadoNaListagem) {
        pokedevSelecionadoNaListagem.classList.add("ativo");
    }
}

function desativarPokedevNaListagem() {
    const pokeedevAtivoNAListagem = document.querySelector(".ativo");
    if (pokeedevAtivoNAListagem) {
        pokeedevAtivoNAListagem.classList.remove("ativo");
    }
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    if (cartaoPokedevParaAbrir) {
        cartaoPokedevParaAbrir.classList.add("aberto");
    }
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    if (cartaoPokedevAberto) {
        cartaoPokedevAberto.classList.remove("aberto");
    }
}
