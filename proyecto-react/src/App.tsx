import { DataTable } from './components/DataTable';
import { calcularDiferenciaDias } from './utils/dateUtils';

interface Estudiante {
  id: number;
  nombre: string;
  carrera: string;
}

function App() {
  const estudiantes: Estudiante[] = [
    { id: 1, nombre: "Nacho Topa", carrera: "Ingeniería" },
    { id: 2, nombre: "Ana García", carrera: "Diseño" }
  ];

  const cols: { clave: keyof Estudiante; titulo: string }[] = [
    { clave: 'id', titulo: 'Legajo' },
    { clave: 'nombre', titulo: 'Nombre Completo' },
    { clave: 'carrera', titulo: 'Carrera' }
  ];

  // Ejemplo de uso de la utilidad de fechas
  const dias = calcularDiferenciaDias(new Date('2024-01-01'), new Date());

  return (
    <div>
      <h1>Gestión Universitaria - Módulo 3</h1>
      <p>Días transcurridos desde inicio de año: {dias}</p>
      <DataTable datos={estudiantes} columnas={cols} />
    </div>
  );
}

export default App;