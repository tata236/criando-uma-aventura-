const avanca = document.querySelectorAll('.btn-proximo');

avanc.forEach(button=> {
    button.addEventListener('click',function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPass).classList.add('ativo');
    })
})