const intensidad = document.querySelector('.intensidad');
const magnetico = document.querySelector('.magnetico');
const campo = document.querySelector('.boton');
const radio = document.querySelector('.radio');
const despeje = document.querySelector('.despeje');
const despeje2 = document.querySelector('.despeje2');
const resultado = document.querySelector('.res');


campo.addEventListener('click', (e) => {
    if (intensidad.value == "" || radio.value == "" || magnetico.value == "") {
        e.preventDefault();
    } else {
        let formula2 = 2 * radio.value * magnetico.value ;
        let formula3 = 1.256*10**-6 * intensidad.value;
        despeje.innerHTML = `<p><strong>Sustituyendo</strong> <br><br>N = 2<strong>(</strong>${radio.value}<strong>)</strong><strong>(</strong>${magnetico.value}<strong>)</strong><strong> / </strong>1.256x10^-6<strong>(</strong>${intensidad.value}<strong>)</strong></p>`;
        despeje2.innerHTML = `<p>${formula2} <strong>/</strong> ${formula3}</p>`;
        resultado.innerHTML = `<p>El resultado es <strong>${formula2 / formula3} T</strong></p>`;        
    }

});