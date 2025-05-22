let servicos = document.getElementById('servicos');
let subMenuServicos = document.querySelector('.modal-servicos');

servicos.addEventListener('click', () => {
    if (subMenuServicos.classList[1] === 'ativo') {
        subMenuServicos.style.animation = 'animation-subMenu-fechar 300ms ease-in-out';

        setTimeout(function () {
            subMenuServicos.style.animation = 'none';
            subMenuServicos.style.display = 'none';
            subMenuServicos.classList.remove('ativo');
        }, 200);
    } else {
        subMenuServicos.classList.add('ativo');
        subMenuServicos.style.display = 'block';
        subMenuServicos.style.animation = 'animation-subMenu 300ms ease-in-out';

        setTimeout(function() {
            subMenuServicos.style.animation = 'none';
        }, 300);
    }
});
