<div align="center">
  <h1>Lugo Bot Stopped</h1>

  <p>
    Um Lugo Bot que fica parado e reage a algumas configurações de ambiente
  </p>

<!-- Badges -->
<p>
<img alt="PRs welcome!" src="https://img.shields.io/static/v1?label=PRs&message=WELCOME&style=for-the-badge&color=3b82f6&labelColor=222222" />
  <a href="https://github.com/mauriciorobertodev/lugo-bot-stopped/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/mauriciorobertodev/lugo-bot-stopped?color=3b82f6&label=CONTRIBUTORS&logo=3C424B&logoColor=3C424B&style=for-the-badge&labelColor=222222" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/mauriciorobertodev/lugo-bot-stopped?color=3b82f6&label=LAST UPDATE&logo=3C424B&logoColor=3C424B&style=for-the-badge&labelColor=222222" alt="last update" />
  </a>

  <a href="https://github.com/mauriciorobertodev/lugo-bot-stopped/stargazers">
    <img src="https://img.shields.io/github/stars/mauriciorobertodev/lugo-bot-stopped?color=3b82f6&label=STARS&logo=3C424B&logoColor=3C424B&style=for-the-badge&labelColor=222222" alt="stars" />
  </a>

</p>
</div>

<br />

<!-- About the Project -->

## :star2: Sobre o projeto

O objetivo do projeto é ser uma imagem de um Lugo Bot que fica parado no campo, e que possa ter seu comportamento facilmente alterado através de variáveis de ambiente, algumas desses comportamentos são, como tentar pegar a bola, mover-se em direção a bola ou para sua posição esperada, o comportamento de cada bot pode ser configurado em um .env.
<br>

<!-- About the Project -->

## :mortar_board: O que aprendi

Na construção deste projeto tive de entender mais como funciona os scripts do `package.json`, como criar um repository no docker hub, e o principal como enviar uma imagem minha para que outras pessoas possam utilizar.
<br>

<!-- Tech -->

### :fire: O que foi usado

-   [Typescript](https://laravel.com/docs/10.x/starter-kits)
-   [Vite 4](https://vitejs.dev/)
-   [ES lint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Docker](https://www.docker.com/)

<br>
<!-- Features -->

### :dart: Features

-   Todos os bots ficam parados.
-   Pode selecionar todos ou específicos bots para se moverem em direção a bola.
-   Pode selecionar todos ou específicos bots para se moverem em direção a sua posição esperada.
-   As configurações podem ser feitas em um .env.

<br>

<!-- Usage -->

## :zap: Como usar

1.  Coloque `mauricioroberto/lugo-bot-stopped:latest` como imagem do bot adversário.
2.  Em um `.env` defina as variáveis desejadas, exemplo abaixo.

```bash
#  Opções: 'all' (todos) ou 'none' (nenhum) ou '2,4,5,6' (apenas os bots que tenham algum desses números)
TRY_CATCH_BALL='all'

#  Opções: 'all' (todos) ou 'none' (nenhum) ou '2,4,5,6' (apenas os bots que tenham algum desses números)
MOVE_IN_BALL_DIRECTION='1,8,9,10,11'

#  Opções: 'all' (todos) ou 'none' (nenhum) ou '2,4,5,6' (apenas os bots que tenham algum desses números)
MOVE_TO_EXPECTED_POSITION='2,3,4,5,6,7'
```

3.  Em seu arquivo `docker-compose.yml` na sessão `environment` cole o texto abaixo.

```bash
- TRY_CATCH_BALL=${TRY_CATCH_BALL}
- MOVE_IN_BALL_DIRECTION=${MOVE_IN_BALL_DIRECTION}
- MOVE_TO_EXPECTED_POSITION=${MOVE_TO_EXPECTED_POSITION}
```

4.  Agora é só rodar o jogo.

<br/>

<!-- Run Locally -->

## :wrench: Desenvolvimento

Clone o projeto

```bash
  git clone https://github.com/mauriciorobertodev/lugo-bot-stopped.git
```

Entre na pasta do projeto

```bash
  cd lugo-bot-stopped
```

Instale as dependências

```bash
  npm install
```

Rode um jogo

```bash
  docker compose -f watcher-compose.yml -p builder up -d
  docker compose up
```

Você também pode usar os scripts em `package.json`.

<!-- Contributing -->

## :wave: Contribuindo

Contribuições são sempre bem vindas!

1. Faça o _fork_ do projeto (<https://github.com/mauriciorobertodev/lugo-bot-stopped/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b meu-novo-recurso`)
3. Faça o _commit_ (`git commit -am 'Adicionando um novo recurso...'`)
4. _Push_ (`git push origin meu-novo-recurso`)
5. Crie um novo _Pull Request_

</br>

<a href="https://github.com/mauriciorobertodev/lugo-bot-stopped/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mauriciorobertodev/lugo-bot-stopped" />
</a>
</br>

<br>

<!-- License -->

## :lock: License

Licença MIT (MIT). Consulte o [arquivo de licença](https://github.com/mauriciorobertodev/lugo-bot-stopped/blob/main/LICENSE) para obter mais informações.

<br>

<!-- Contact -->

## :handshake: Contato

Mauricio Roberto - mauricio.roberto.dev@gmail.com

Link do projeto: [https://github.com/mauriciorobertodev/lugo-bot-stopped](https://github.com/mauriciorobertodev/lugo-bot-stopped)

<br>

<!-- Acknowledgments -->

## :gem: Créditos/Reconhecimento

-   [Shields.io](https://shields.io/)
-   [Awesome Readme Template](https://github.com/Louis3797/awesome-readme-template)
-   [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#travel--places)

<br>

<!-- References -->

## :microscope: Referências

-   [Docker - Documentação](https://docs.docker.com/)
-   [Lugo Bot - Documentação](https://spec.lugobots.dev/)
-   [The Dumies JS - Bot base](https://github.com/lugobots/the-dummies-js)
