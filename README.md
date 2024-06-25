﻿<p align="center">
  <img src="./github/tindev-logo.svg" alt="tindev-logo" width="30%"/>
</p>

___

<br/>

<p align="center">
  <a href="#sobre">SOBRE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#tecnologia">TECNOLOGIA</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#execute">EXECUTE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#autor">AUTOR</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#licença">LICENÇA</a>
</p>

<br/>

<p align="center">
  <img src="./github/tindev-dashboard.png" alt="tindev-dashboard" width="100%"/>
</p>

## SOBRE

A **tindev** é uma Aplicação que visa conectar Desenvolvedores que estão no GitHub e que desejam fazer pair programming através do Match entre eles

## TECNOLOGIA

  TOOLING

<a href="https://insomnia.rest/">Insomnia</a><br/>
<a href="https://mongodb.com/">MongoDB</a><br/>

  BACK-END

<a href="https://nodejs.org/">NodeJS</a><br/>
<a href="https://socket.io/">Socket IO</a><br/>

  FRONT-END

<a href="https://axios-http.com/">Axios</a><br/>
<a href="https://reactjs.org/">ReactJS</a><br/>

  MOBILE

<a href="https://expo.dev/">Expo IO</a><br/>
<a href="https://reactnative.dev/">React Native</a><br/>

## EXECUTE

    - Clonar o Repositório
    - Acessar o Back-End: "./backend"
	    |- Instalar as dependências com o Comando: "npm install --force"
        |- Acessar o arquivo: "./backend/src/server.js:17" e verificar URL de Conexão com o Banco de Dados
            >_ Inicializar o Back-End com o Comando: "npm run dev"
    - Acessar o Front-End: "./frontend"
        |- Instalar as dependências com o Comando: "npm install --force"
        |- Acessar o arquivo: "./frontend/src/pages/Main.js:24" e atualizar o Endereço de Conexão dos WebSockets
        |- Acessar o arquivo: "./frontend/src/services/api.js:3" e atualizar o Endereço de Conexão do Front-End
            >_ Inicializar o Front-End com o Comando: "npm start"
    - Acessar o Mobile: "./mobile"
      	|- Instalar as dependências com o Comando: "npm install --force"
        |- Acessar o arquivo: "./mobile/src/pages/Main.js:27" e atualizar o Endereço de Conexão dos WebSockets
        |- Acessar o arquivo: "./mobile/src/services/api.js:3" e atualizar o Endereço de Conexão do Mobile
            >_ Inicializar o Mobile com o Comando: "expo start"

## AUTOR

Projeto desenvolvido durante a **Semana OmniStack 08** da <a href="https://rocketseat.com.br/">Rocketseat</a> ocorrida em **Agosto de 2019**

Acesse <a href="https://github.com/rocketseat-education/semana-omnistack-8">aqui</a> o **repositório oficial** do Projeto

## LICENÇA

Esse projeto está sob a **Licença MIT** veja o arquivo [LICENSE](https://github.com/alissonpratesperes/tindev/blob/main/LICENSE) para mais detalhes

___

<p align="center">✍🏻&nbsp;with&nbsp;❤️&nbsp;by&nbsp;<a href="https://github.com/alissonpratesperes">me</a>&nbsp👨🏻‍💻</p>