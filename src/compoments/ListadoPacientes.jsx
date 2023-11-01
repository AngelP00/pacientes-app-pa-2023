import { Paciente } from './Paciente';  // Asegúrate de importar el componente Paciente

export const ListadoPacientes = ({ pacientes, eliminarPaciente }) => {
  return (    
    <div className="w-full lg:w-3/4 p-4">
      <h2 className="text-2xl font-bold mb-4">Listado de Pacientes</h2>
      <ul className="bg-white rounded-lg shadow-md p-4">
        {pacientes.map((paciente, index) => (
          <Paciente
            key={index}
            nombre={paciente.nombre}
            apellido={paciente.apellido}
            telefono={paciente.telefono}
            fecha={paciente.fecha}
            sintomas={paciente.sintomas}
            onEliminar={() => eliminarPaciente(index)} // Llama a la función de eliminación con el índice del paciente
          />
        ))}
      </ul>
    </div>
  );
}
