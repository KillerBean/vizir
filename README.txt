Para rodar o servidor depois de clonar o projeto do bitbucket você deve seguir estes passos:
Ter o mongodb instalado.
https://www.mongodb.com/

Ter o NodeJS instalado.
https://nodejs.org/

Sempre que eu mencionar o arquivo de configuração do servidor me refiro ao arquivo .env  na pasta raiz do projeto que contém as variáveis de ambiente.

Adicione no arquivo de configuração as informações do Banco de dados caso não sejam os padrões do mongodb.
Ex.: Por padrão a porta do mongodb é 27017
Caso a porta tenha sido alterada deve ser informada no arquivo de configuração assim como o endereço do servidor do mongod que por padrão é localhost.
O nome do bando de dados por padrão é app_db mas também pode ser alterado.
Usuário e senha do banco de dados também podem ser especificados, mas são opcionais embora recomendados.

Abrir uma shell na pasta do projeto e executar os comandos a seguir:
    npm install
    npm run dbseed
    npm start

O servidor irá iniciar por padrão na porta 5000, mas pode ser alterado no arquivo de configuração.
A linha de comando irá retornar em qual porta o servidor foi iniciado.

Para rodar os testes basta abrir outra shell na pasta do projeto e executar o comando a seguir com o servidor funcionando:
    npm test
