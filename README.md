# O que é o Bun.JS?

Bun é um novo runtime JavaScript criado do zero para servir ao ecossistema JavaScript moderno. Ele tem três objetivos principais de design:

*Velocidade.* Bun começa rápido e corre rápido. Ele estende o JavaScriptCore, o mecanismo JS voltado para o desempenho criado para o Safari. À medida que a computação se move para a borda, isso é fundamental.

*APIs elegantes.* O Bun fornece um conjunto mínimo de APIs altamente otimizadas para executar tarefas comuns, como iniciar um servidor HTTP e gravar arquivos.

*Completo.* Bun é um kit de ferramentas completo para a criação de aplicativos JavaScript, incluindo um gerenciador de pacotes, um executor de teste e um empacotador.

O Bun foi projetado como um substituto para o Node.js. Ele implementa nativamente centenas de APIs de Node.js e Web, incluindo , e muito mais.fspathBuffer

# Sobre o Projeto

O projeto consiste em um sistema distribuído que visa fornecer funcionalidades de login, autenticação de usuários e gerenciamento de tarefas. Ele é composto por dois principais microserviços:

### Microserviço de Autenticação de Usuários

Este microserviço é responsável por gerenciar os usuários e conta com o processo de autenticação. 

### Microserviço de Gerenciamento de Tarefas

O segundo microserviço se trata do gerenciamento de tarefas atribuídas aos usuários autenticados. Ele oferece funcionalidades para criar, visualizar, atualizar e excluir tarefas.

## Tecnologias Utilizadas

- Bun.JS
- Elysia.JS
- Prisma
- TypeScript

## Execute o projeto

- Clone esse repositório em sua máquina
- No terminal do dentro da pasta app, instale as dependências usadas no projeto:
  - ```bun run setup```
- Ainda no terminal, entre na pasta referente ao microserviço que deseja executar e digite:
  - ```bun run dev```
- No navegador, entre na url:
  - Para user: http://localhost:3001
  - Para task: http://localhost:3000

# Como criar um projeto Elysia usando Bun

## Instalação:

- Instale o Unzip
  - ```sudo apt install unzip```
- Instale o Bun.JS  
  - ```curl -fsSL https://bun.sh/install | bash ```
- Cheque sua instalação
  - ```bun --version```

## Criação do projeto:

- Crie um projeto com Elysia
-  ```bash bun create elysia app```

# Arquitetura

## Arquitetura de Sistema

Este projeto segue uma arquitetura de microserviços, uma abordagem de desenvolvimento de software que organiza uma aplicação como um conjunto de serviços independentes, cada um representando uma funcionalidade específica. Cada microserviço opera de forma autônoma, com sua própria base de código, banco de dados e lógica de negócios.

## Arquitetura de Software

### Sobre a organização das pastas, o projeto foi dividido em:

- App
- 
  - task_microservice
    - node_modules
    - prisma
    - src
      - controllers
      - dtos
      - repositories
      - services
        
  - user_microservice
    - node_modules
    - prisma
    - src
      - controllers
      - dtos
      - repositories
      - services

