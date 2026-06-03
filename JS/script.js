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

// =================================================================
    // FUNÇÃO PARA ABRIR E FECHAR O FAQ (ACCORDION)
    // =================================================================
    const faqButtons = document.querySelectorAll('.accordion-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra qual é a caixa de texto (resposta) deste botão específico
            const targetId = button.getAttribute('data-bs-target');
            const targetCollapse = document.querySelector(targetId);

            // Verifica se esta pergunta já está aberta
            const isOpen = targetCollapse.classList.contains('show');

            // Primeiro: Fecha TODAS as perguntas e volta as setinhas para baixo
            document.querySelectorAll('.accordion-collapse').forEach(collapse => {
                collapse.classList.remove('show');
            });
            document.querySelectorAll('.accordion-button').forEach(btn => {
                btn.classList.add('collapsed');
            });

            // Segundo: Se a pergunta que clicaste estava fechada, abre-a e roda a setinha
            if (!isOpen) {
                targetCollapse.classList.add('show');
                button.classList.remove('collapsed');
            }
        });
    });