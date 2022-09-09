# Estudo do hook useContext em React

## Entendendo o conceito principal
https://youtu.be/znTVc2jDw3k

### Teoria
O Context possui o Provider, onde se armazena as informações dele.
O Context é utilizado ao redor dos componentes onde se quer passar as
informações.
Tudo que for filho de um Provider, consegue acessar as informações.
Por outro lado, os Consumers irão, como o próprio nome sugere, consumir
as informações. Ou seja, eles acessam informações do Provider.
No entanto, os Consumers devem estar dentro/abaixo do Provider na
árvore de componentes.

## Entendendo a prática por meio de um contador
https://youtu.be/0UVYtx_C87w
