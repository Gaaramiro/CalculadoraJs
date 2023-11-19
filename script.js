const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.equal');
const btns = document.querySelectorAll('.btn');


function insert(value){
    resultado.innerHTML += value;
}

function clean(){
    resultado.innerHTML = ''
}

function backspace(){
    if(resultado.textContent){
        let result = document.getElementById('res').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function equal(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('res').innerHTML = eval(resultado.innerHTML)
    }
}




switch(value){
    case '+' :
}