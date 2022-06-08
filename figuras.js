//Formulas del Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los Lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();

//Formulas del Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los Lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo mide: " + perimetroTriangulo + "cm");

const alturaTraingulo = 5.5;
const areaTriangulo = (baseTriangulo * alturaTraingulo) / 2;
console.log("El área del Triangulo mide: " + areaTriangulo + "cm2");
console.groupEnd();

//Formulas del Circulo
console.group("Circulo");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + "cm");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide: " + diametroCirculo + "cm");
//PI
const pi = Math.PI;
console.log("PI es: " + pi);
//Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("El perímetro del circulo mide: " + perimetroCirculo + "cm");
//Área
const areaCirculo = (radioCirculo*radioCirculo) * pi;
console.log("El área del circulo mide: " + areaCirculo + "cm2");
console.groupEnd();