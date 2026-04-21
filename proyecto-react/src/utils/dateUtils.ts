import { DateTime } from 'luxon';

/**
 * Calcula la diferencia en días entre dos fechas usando Luxon.
 * Entradas y salidas estrictamente tipadas.
 */
export const calcularDiferenciaDias = (fechaInicio: Date, fechaFin: Date): number => {
  const inicio = DateTime.fromJSDate(fechaInicio);
  const fin = DateTime.fromJSDate(fechaFin);
  
  const diferencia = fin.diff(inicio, 'days').days;
  
  return Math.floor(diferencia || 0);
};