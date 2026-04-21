import { useState } from 'react';

// Definimos qué estructura debe tener una columna
interface Columna<T> {
  clave: keyof T; // 'keyof' asegura que la clave exista en el objeto T
  titulo: string;
}

interface DataTableProps<T> {
  datos: T[];
  columnas: Columna<T>[];
}

export function DataTable<T extends { id: string | number }>({ datos, columnas }: DataTableProps<T>) {
  // Aplicamos Partial<T>: el estado de edición puede tener solo algunos campos de la entidad
  const [filaEditando, setFilaEditando] = useState<Partial<T> | null>(null);

  const handleEditar = (fila: T) => {
    setFilaEditando(fila);
    console.log("Editando entidad con ID:", fila.id);
  };

  return (
    <div style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            {columnas.map((col) => (
              <th key={String(col.clave)} style={{ padding: '10px', border: '1px solid #ccc' }}>
                {col.titulo}
              </th>
            ))}
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila) => (
            <tr key={fila.id}>
              {columnas.map((col) => (
                <td key={String(col.clave)} style={{ padding: '10px', border: '1px solid #ccc' }}>
                  {String(fila[col.clave])}
                </td>
              ))}
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                <button onClick={() => handleEditar(fila)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filaEditando && (
        <div style={{ marginTop: '20px', border: '1px solid orange', padding: '10px' }}>
          <p><strong>Modo Edición activo para ID: {filaEditando.id}</strong></p>
          <button onClick={() => setFilaEditando(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}