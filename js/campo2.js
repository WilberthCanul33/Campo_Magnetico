const intensidad = document.querySelector('.intensidad');
const vueltas = document.querySelector('.vueltas');
const campo = document.querySelector('.boton');
const radio = document.querySelector('.radio');
const despeje = document.querySelector('.despeje');
const despeje2 = document.querySelector('.despeje2');
const resultado = document.querySelector('.res');


campo.addEventListener('click', (e) => {
    if (intensidad.value == "" || vueltas.value == "" || radio.value == "") {
        e.preventDefault();
    } else {
        let formula2 = vueltas.value * (1.256*10**-6) * intensidad.value ;
        let formula3 = (2 * radio.value);
        despeje.innerHTML = `<p><strong>Sustituyendo</strong> <br><br>B = ${vueltas.value}<strong>(</strong>1.256x10^-6<strong>)</strong><strong>(</strong>${intensidad.value}<strong>)</strong> / 2<strong>(</strong>${radio.value}<strong>)</strong></p>`;
        despeje2.innerHTML = `<p>${formula2} <strong>/</strong> ${formula3}</p>`;
        resultado.innerHTML = `<p>El resultado es <strong>${formula2 / formula3}</strong></p>`;
        console.log(formula);       
        
    }
});