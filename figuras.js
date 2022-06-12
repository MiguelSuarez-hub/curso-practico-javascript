//Formulas del Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
};

console.groupEnd();

//Formulas del Triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    const perimetro = lado1  + lado2 + base;
    return perimetro;
}; 

function areaTriangulo(lado1, lado2, base) {
    if (lado1 == lado2  && base != lado2) {
        const altura = Math.sqrt((lado1 * lado1) - ((base/2) * (base/2)));
        return  (base * altura) / 2;     
    } else if (lado1 == base && base != lado2) {
        const altura = Math.sqrt((lado1 * lado1) - ((lado2/2) * (lado2/2)));
        return  (lado2 * altura) / 2;  
    } else if (lado2 == base && lado1 != base) {
        const altura = Math.sqrt((lado2 * lado2) - ((lado1/2) * (lado1/2)));
        return  (lado1 * altura) / 2; 
    } else if (lado2 == base && base == lado1){
        const altura = Math.sqrt((lado2 * lado2) - ((lado1/2) * (lado1/2)));
        return  (lado1 * altura) / 2; 
    } else {
        const x = (base - (((lado2 + lado1) * (lado2 - lado1)) / base)) / 2;
        const altura = Math.sqrt((lado1**2)-(x**2))
        return (base * altura) / 2;
    }
    
};

console.groupEnd();

//Formulas del Circulo
console.group("Circulo");

function diametroCirculo(radio){
    return radio * 2;
};

//PI
const pi = Math.PI;
console.log("PI es: " + pi);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
};

//Área
function areaCirculo(radio){
    return (radio*radio) * pi;
};

console.groupEnd();
//Funciones para calcular area y perimetro, conectadas a un boton de html

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");

    const lado = input.value;

    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado");

    const lado = input.value;

    const area = areaCuadrado(lado);
    alert(area);
};

//Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("lado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("lado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("base");
    const base = input3.value;

    const perimetro = perimetroTriangulo(Number(lado1), Number(lado2), Number(base));
    alert(perimetro);
};

function calcularAreaTriangulo() {
    const input1 = document.getElementById("lado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("lado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("base");
    const base = input3.value;

    const area = areaTriangulo(Number(lado1), Number(lado2), Number(base));
    alert(area);
};