const shopButtons = document.querySelectorAll('.shop-btn');

shopButtons.forEach(button => {
    button.addEventListener('click', () => {
        const page = button.getAttribute('data-page');
        window.open(page, '_blank');
    });
});

