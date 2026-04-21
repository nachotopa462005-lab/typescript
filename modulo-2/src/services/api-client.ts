import { RespuestaAPI } from '../domain/types/api.js';

export class ApiClient {
    /**
     * Método genérico para obtener recursos.
     * @param endpoint El destino de la petición (ej: '/estudiantes')
     * @returns Una promesa que resuelve a una RespuestaAPI del tipo T
     */
    async obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
        console.log(`📡 Solicitando datos a: ${endpoint}...`);

        // Simulamos un retraso de red de 1.5 segundos
        return new Promise((resolve) => {
            setTimeout(() => {
                // Aquí simulamos una respuesta exitosa. 
                // En un caso real, 'datos' vendría de un fetch()
                const respuesta: RespuestaAPI<T> = {
                    codigoEstado: 200,
                    exito: true,
                    // Usamos "as T" solo porque estamos simulando datos vacíos, 
                    // en producción los datos reales coincidirán con T.
                    datos: {} as T 
                };
                resolve(respuesta);
            }, 1500);
        });
    }
}