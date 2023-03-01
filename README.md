# loader-balancer
Loader balancer using roudin robin and some rules

Para compilar o projeto primeiro é necessário instalar as dependencias usando 

```
npm install 

```

ou caso vc use yarn use


```
yarn install 

```
Os modo de execução são:

1) Round Robin padrão


2) Encaminhamento baseado no tipo de conexão (TCP ou UDP). Nesse algoritmo, S1 deve receber as conexões TCP, S2 e S3 devem receber as conexões UDP. 
A distribuição entre S2 e S3 deve usar o algoritmo Round Robin.


Para abrir os servidores é necessarios abrir 4 terminais diferentes 
no primeiro digite 

```
node ./index.js <Modo de Excução>

```

No segundo:

```
node ./S1/index.js
``` 

No terceiro:


```
node ./S2/index.js
``` 

No quarto:


```
node ./S3/index.js
``` 

Para chamar a API importe o arquivo insomnia.json

Caso nâo tenha o insomnia siga o tutorial no (https://docs.insomnia.rest/)
