// La <T> es el "parámetro de tipo". Se llenará con Estudiante, Asignatura, etc.
export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    mensaje?: string;
}