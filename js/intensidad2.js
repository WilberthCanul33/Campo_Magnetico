const radio = document.querySelector('.radio');
const vueltas = document.querySelector('.vueltas');
const campo = document.querySelector('.magnetico');
const boton = document.querySelector('.boton');
const despeje = document.querySelector('.despeje');
const despeje2 = document.querySelector('.despeje2');
const resultado = document.querySelector('.res');

boton.addEventListener('click', (e) => {
    if (vueltas.value == "" || radio.value == "" || campo.value == "") {
        e.preventDefault();
    } else {
        let formula2 = (campo.value * 2 * radio.value) ;
        let formula3 = vueltas.value * 1.256*10**-6;
        despeje.innerHTML = `<p><strong>Sustituyendo</strong> <br><br>I =  ${campo.value}<strong>(</strong>2<strong>)</strong><strong>(</strong>${radio.value}<strong>)</strong> / ${vueltas.value}<strong>(</strong>1.256x10^-6<strong>)</strong></p>`;
        despeje2.innerHTML = `<p>${formula2} <strong>/</strong> ${formula3}</p>`;
        resultado.innerHTML = `<p>El resultado es <strong>${formula2 / formula3}</strong></p>`;        
        
    }

});