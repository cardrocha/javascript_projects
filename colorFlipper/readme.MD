# Gerador de Cores

![Captura de tela do Gerador de Cores](img/captura-de-tela.png =800x400)

Este projeto consiste em gerar cores aleatórias em formato hexadecimal. Foi desenvolvido utilizando conceitos importantes como arrays, seletores de elementos HTML, manipulação do DOM, eventos, geração de números aleatórios e operações matemáticas.

## Funcionamento

Ao carregar a página, a cor de fundo é gerada aleatoriamente e exibida no título da página e no corpo do documento. É possível gerar uma nova cor clicando no botão "Clique-me". Cada clique no botão "Clique-me" gera uma nova cor aleatória.

## Conceitos importantes

O projeto utiliza diversos conceitos importantes de programação web, entre eles:

- Arrays: utilizados para armazenar as cores geradas aleatoriamente e para fazer a seleção de uma cor aleatória a partir do array.
- `document.getElementById()`: utilizado para selecionar o elemento HTML que contém o botão "Clique-me".
- `document.querySelector()`: utilizado para selecionar o elemento HTML que contém o título da página.
- `addEventListener()`: utilizado para adicionar um ouvinte de eventos ao botão "Clique-me".
- `document.body.style.backgroundColor`: utilizado para alterar a cor de fundo do corpo do documento.
- `Math.floor()`: utilizado para arredondar para baixo o resultado da operação de multiplicação entre um número aleatório e o comprimento do array de cores.
- `Math.random()`: utilizado para gerar números aleatórios que são utilizados para selecionar uma cor aleatória a partir do array.
- `array.length`: utilizado para obter o comprimento do array de cores.

## Agradecimentos

Este projeto foi inspirado no trabalho do desenvolvedor John Smilga, que disponibilizou o código-fonte em seu canal do YouTube. Agradecemos pela sua contribuição para a comunidade de desenvolvimento web.
