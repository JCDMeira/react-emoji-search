# Projeto de react-emoji-search

<p align="center">
  <image
  src="https://img.shields.io/github/languages/count/JCDMeira/react-emoji-search"
  />
  <image
  src="https://img.shields.io/github/languages/top/JCDMeira/react-emoji-search"
  />
  <image
  src="https://img.shields.io/github/last-commit/JCDMeira/react-emoji-search"
  />
  <image
  src="https://img.shields.io/github/watchers/JCDMeira/react-emoji-search?style=social"
  />
</p>

# 📋 Indíce

- [Proposta](#id01)
  - [Conclusões](#id01.01)
- [Feito com](#id04)
- [Pré-requisitos](#id05)
- [Procedimentos de instalação](#id06)
- [Autor](#id07)

# 🚀 Proposta <a name="id01"></a>

Tem como objetio criar um sistema de filtro de emojis baseado num json. A filtragem ocorre mediante pesquisa numa search bar.

## Conclusões <a name="id01.01"></a>

O projeto apresenta um sistema de pesquisa que filtra resultado a partir do match de palavras ou fragmentos de texto com o nome do emijo ou sua descrição.

Por se tratar de uma busca local ocorre a busca a cada nova letra digitada, mas em sistemas reais isso poderia estar mediante um debounce que atrasa o gatilho da pesquisa. Se quiser travar o re-render da search bar, também é possível usar value de refs para evitar renders adicionais, ou até estratégias como composition.

O algoritmo de filtro foi travado como um para apenas emojis, já tendo conhecimento do array de massa de dados. Um possibilidade é criar uma classe que instancia as condições de filtragem, assim como devolve a função de filtragem, também recebendo o json de dados que se quer filtrar. Para inverter as dependências.

# 🛠 Feito com <a name="id04"></a>

<br />

- [React](https://reactjs.org/)
- css
- [Vite](https://vitejs.dev)

<br />

# ☑️ Pré-requisitos <a name="id05"></a>

<br />

- [x] Editor de código de sua preferência (recomendado VS code)
- [x] Git
- [x] Gerenciador de pacotes Yarn ou NPM

<br />

# 📝 Procedimentos de instalação <a name="id06"></a>

<br />

Clone este repositório usando o comando:

```bash
git clone https://github.com/JCDMeira/react-emoji-search.git
```

Na pasta do projeto instale as dependências com uso do npm ou yarn

```bash
npm install

ou

yarn install
```

Inicie o projeto com

```bash
npm start

ou

yarn start
```

<br />

# :sunglasses: Autor <a name="id07"></a>

<br />

- Linkedin - [jeanmeira](https://www.linkedin.com/in/jeanmeira/)
- Instagram - [@jean.meira10](https://www.instagram.com/jean.meira10/)
- GitHub - [JCDMeira](https://github.com/JCDMeira)
