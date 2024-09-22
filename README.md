# FeedNow

## Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Instruções de Instalação](#instruções-de-instalação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)

## Sobre o Projeto
O **FeedNow** é uma aplicação web onde os usuários podem fazer login e visualizar um feed de postagens. A aplicação utiliza **Angular 17** e **Angular Material** para criar um design clean e moderno, proporcionando uma boa experiência de usuário. O projeto inclui funcionalidades de autenticação e exibe postagens armazenadas em um servidor fake criado com **json-server**.

## Instruções de Instalação

### Pré-requisitos
- **Node.js** versão `20.14` ou superior.
- **Angular CLI** instalado globalmente:
  ```bash
  npm install -g @angular/cli
  ```

### Passos para rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone git@github.com:riltonbispo/restic36-u5-projeto2.git
   cd restic36-u5-projeto2
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor JSON para as publicações:**
   O **json-server** será usado como uma API fake.
   ```bash
   npx json-server --watch src/assets/data/db.json
   ```

4. **Inicie o servidor local do Angular:**
   ```bash
   npm run start
   ```

5. **Acesse a aplicação:**
   Abra o navegador e vá até `http://localhost:4200` para visualizar o projeto.

## Tecnologias Utilizadas
- **Angular 17**: Framework front-end para criação de SPAs.
- **Angular Material**: Conjunto de componentes UI para Angular.
- **TypeScript**: Linguagem principal do projeto.
- **json-server**: Servidor fake para simulação de uma API REST.
- **HTML/CSS**: Para a estrutura e estilização da interface.

## Como Usar
1. Faça login usando um email e senha válidos.
2. Após o login, você será redirecionado para a página de feed, onde poderá visualizar as postagens.
3. As postagens são carregadas a partir de uma API fake fornecida pelo **json-server**.

## Funcionalidades
- **Autenticação de Usuário**: A aplicação contém uma página de login onde o usuário deve inserir seu email e senha.
- **Feed de Publicações**: Após o login, o usuário é redirecionado para uma página de feed onde as postagens são carregadas e exibidas usando componentes do **Angular Material** como `mat-card` e `mat-grid-list`.

## Contribuição
Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um **fork** do repositório.
2. Crie uma nova branch para sua feature ou correção de bug (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um **Pull Request**.
