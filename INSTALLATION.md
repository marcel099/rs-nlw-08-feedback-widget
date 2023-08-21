## Instalação

Antes de tudo, vale lembrar que se você quiser apenas acessar a plataforma para experimentá-la, você pode fazer isso através deste <a href="https://feedback-widget.marcel099.vercel.app/">link</a>.

Se deseja executar o projeto na sua máquina, você precisa, antes de tudo, instalar as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/). Caso queira alterar algum arquivo sugiro também que instale algum editor de texto, como o [Visual Studio Code](https://code.visualstudio.com/) e o [Sublime](https://www.sublimetext.com/3).

Após isso, clone o repositório na pasta de sua escolha utilizando o seguinte comando na linha de comando:

```bash
git clone https://github.com/marcel099/rs-nlw-08-feedback-widget
```

### Back-End

É necessário manter o servidor em execução através destes comandos para o correto funcionamento da plataforma. Para isso, comece instalando as dependências:

```bash
# Acesse a pasta do back-end a partir da pasta do repositório
$ cd server

# Instale as dependências de funcionamento
$ yarn
```

Em seguida, crie um banco de dados <a href="https://www.postgresql.org/">PostgreSQL</a> antes de executar a aplicação. Aconselho que crie o banco de dados <a href="https://hub.docker.com/_/postgres">Postgre</a> utilizando o software <a href="https://www.docker.com/">Docker</a>, pois foi a forma utilizada na versão 2.0 do projeto. Anote suas credenciais de conexão ao banco.

Após, a fim de que o envio de e-mails de relatório de bug funcione, uma conta do Gmail deverá ser configurada para executar o envio. Você pode usar sua própria conta no GMail ou, se preferir, criar uma nova.

Depois de estar autenticado no navegador com a conta que você escolheu, você precisa realizar alguns passos para obter as credenciais que serão utilizadas pelo Nodemailer para acessar a conta do Gmail. No momento de escrita deste tutorial de instalação local do sistema, segui os passos descritos na resposta mais votada [desta pergunta](https://stackoverflow.com/questions/71477637/nodemailer-and-gmail-after-may-30-2022) enviada no Stack Overflow.

Após realizar todas essas etapas, preencha as variáveis de ambiente presentes no arquivo <a href="./server/.env.example">`.env.example`</a> com as informações que você anotou nos passos anteriores.

Por fim, rode o seguinte comando para executar a aplicação Back-End:

```
$ yarn dev
```

### Front-End Web

É necessário abrir outra linha de comando para executar estes comandos sem que a anterior seja fechada visto que as aplicações web e mobile consomem e manipulam dados da aplicação back-end.

```bash
# Acesse a pasta do front-end web a partir da pasta do repositório
$ cd web

# Instale as dependências
$ yarn
```

Antes de iniciar a aplicação, preencha as informações de variáveis de ambiente presentes no arquivo <a href="./web/.env.example">`.env.example`</a>.

```bash
# Inicie a aplicação Vite
$ yarn dev
```

### Front-End Mobile

Para executar a aplicação mobile:

```bash
# Acesse a pasta do front-end mobile a partir da pasta do repositório
$ cd mobile

# Instale as dependências
$ yarn

# Inicie a aplicação React Native com Expo
$ yarn start
```

Após, você poderá acessar o aplicativo através do app Expo Go ao apontar a câmera do seu celular dentro desse app no QRCode que aparecerá na tela do terminal. Se não quiser utilizar outro dispositivo, o acesso pode ser feito utilizando emuladores <a href="https://developer.android.com/studio">Android</a> ou <a href="https://developer.apple.com/xcode/">iOS</a>.