# Cadastro de Usuários

## Sobre o projeto

Este projeto consiste em um sistema de cadastro de usuários desenvolvido com HTML, CSS, JavaScript, Node.js e SQLite. O objetivo é permitir o cadastro e a consulta de usuários, armazenando suas informações em um banco de dados para que permaneçam salvas mesmo após atualizar ou fechar a página.

## Funcionalidades

- Cadastro de usuários com nome, email e telefone.
- Armazenamento dos dados em um banco de dados SQLite.
- Consulta dos usuários cadastrados.
- Exibição dos usuários em uma lista organizada.
- Recuperação dos dados ao atualizar a página.
- Mensagens de sucesso ou erro durante o cadastro.
- Limpeza automática do formulário após um cadastro bem-sucedido.

## Tecnologias utilizadas

- **HTML5:** estrutura da página e do formulário.
- **CSS3:** estilização e organização dos elementos.
- **JavaScript:** interação com a página, validação dos dados e comunicação com o servidor.
- **Node.js:** execução do servidor e processamento das requisições.
- **SQLite:** armazenamento persistente das informações dos usuários.

## Como funciona

O usuário preenche o formulário e envia os dados. O JavaScript captura as informações e utiliza `fetch()` para enviá-las ao servidor Node.js por meio de uma requisição HTTP `POST`.

O servidor recebe os dados e utiliza o SQLite para armazená-los na tabela `tb_usuarios`.

Para consultar os usuários cadastrados, o navegador realiza uma requisição `GET`. O servidor executa um comando SQL `SELECT`, recupera os registros do banco e devolve os dados em formato JSON. O JavaScript utiliza essas informações para montar a lista de usuários na página.

Como os dados ficam armazenados no banco de dados, eles continuam disponíveis mesmo após atualizar a página.

## Estrutura do projeto

```text
Cadastrousua/
├── backend/
│   ├── data/
│   │   └── Banco-de-dados.db
│   ├── node_modules/
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── index.html
    └── style.css
```

## Como executar o projeto

### 1. Pré-requisitos

É necessário ter o [Node.js](https://nodejs.org/) instalado no computador.

### 2. Instalar as dependências

Abra o terminal na pasta `backend` e execute:

```bash
npm install
```

### 3. Iniciar o servidor

Ainda dentro da pasta `backend`, execute:

```bash
node server.js
```

### 4. Acessar a aplicação

Abra o navegador e acesse:

```text
http://localhost:3000
```

## Banco de dados

O projeto utiliza o SQLite para armazenar os registros na tabela `tb_usuarios`, que contém os seguintes campos:

| Campo | Descrição |
|---|---|
| `nome` | Nome do usuário |
| `email` | Email do usuário |
| `telefone` | Telefone do usuário |

Os registros são armazenados no arquivo `backend/data/Banco-de-dados.db`.

## Autor

Projeto desenvolvido para fins educacionais, com o objetivo de praticar desenvolvimento web, criação de servidores com Node.js e integração com banco de dados SQLite.
