import { ApiClient } from './services/api-client.js';
const api = new ApiClient();
async function probarAPI() {
    console.log("--- INICIANDO PRUEBAS DE API GENÉRICA ---");
    // 1. Pedimos un Estudiante. Pasamos <Estudiante> como parámetro de tipo.
    const resEstudiante = await api.obtenerRecurso('/estudiantes/1');
    if (resEstudiante.exito) {
        // Aquí TypeScript SABE que resEstudiante.datos tiene 'nombre' y 'email'
        console.log(`✅ Estudiante recibido correctamente.`);
    }
    // 2. Pedimos una Asignatura. Pasamos <Asignatura>.
    const resAsignatura = await api.obtenerRecurso('/asignaturas/TS-101');
    if (resAsignatura.exito) {
        // Aquí TypeScript SABE que resAsignatura.datos tiene 'codigo' y 'creditos'
        console.log(`✅ Asignatura recibida: ${resAsignatura.codigoEstado}`);
    }
}
probarAPI();
//# sourceMappingURL=index.js.map