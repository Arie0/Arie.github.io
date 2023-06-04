
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split(" ");
    elemento.innerHTML = " ";
    textoArray.forEach(function(Letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += Letra;
    }, 75 * i)

  });

const titulo = document.querySelector('.digitando');
typeWrite(titulo);

}


window.onload = function(){
        var elementBody = document.querySelector('form');
        var elementBtnIncreaseFont = document.getElementById('btn1');
        var elementBtnDecreaseFont = document.getElementById('btn2');
        // Padrão de tamanho, equivale a 100% do valor definido no Body
        var fontSize = 100;
        // Valor de incremento ou decremento, equivale a 10% do valor do Body
        var increaseDecrease = 10;

      
        // Evento de click para aumentar a fonte
        elementBtnIncreaseFont.addEventListener('click', function(event){
            fontSize = fontSize + increaseDecrease;
            elementBody.style.fontSize = fontSize + '%';
        });
      
        // Evento de click para diminuir a fonte
        elementBtnDecreaseFont.addEventListener('click', function(event){
            fontSize = fontSize - increaseDecrease;
            elementBody.style.fontSize = fontSize + '%';
        });
}

