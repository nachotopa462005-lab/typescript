// --- Entidades de Dominio ---

export interface Estudiante {
    readonly id: string; // Inmutable
    nombre: string;
    email: string;
    edad?: number; // Opcional
}

export interface Asignatura {
    readonly codigo: string;
    nombre: string;
    creditos: number;
}

// --- Unión Discriminada: EstadoMatricula ---

interface MatriculaActiva {
    tipo: "ACTIVA"; // Discriminante
    asignaturas: string[]; // IDs de las asignaturas
}

interface MatriculaSuspendida {
    tipo: "SUSPENDIDA"; // Discriminante
    motivo: string;
}

interface MatriculaFinalizada {
    tipo: "FINALIZADA"; // Discriminante
    notaMedia: number;
}

// El Alias de tipo que une las tres interfaces
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;