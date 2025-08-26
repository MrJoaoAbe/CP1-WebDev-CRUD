let jogadoras = [
  {
    nome: "Andressa Alves",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/andressa.jpg",
    gols: 15,
    assistencias: 10,
    jogos: 28,
    favorita: false
  },
  {
    nome: "Dayana Rodríguez",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/dayana.jpg",
    gols: 5,
    assistencias: 12,
    jogos: 30,
    favorita: false
  },
  {
    nome: "Mariza",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/mariza.jpg",
    gols: 2,
    assistencias: 1,
    jogos: 32,
    favorita: false
  },
  {
    nome: "Thaís Regina",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/thais.jpg",
    gols: 1,
    assistencias: 2,
    jogos: 25,
    favorita: false
  },
  {
    nome: "Letícia Teles",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/leticia.jpg",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false
  }
]

// Inicialização
window.onload = function() {
    carregarJogadorasLocalStorage();

    const form = document.getElementById('jogadoraForm');
    const lista = document.getElementById('jogadoraList');

    if (form) {
        form.addEventListener('submit', addJogadora);
    }

    if (lista) {
        displayJogadora();
        lista.addEventListener('click', handleClick);
    }
}

function handleClick(event){
    const acaoBotao = event.target.dataset.action;
    const IndiceJogadora = event.target.dataset.index;

    if (acaoBotao == "Favoritar") {
        jogadoras[IndiceJogadora].favorita = !jogadoras[IndiceJogadora].favorita;
        salvarLocalStorage()
        displayJogadora()
    }
}

function displayJogadora(){
    const jogadoraList = document.getElementById('jogadoraList');
    jogadoraList.innerHTML = '';

    jogadoras.forEach((pegaJogadora, index) => {
        const jogadoraElement = document.createElement('div');
        jogadoraElement.classList.add('card-jogadora');

        jogadoraElement.innerHTML = `
        <div>
        <br>
        <h1>${pegaJogadora.nome}</h1>
        <br>
        <p>Posição: ${pegaJogadora.posicao}</p>
        <p>Clube: ${pegaJogadora.clube}</p>
        <br>
        ${pegaJogadora.foto ? `<img src="${pegaJogadora.foto}" alt="Imagem da Jogadora" style="max-width:150px;">` : ""}
        <br>
        <p>Gols: ${pegaJogadora.gols} Assistencias: ${pegaJogadora.assistencias}</p>
        <p>Jogos: ${pegaJogadora.jogos}</p>
        <br>
        <p>Favorita: ${pegaJogadora.favorita ? "⭐ Sim" : "Não"}</p>
        <button data-action="Favoritar" data-index=${index}>
        <i class="fa-regular fa-bookmark"></i>
        Favoritar</button>
        <br>
        </div>
        `

        jogadoraList.append(jogadoraElement);
    })
}

function addJogadora(event){
    event.preventDefault();

    const jogadoraName =        document.getElementById('jogadoraName').value
    const jogadorapostPosicao = document.getElementById('jogadorapostPosicao').value
    const jogadoraClube =       document.getElementById('jogadoraClube').value
    const jogadoraFoto =        document.getElementById('jogadoraFoto').value
    const jogadoraGols =        document.getElementById('jogadoraGols').value
    const jogadoraAssist =      document.getElementById('jogadoraAssist').value
    const jogadoraJogos =       document.getElementById('jogadoraJogos').value

    if (jogadoraName == "" || jogadorapostPosicao == "" || jogadoraClube == "" || jogadoraFoto == "" || jogadoraGols == "" || jogadoraAssist == "" || jogadoraJogos == "") {
        alert("Preencha todos os campos para se cadastrar")
    }
    else{
            const jogadora = {
                    nome: jogadoraName,
                    posicao: jogadorapostPosicao,
                    clube: jogadoraClube,
                    foto: jogadoraFoto,
                    gols: jogadoraGols,
                    assistencias: jogadoraAssist,
                    jogos: jogadoraJogos,
                    favorita: false
                }
            
                jogadoras.unshift(jogadora);
                salvarLocalStorage()
            
                document.getElementById('jogadoraForm').reset()
                alert("Jogadora adicionada com sucesso")
        }
}

function salvarLocalStorage(){
    localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

function carregarJogadorasLocalStorage(){
    let jogadorasGuardadas = localStorage.getItem("jogadoras");

    if (jogadorasGuardadas) {
        jogadoras = JSON.parse(jogadorasGuardadas)
    }
}