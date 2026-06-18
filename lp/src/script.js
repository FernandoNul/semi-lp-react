function navTo(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block:'start'
    })
}

function enviar(){
    const nome = document.getElementById('nome').value
    const assunto = document.getElementById('assunto').value
    const mensagem = `Gostaria de entrar em contato!\n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/************?text=${msg}`)
}

const toggleButton = document.querySelector('.toggle-btn')

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')

        const icon = document.querySelector('.icon')

        if (icon) {
            icon.classList.toggle('fa-sun')
            icon.classList.toggle('fa-moon')
        }
    })
}