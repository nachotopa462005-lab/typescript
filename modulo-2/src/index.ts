import { EstadoMatricula } from './domain/types/universidad.js';

function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "ACTIVA":
            // Aquí TypeScript sabe que 'estado' es MatriculaActiva
            return `Cursando ${estado.asignaturas.length} asignaturas.`;
        
        case "SUSPENDIDA":
            // Aquí sabe que es MatriculaSuspendida
            return `Suspendida por: ${estado.motivo}.`;
        
        case "FINALIZADA":
            // Aquí sabe que es MatriculaFinalizada
            return `Finalizada con media de ${estado.notaMedia}.`;
        
        default:
            /**
             * Si implementaste bien la unión en el Módulo 2, 
             * al llegar aquí 'estado' ya no puede ser nada más.
             * Por eso, asignarlo a 'never' funciona.
             */
            const _checkExhaustivo: never = estado;
            return _checkExhaustivo; 
    }
}