/**
 * Analizador Estadístico
 */

// Tipo de retorno común para manejar arrays vacíos
type StatResult = number | null;

/**
 * Calcula la media aritmética de un array de números.
 */
export const calcularMedia = (numbers: number[]): StatResult => {
  if (numbers.length === 0) return null;
  
  const suma = numbers.reduce((acc, curr) => acc + curr, 0);
  return suma / numbers.length;
};

/**
 * Calcula la mediana (el valor central).
 */
export const calcularMediana = (numbers: number[]): StatResult => {
  if (numbers.length === 0) return null;

  // Ordenamos de menor a mayor (importante: .sort() muta el array original, usamos spread)
  const sorted = [...numbers].sort((a, b) => a - b);
  const mitad = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    // Si es par, promedio de los dos centrales
    return (sorted[mitad - 1] + sorted[mitad]) / 2;
  }

  // Si es impar, el del medio
  return sorted[mitad];
};

/**
 * Filtra valores que superan un límite de desviación (atípicos).
 */
export const filtrarAtipicos = (numbers: number[], limite: number): number[] => {
  if (numbers.length === 0) return [];
  
  const media = calcularMedia(numbers);
  if (media === null) return [];

  // Filtra números cuya distancia a la media sea menor o igual al límite
  return numbers.filter(n => Math.abs(n - media) <= limite);
};