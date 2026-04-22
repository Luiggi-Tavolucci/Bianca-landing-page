document.addEventListener('DOMContentLoaded', () => {
    // Selecionando os elementos do DOM
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const menuIcon = menuToggle.querySelector('i');
    const navLinks = navMenu.querySelectorAll('a');

    // Função para abrir/fechar o menu mobile
    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'active' que mostra/esconde o menu
        navMenu.classList.toggle('active');

        // Troca o ícone de hambúrguer (bi-list) para o X (bi-x-lg)
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('bi-list');
            menuIcon.classList.add('bi-x-lg');
        } else {
            menuIcon.classList.remove('bi-x-lg');
            menuIcon.classList.add('bi-list');
        }
    });

    // Função para fechar o menu automaticamente ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Se o menu estiver aberto (tiver a classe active), ele fecha
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('bi-x-lg');
                menuIcon.classList.add('bi-list');
            }
        });
    });
});