const intensidad = document.querySelector('.inten');
const distancia = document.querySelector('.dist');
const campo = document.querySelector('.botonn');
const despeje = document.querySelector('.despeje');
const despeje2 = document.querySelector('.despeje2');
const resultado = document.querySelector('.res');



campo.addEventListener('click', (e) => {
    if (intensidad.value == "" || distancia.value == "") {
        e.preventDefault();
    } else {
            let formula2 = (1.256*10**-6 * intensidad.value) ;
            let formula3 = 2 * 3.1416 * distancia.value;
            despeje.innerHTML = `<p><strong>Sustituyendo</strong> <br><br>B = 1.256x10^-6<strong>(</strong>${intensidad.value}<strong>)</strong> / 2 <strong>(</strong>3.1416<strong>)</strong><strong>(</strong>${distancia.value}<strong>)</strong></p>`;
            despeje2.innerHTML = `<p>${formula2} <strong>/</strong> ${formula3}</p>`;
            resultado.innerHTML = `<p>El resultado es <strong>${formula2 / formula3}</strong></p>`;        
        
    }

});