<h4 align="center"> 
  Next Level Week #08 - Spacetime
</h4>

<div align="center">
  <img src="https://img.shields.io/github/repo-size/marcel099/rs-nlw-08-feedback-widget.svg">
  <img src="https://img.shields.io/github/last-commit/marcel099/rs-nlw-08-feedback-widget.svg">
  <img src="https://img.shields.io/github/issues/marcel099/rs-nlw-08-feedback-widget.svg">
  <img src="https://img.shields.io/github/issues-closed/marcel099/rs-nlw-08-feedback-widget.svg">
  <img src="https://img.shields.io/github/license/marcel099/rs-nlw-08-feedback-widget.svg">
  <img src="https://img.shields.io/github/stars/marcel099/rs-nlw-08-feedback-widget.svg?style=social">
</div>

## Índice

* [Índice](#índice)
* [Sobre](#sobre)
    * [Tecnologias](#principais-tecnologias-utilizadas)
* [Licença](#licença)

## Sobre

O projeto foi desenvolvido na trilha Impulse da oitava edição do evento Next Level Week proporcionado pela empresa [Rocketseat](https://rocketseat.com.br/). Baseou-se em um layout elaborado no Figma.

O sistema, desenvolvido em TypeScript, é composto de um servidor HTTP Node, um [site](https://feedback-widget.marcel099.vercel.app/) em React e um aplicativo móvel em React Native.

A opção por essas ferramentas foi realizada pela Rocketseat por acreditarem formar um conjunto de tecnologias poderoso ao permitir desenvolver desde o Back-End até o aplicativo móvel em uma só linguagem: o JavaScript. A escolha por TypeScript, um superset do JavaScript, foi realizada por acreditar trazer um aumento de confiabilidade de código.

### Principais tecnologias utilizadas

O sistema foi desenvolvido em TypeScript. É composto de 3 partes:

- Back-End
  - [Node.js](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [Jest](https://jestjs.io/)
  - [Nodemailer](https://nodemailer.com/)
  - [Prisma](https://www.prisma.io/)
  - [PostgreSQL](https://www.postgresql.org/)
- Front-End Web
  - [Vite](https://vitejs.dev/)
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Headless UI](https://headlessui.com/)
  - [Phosphor Icons React](https://www.npmjs.com/package/phosphor-react)
  - [html2canvas](https://html2canvas.hertzen.com/)
- Front-End Mobile
  - [React Native](https://reactnative.dev/)
  - [Expo](https://expo.dev/)
  - [Expo Fonts](https://docs.expo.dev/develop/user-interface/fonts/)
  - [Phosphor Icons React Native](https://www.npmjs.com/package/phosphor-react-native)
  - [react-native-view-shot](https://www.npmjs.com/package/react-native-view-shot)
  - [React Native Bottom Sheet](https://www.npmjs.com/package/@gorhom/bottom-sheet)

Alguns pontos a destacar:

- Uma captura de tela é obtida pelo próprio sistema quando o usuário aciona o botão dedicado a essa tarefa. Nas aplicações Web e Mobile isso é realizado, respectivamente, por meio das bibliotecas [html2canvas](https://html2canvas.hertzen.com/) e [react-native-view-shot](https://www.npmjs.com/package/react-native-view-shot).
- O envio de e-mail com relatório de bug usa [Nodemailer](https://nodemailer.com/) e Gmail

## Licença

Este projeto está sob a licença MIT. Para maiores detalhes acesse o <a href="./LICENSE.md">arquivo de licença</a>.