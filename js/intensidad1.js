const campo = document.querySelector('.campo_mag');
const distancia = document.querySelector('.distancia');
const boton = document.querySelector('.boton');
const despeje = document.querySelector('.despeje');
const despeje2 = document.querySelector('.despeje2');
const resultado = document.querySelector('.res');
const resultado2 = document.querySelector('.res2');

boton.addEventListener('click', (e) => {
    if (campo.value == "" || distancia.value == "") {
        e.preventDefault();
    } else {
        let formula2 = (2 * 3.1416 * distancia.value * campo.value) ;
        let formula3 = 1.256*10**-6;
        despeje.innerHTML = `<p><strong>Sustituyendo</strong> <br><br>I = 2<strong>(</strong>3.1416<strong>)</strong><strong>(</strong>${distancia.value}<strong>)</strong><strong>(</strong>${campo.value}<strong>)</strong> / <strong>(</strong>1.256x10^-6<strong>)</strong></p>`;
        despeje2.innerHTML = `<p>${formula2} <strong>/</strong> ${formula3}</p>`;
        resultado.innerHTML = `<p>El resultado es <strong>${formula2 / formula3}</strong></p>`;      
        
    }

});
