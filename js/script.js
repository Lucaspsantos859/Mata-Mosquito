var altura = 0
var largura = 0
var vida = 1
var tempo = 20
var criarMosquito = 0

var nivel = window.location.search
nivel = nivel.replace('?', '') //replace seliconar o caracter informado e subtitui por outro caracter infomado

if(nivel === 'normal'){
    criarMosquito = 1500
}else if(nivel === 'dificil'){
    criarMosquito = 1000
}else if(nivel === 'chucknorris'){
    criarMosquito = 750
}

function ajustePalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

        var cronometro = setInterval(function(){
            tempo--
            if(tempo < 0){
                clearInterval(cronometro)
                clearInterval(criarMosca) // aqui estamos lipando a função de criar o elemnto na tela, atraves da variavel que lhe foi atribuida
                window.location.href = 'vitoria.html'
            }else{
                document.getElementById('cronometro').innerHTML = tempo // inner html inseri elemento entre as tags html selecionada pelo id correspondente
            }
        }, 1000)

    console.log(largura, altura) 
}
   
ajustePalcoJogo();

function posicaoRandomica(){
    var posicaox = Math.floor( Math.random() * largura) - 90
    var posicaoy = Math.floor(Math.random() * altura) - 90

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaox, posicaoy)

    //removendo elemento caso exista

    if(document.getElementById('mosca')){ // dessa forma é feito um teste para vê se tem algum elemento criado com o id 'mosca'
        document.getElementById('mosca').remove()

        if(vida > 3){
            window.location.href = 'derrota.html'
        }else{
            document.getElementById('v' +vida).src = 'img/coracao_vazio.png'
            vida++
        }
    }

    //criando elementos html

    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png' //adiciona o diretoria da imagem que dejesar incluir
    mosca.className = tamanhoMosca() //adiciona uma classe ao elemento criado
    mosca.style.left = posicaox + 'px' // posiciona o elemento a esquerda de acordo com o pixel
    mosca.style.top = posicaoy + 'px' // posiciona o elemento no topo de acordo com o pixel
    mosca.style.position = 'absolute' // permite que o elemente seja posicionado de forma absoluta(manual)
    mosca.style.transform = ladoMosca() // transforma o elemento de acordo com o paramentro informado
    mosca.id = 'mosca' // adicionando um id no elemento
    mosca.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosca) //adiciona elemento criado no body

}

function tamanhoMosca(){
    var tamanho = Math.floor(Math.random() * 3) 

    if(tamanho == 0){
        return 'mosca1'
    }else if(tamanho == 1){
        return 'mosca2'
    }else{
        return 'mosca3'
    }
}

function ladoMosca(){
    var lado = Math.floor(Math.random()*2)

    if(lado == 0){
        return 'scaleX(-1)' // inverte a imagem ou elemento 
    }
}








