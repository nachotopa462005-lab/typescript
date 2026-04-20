export const calcularMedia = (numbers) => {
    if (numbers.length === 0)
        return null;
    const suma = numbers.reduce((acc, curr) => acc + curr, 0);
    return suma / numbers.length;
};
export const calcularMediana = (numbers) => {
    if (numbers.length === 0)
        return null;
    const sorted = [...numbers].sort((a, b) => a - b);
    const mitad = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        const val1 = sorted[mitad - 1];
        const val2 = sorted[mitad];
        // Agregamos una validación extra para calmar a TypeScript
        if (val1 !== undefined && val2 !== undefined) {
            return (val1 + val2) / 2;
        }
    }
    const resultado = sorted[mitad];
    return resultado !== undefined ? resultado : null;
};
export const filtrarAtipicos = (numbers, limite) => {
    if (numbers.length === 0)
        return [];
    const media = calcularMedia(numbers);
    if (media === null)
        return [];
    return numbers.filter(n => Math.abs(n - media) <= limite);
};
//# sourceMappingURL=math-utils.js.map