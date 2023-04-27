//valor inicial
let contar = 0;

// selecionando o valor e os botões
const valor = document.querySelector('#value');
const botoes = document.querySelectorAll('.btn')

// adicionando um event listener para cada botão
botoes.forEach(function (btn) {
  btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("diminuir")) {
      contar--;
    } else if (styles.contains('aumentar')) {
      contar++;
    } else {
      contar = 0;
    }
// mudando a cor do valor dependendo do seu valor
    if(contar > 0) {
      valor.style.color = "red"
    }
    if(contar < 0) {
      valor.style.color = "green"
    }
    if ( contar === 0) {
      valor.style.color = "#000"
    }
    valor.textContent = contar;
  })
});