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
];

let indiceEdicao = null; // índice da jogadora em edição

// Inicialização
window.onload = function() {
    carregarJogadorasLocalStorage();

    const btnCadastrar = document.getElementById('btnCadastrar');
    const btnEditar = document.getElementById('btnEditar');
    const btnRemover = document.getElementById('btnRemover');
    const lista = document.getElementById('jogadoraList');

    if (btnCadastrar) btnCadastrar.addEventListener('click', addJogadora);
    if (btnEditar) btnEditar.addEventListener('click', salvarEdicao);
    if (btnRemover) btnRemover.addEventListener('click', removerJogadora);

    if (lista) {
        displayJogadora();
        lista.addEventListener('click', handleClick);
    }

    // Se veio da tela de edição
    indiceEdicao = localStorage.getItem("indiceEdicao");
    if (indiceEdicao !== null && jogadoras[indiceEdicao]) {
        preencherFormulario(jogadoras[indiceEdicao]);
    }
}

function handleClick(event){
    const acaoBotao = event.target.dataset.action;
    const indiceJogadora = event.target.dataset.index;

    if (!acaoBotao) return;

    if (acaoBotao === "Favoritar") {
        jogadoras[indiceJogadora].favorita = !jogadoras[indiceJogadora].favorita;
        salvarLocalStorage();
        displayJogadora();
    }

    if (acaoBotao === "Remover") {
        if (confirm("Tem certeza que deseja remover esta jogadora?")) {
            jogadoras.splice(indiceJogadora, 1);
            salvarLocalStorage();
            displayJogadora();
            alert("Jogadora removida com sucesso!");
        }
    }

    if (acaoBotao === "Editar") {
        localStorage.setItem("indiceEdicao", indiceJogadora);
        window.location.href = "paginaCadastro.html";
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
        <button data-action="Favoritar" data-index=${index}>Favoritar</button>
        <button data-action="Editar" data-index=${index}>Editar</button>
        <button data-action="Remover" data-index=${index}>Remover</button>
        <br>
        </div>
        `;
        jogadoraList.append(jogadoraElement);
    })
}

function addJogadora(){
    const jogadora = lerFormulario();

    if (!jogadora) {
        alert("Preencha todos os campos para se cadastrar");
        return;
    }

    jogadoras.unshift(jogadora);
    salvarLocalStorage();
    document.getElementById('jogadoraForm').reset();
    alert("Jogadora adicionada com sucesso!");
}

function salvarEdicao() {
    if (indiceEdicao === null) {
        alert("Nenhuma jogadora selecionada para edição.");
        return;
    }

    const jogadora = lerFormulario();
    if (!jogadora) return;

    jogadoras[indiceEdicao] = { 
        ...jogadora, 
        favorita: jogadoras[indiceEdicao].favorita 
    };

    salvarLocalStorage();
    alert("Jogadora editada com sucesso!");
    localStorage.removeItem("indiceEdicao");
    document.getElementById('jogadoraForm').reset();
}

function removerJogadora() {
    if (indiceEdicao === null) {
        alert("Nenhuma jogadora selecionada para remoção.");
        return;
    }

    if (confirm("Tem certeza que deseja remover esta jogadora?")) {
        jogadoras.splice(indiceEdicao, 1);
        salvarLocalStorage();
        alert("Jogadora removida com sucesso!");
        localStorage.removeItem("indiceEdicao");
        document.getElementById('jogadoraForm').reset();
    }
}

// ---- Funções auxiliares ----
function salvarLocalStorage(){
    localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

function carregarJogadorasLocalStorage(){
    let jogadorasGuardadas = localStorage.getItem("jogadoras");
    if (jogadorasGuardadas) {
        jogadoras = JSON.parse(jogadorasGuardadas);
    }
}

function preencherFormulario(jogadora){
    document.getElementById('jogadoraName').value = jogadora.nome;
    document.getElementById('jogadorapostPosicao').value = jogadora.posicao;
    document.getElementById('jogadoraClube').value = jogadora.clube;
    document.getElementById('jogadoraFoto').value = jogadora.foto;
    document.getElementById('jogadoraGols').value = jogadora.gols;
    document.getElementById('jogadoraAssist').value = jogadora.assistencias;
    document.getElementById('jogadoraJogos').value = jogadora.jogos;
}

function lerFormulario(){
    const nome = document.getElementById('jogadoraName').value;
    const posicao = document.getElementById('jogadorapostPosicao').value;
    const clube = document.getElementById('jogadoraClube').value;
    const foto = document.getElementById('jogadoraFoto').value;
    const gols = document.getElementById('jogadoraGols').value;
    const assistencias = document.getElementById('jogadoraAssist').value;
    const jogos = document.getElementById('jogadoraJogos').value;

    if (!nome || !posicao || !clube || !foto || !gols || !assistencias || !jogos) {
        return null;
    }

    return { nome, posicao, clube, foto, gols, assistencias, jogos, favorita: false };
}
