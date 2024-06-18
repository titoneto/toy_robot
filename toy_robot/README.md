# Toy Robot Simulator

Este projeto é uma solução para o problema do Toy Robot, disponível em [Toy Robot GitHub](https://github.com/pin-people/toy_robot).

## Pré-requisitos

Para configurar e rodar este projeto, você precisará ter os seguintes softwares instalados em sua máquina:

1. [Docker](https://docs.docker.com/get-docker/)
2. [Visual Studio Code (VSCode)](https://code.visualstudio.com/)
3. Extensão do VSCode: [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Abrir no DevContainer

Abra o projeto com VSCode e com a extensão Remote - Containers instalada, siga estes passos para abrir o projeto no DevContainer:

Abrir a Paleta de Comandos:
Pressione F1 para abrir a paleta de comandos.

Reabrir em Container:
Digite Remote-Containers: Reopen in Container e selecione a opção.

O VSCode irá construir o DevContainer e abrir o projeto dentro dele. Isso pode levar alguns minutos na primeira vez que for executado.

## Rodar a Aplicação
Com o DevContainer configurado, você pode rodar a aplicação utilizando o script bin/dev. Para isso, abra um terminal no VSCode (dentro do DevContainer) e caminhe até a pasta "toy_robot" e execute para instalar as dependencias:

```sh
bundle install && rake db:setup
```

Após a instalação, execute:

```sh
bin/dev

```

## Acesse o jogo localmente

Para acessar o jogo no seu navegador localmente, vá para:

`http://localhost:3000/app/game`
