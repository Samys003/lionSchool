'use stict'

function telaHome (){
    const main = document.getElementById('main')

    //--- h1 do site --
    const principal = document.createElement('div')
    principal.className = "principal"

    const mark = document.createElement('mark')
    mark.textContent = 'curso'

    const titulo = document.createElement('h1')
    titulo.textContent = 'Escolha o para gerenciar'
    principal.appendChild(titulo)

    const devices = document.createElement('img')
    devices.src = "./img/devices.svg"
    principal.appendChild(devices)
    // -- fim do home ----


    //-- estudante --
    const divEstudante = document.createElement('div')

    const estudante = document.createElement('img')
    estudante.src = './img/studant.svg'
    divEstudante.appendChild(estudante)
    // -- fim estudante 


    //-- botoes --  

    main.appendChild(principal)
    main.appendChild(estudante)

}



telaHome()