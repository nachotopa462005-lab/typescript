import { RespuestaAPI } from '../domain/types/api.js';
export declare class ApiClient {
    /**
     * Método genérico para obtener recursos.
     * @param endpoint El destino de la petición (ej: '/estudiantes')
     * @returns Una promesa que resuelve a una RespuestaAPI del tipo T
     */
    obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>>;
}
//# sourceMappingURL=api-client.d.ts.map