const paragrafo = document.createElement('p')
paragrafo.innerHTML = "É tudo culpa do Mike!"

document.body.appendChild(paragrafo)

function mostrar(){
    document.getElementById("tell").style.display = "block"
}

function apagar(){
    document.getElementById("tell").style.display = "none"
}