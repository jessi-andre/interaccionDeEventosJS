window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function () {
        this.style.color = "red"
    })

    titulo.addEventListener('mouseout', function () {
        this.style.color = "green"
    })

    let inputTitle = document.getElementById('titulo');
    let state = 0;
    const checkey = (key) => {
        switch (true) {
            case key === 's' && state === 0:
                ++state
                breack;
            case key === 'e' && state === 1:
                ++state
                breack;
            case key === 'c' && state === 2:
                ++state
                breack;
            case key === 'r' && state === 3:
                ++state
                breack;
            case key === 'e' && state === 4:
                ++state
                breack;
            case key === 't' && state === 5:
                ++state
                breack;
            case key === 'o' && state === 6:
                state = 0;
                alert('SECRETO MÁGICO')
                breack;
            default: state = 0;
                breack;
        }
    }

    inputTitle.addEventListener('keyup', (e) => {
        checkey(e.key)
    })

    inputTitle.addEventListener('keyup', (e) => {
        console.log('keyup:', e.key)
    })

    inputTitle.addEventListener('keypress', (e) => {
        console.log('keypress:', e.key)
    })

}