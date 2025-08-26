# CP1-WebDev-CRUD
## CP1 - WebDev CRUD de Jogadoras
Descrição do Projeto

Este projeto é uma aplicação web que permite gerenciar uma lista de jogadoras de futebol feminino. Ele implementa as operações **CRUD** (Create, Read, Update, Delete) utilizando **HTML, CSS e JavaScript**, e persiste os dados no **LocalStorage** do navegador.

A aplicação apresenta as jogadoras no formato de cards, exibindo foto, nome, posição, clube e estatísticas, com a possibilidade de favoritar jogadoras.

---

## Funcionalidades
**Requisitos obrigatórios**

Inicialização

- O JSON inicial com as jogadoras é salvo no LocalStorage na primeira execução da aplicação.

**Listagem (Read)**

- Exibe todas as jogadoras em cards com: foto, nome, posição, clube e estatísticas.

- Permite favoritar jogadoras, utilizando um ícone de estrela/coração, e salva essa preferência no LocalStorage.

**Cadastro (Create)**

- Formulário com os campos: nome, posição, clube, estatísticas e foto (URL).

- Campos obrigatórios: não permite respostas vazias.

- Feedback ao usuário: Jogadora adicionada com sucesso!.

**Edição (Update)**

- Permite modificar os dados de uma jogadora existente, inclusive a foto.

- Feedback ao usuário: Jogadora editada com sucesso!.

**Remoção (Delete)**

- Permite excluir uma jogadora da lista.

- Feedback ao usuário: Jogadora removida com sucesso!.

**Bônus**

- Campo de **busca** por nome ou posição.

- Campo de **filtro** por time.

- Botões para **ordenar** as jogadoras por nome ou posição.

---

## Estrutura de Arquivos
CP1-WebDev-CRUD/
│
├─ index.html            # Página principal de listagem de jogadoras
├─ paginaCadastro.html   # Página de cadastro/edição de jogadoras
├─ style.css             # Estilos da aplicação
├─ script.js             # Lógica de CRUD e interações
├─ img/                  # Pasta com imagens utilizadas no projeto
│   └─ 9655-prio-800.jpg
├─ LICENSE               # Licença do projeto
└─ README.md             # Este arquivo

---

## Tecnologias Utilizadas

- **HTML5** – Estrutura das páginas.

- **CSS3** – Estilos e layout responsivo.

- **JavaScript** (Vanilla) – Lógica de CRUD e manipulação do LocalStorage.

- **LocalStorage** – Armazenamento de dados local no navegador.

---

## Integrantes do Grupo

- João Victor de Souza Abe | RM: **561446**
- Henry Browne | RM: **562622**

---

## Link da página WEB
[Veja a página web](link)