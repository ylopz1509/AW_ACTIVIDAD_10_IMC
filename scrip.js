class CalculadoraIMC {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }

    //metodo de cálculo principal
    calcularIMC() {
        const imc = this.peso / Math.pow(this.altura, 2);
        return imc; 
    }

   //metodo para generar el resultado completo
    obtenerResultado() {
        const imc = this.calcularIMC(); 
        let categoria, mensaje, rutaImagen; 
        if (imc < 18.5) {
            categoria = "Bajo Peso";
            mensaje = "Necesitas ganar un poco de peso para estar saludable";
            rutaImagen = "images/bajo-peso.png"; 
        } else if (imc < 25) {
            categoria = "Peso Normal";
            mensaje = "Tienes un peso saludable.";
            rutaImagen = "images/peso-normal.png"; 
        } else if (imc < 30) {
            categoria = "Sobrepeso";
            mensaje = "Considera una dieta más balanceada";
            rutaImagen = "images/sobrepeso.png"; 
        } else {
            categoria = "Obesidad";
            mensaje = "Es importante consultar un nutriologo";
            rutaImagen = "images/obesidad.png"; 
        }
        return `
            <p>Tu IMC es: <strong>${imc.toFixed(2)}</strong></p>
            <h3>Categoría: ${categoria}</h3>
            <p>${mensaje}</p>
            <img src="${rutaImagen}" alt="${categoria}" class="img-resultado">
        `;
    }
}

document.getElementById('forma-imc').addEventListener("submit", function(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);
    
    const alturaMetros = alturaCm / 100;
    if (peso > 0 && alturaMetros > 0) {
        const objIMC = new CalculadoraIMC(peso, alturaMetros);
        
        document.getElementById('resultado-imc').innerHTML = objIMC.obtenerResultado();
    } else {
        document.getElementById('resultado-imc').innerHTML = "<p>No es valido.</p>";
    }
});