# Para rodar o projeto

Basta colocar npm start no terminar q o projeto vai abrir uma aba no browser [http://localhost:3000](http://localhost:3000)

## Sobre a API

Eu estou usando uma API publica que peguei na [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)
A documentação da API é essa [https://kitsu.docs.apiary.io/#introduction/json:api](https://kitsu.docs.apiary.io/#introduction/json:api)

## Considerações 

Por não programar em react e so saber eu tive bastente dificuldade em coisas simples como pegar o valor da barra de busca no Header e jogar o resultado ali na Solução!
Poir isso eu opter por deixar uma barra de busca junto com a solução pois assim eu consegui fazer funcionar.

Tive dificuldade de fazer rodar a consulta na API ao clicar na lupa, e poir isso eu optei por fazer a consulta quando o usuario para de digitar. Então a Lupa é apenas decorativa, basta digitar o nome do anime ou parte do nome e ele vai fazer uma busca na API e retornar as 4 primeirar respostas.

Para monstrar o resultado da API eu estou usando apenas a imagem do anime, nome, descrição e a data de termino disponibilizado pela API

Por não ter um layout mobile eu n fiz mobile first, mas tentei adaptar para o mobile na medida que eu ia vendo necessidade 