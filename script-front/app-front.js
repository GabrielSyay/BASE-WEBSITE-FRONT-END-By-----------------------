
/**
 * Função para abrir e fechar um menu com base nas classes especificadas.
 * 
 * @param {String} toggleClass - Classe do elemento que abre o menu.
 * @param {String} closeClass - Classe do elemento que fecha o menu.
 * @param {String} menuClass - Classe do menu que será aberto ou fechado.
 */

function toggleMenu(toggleClass, closeClass, menuClass) {
  // Seleciona os elementos com as classes especificadas
  const toggleElement = document.querySelector(`.${toggleClass}`);
  const closeElement = document.querySelector(`.${closeClass}`);
  const menuElement = document.querySelector(`.${menuClass}`);

  // Adiciona evento de clique no elemento que abre o menu
  toggleElement.addEventListener('click', () => {
    // Abre o menu
    menuElement.classList.add('open');
    console.log('abriu');
  });

  // Adiciona evento de clique no elemento que fecha o menu
  closeElement.addEventListener('click', () => {
    // Fecha o menu
    menuElement.classList.remove('open');
  });

  // Adiciona evento de clique fora do escopo do menu
  document.addEventListener('click', (event) => {
    // Verifica se o clique foi fora do escopo do menu
    if (!menuElement.contains(event.target) && !toggleElement.contains(event.target)) {
      // Fecha o menu
      menuElement.classList.remove('open');
    }
  });
}

// Exemplo de uso:
toggleMenu('menu', 'close', 'labelMenu');