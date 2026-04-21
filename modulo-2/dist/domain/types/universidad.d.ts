export interface Estudiante {
    readonly id: string;
    nombre: string;
    email: string;
    edad?: number;
}
export interface Asignatura {
    readonly codigo: string;
    nombre: string;
    creditos: number;
}
interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: string[];
}
interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
}
interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;
export {};
//# sourceMappingURL=universidad.d.ts.map