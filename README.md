# Heroway Slot Machine

## Objetivo
  Ao clicar no botão `SPIN` os slots devem ser embaralhados. Após serem embaralhados, caso os 3 slots tenham o mesmo valor
  é necessário alterar o titulo "HERO MACHINE" com uma mensagem temporária, além de atualizar o "dinheiro" do jogador. Caso o dinheiro zere, ou fique negativo, não será mais possível jogar.

## Linha de raciocínio
  - Recurperar os elementos do `DOM` via `JS`
  - Atualizar o dinheiro do `DOM` com o valor da variavel `availableToBet`
  - Adicionar um evento de `click` no botão SPIN
  - Embaralhar os slots utilizando `setTimeout` e `for`
  - Recuperar o valor dos 3 slots após serem embaralhados utilizando `callback`
  - Validar se os 3 slots tem o mesmo valor
  - Atualizar o texto HERO MACHINE temporariamente
  - Atualizar o valor do dinheiro disponível no jogo

#### Tecnologias usadas:
  * HTML, CSS e Javascript

#### Passos:

1. Clonar a pasta do repositório;
2. Abrir arquivo `index.html` no navegador. 
