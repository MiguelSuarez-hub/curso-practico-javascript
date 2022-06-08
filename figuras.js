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
    return lado1 + lado2 + base;
}; 

function areaTriangulo(altura, base) {
    return (base * altura) / 2;
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