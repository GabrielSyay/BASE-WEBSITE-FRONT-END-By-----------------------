
// Função para abrir e fechar o menu
function toggleMenu(element) {
    // Obter o elemento do menu que está logo após o elemento clicado
    const menu = element.nextElementSibling;
    
    // Verificar se o menu já está aberto
    const isOpen = menu.classList.contains('open');
  
    // Fechar o menu se já estiver aberto
    if (isOpen) {
      // Remover a classe 'open' do menu
      menu.classList.remove('open');
      // Definir a altura do menu como 0 para fechá-lo
      menu.style.height = '0';
    } else {
      // Abrir o menu
      // Adicionar a classe 'open' ao menu
      menu.classList.add('open');
      // Definir a altura do menu com base no seu conteúdo
      menu.style.height = menu.scrollHeight + 'px';
    }
  
    // Adicionar um ouvinte de evento de clique ao documento
    // para fechar o menu se o usuário clicar fora dele
    document.addEventListener('click', event => {
      // Verificar se o elemento clicado está fora do menu
      if (!event.target.closest('.menu') && isOpen) {
        // Chamar a função toggleMenu novamente para fechar o menu
        toggleMenu(element);
      }
    });
}

// Adicionar um ouvinte de evento de clique ao documento para fechar o menu
document.addEventListener('click', event => {
  // Verificar se o elemento clicado estava dentro do menu
  if (event.target.closest('.menu')) {
    // Chamar a função toggleMenu para fechar o menu
    toggleMenu(event.target);
  }
});