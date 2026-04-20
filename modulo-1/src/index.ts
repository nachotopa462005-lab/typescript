import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';
// 1. Datos de prueba con un valor atípico (el 100)
const sueldos = [1200, 1350, 1280, 1400, 5000, 1190];
const limiteVariacion = 1000;

console.log("--- RESULTADOS DEL MÓDULO MATEMÁTICO ---");

// Prueba de Media
const media = calcularMedia(sueldos);
console.log(`Media: ${media?.toFixed(2)}`);

// Prueba de Mediana
const mediana = calcularMediana(sueldos);
console.log(`Mediana: ${mediana}`);

// Prueba de Filtrado
const filtrados = filtrarAtipicos(sueldos, limiteVariacion);
console.log(`Valores normales (sin atípicos): [${filtrados.join(", ")}]`);

// 2. Prueba de Caso Límite (Array vacío)
const datosVacios: number[] = [];
console.log("\n--- PRUEBA DE ARRAY VACÍO ---");
console.log(`Media en vacío: ${calcularMedia(datosVacios)}`); // Debería ser null