# Documentación de Arquitectura - Sistema Universitario (Módulo 2)

## 1. Modelo de Datos y Entidades

Para el modelado de las entidades principales como `Estudiante` y `Asignatura`, se han utilizado **Interfaces**.

### ¿Por qué `interface` en lugar de `type`?
* **Contratos de Objetos:** Las interfaces están diseñadas específicamente para definir la forma de los objetos. Son más legibles cuando se trata de describir entidades de dominio.
* **Extensibilidad:** Las interfaces permiten el *declaration merging*, lo que facilita extender el modelo en el futuro si el sistema crece.
* **Inmutabilidad:** Se aplicó el modificador `readonly` en los identificadores (`id`, `codigo`). Esto garantiza que, una vez asignado un ID por la base de datos, no pueda ser alterado accidentalmente en la lógica del negocio, protegiendo la integridad referencial.

## 2. Gestión de Estados con Uniones Discriminadas

Se implementó el tipo `EstadoMatricula` utilizando el patrón de **Uniones Discriminadas** (o *Tagged Unions*).

### Justificación Técnica
En lugar de usar una sola interfaz con múltiples propiedades opcionales (que pueden causar estados inconsistentes), se dividió la matrícula en tres estados atómicos: `ACTIVA`, `SUSPENDIDA` y `FINALIZADA`.
* **Propiedad Discriminante:** La propiedad `tipo` actúa como una etiqueta literal.
* **Seguridad en el Narrowing:** Esto permite que funciones como `generarReporte` utilicen un `switch` para que TypeScript "estreche" el tipo de forma 100% segura. Si el tipo es `SUSPENDIDA`, el compilador garantiza que existe un `motivo` y prohíbe el acceso a `notaMedia`.



## 3. Abstracción de Red con Genéricos

El servicio `ApiClient` utiliza **Programación Genérica** (`<T>`) para gestionar las respuestas del servidor.

### Beneficios de los Genéricos en la API
* **Abstracción de la Respuesta:** La interfaz `RespuestaAPI<T>` envuelve cualquier dato devuelto por el servidor, estandarizando que todas las respuestas tengan `codigoEstado`, `exito` y `datos`.
* **Seguridad de Tipos de Extremo a Extremo:** Al llamar a `obtenerRecurso<Estudiante>('/url')`, TypeScript sabe que el campo `datos` de la promesa resultante es de tipo `Estudiante`.
* **Reutilización de Código:** Evitamos crear un método de fetch para cada entidad. El mismo cliente sirve para cualquier recurso presente o futuro del sistema universitario.



## 4. Configuración del Entorno

Se ha optado por un entorno de módulos **ESM (ECMAScript Modules)** mediante la configuración `"type": "module"` en `package.json` y `NodeNext` en el compilador. Esto alinea el proyecto con los estándares modernos de desarrollo en Node.js y facilita el consumo de paquetes modernos de terceros.