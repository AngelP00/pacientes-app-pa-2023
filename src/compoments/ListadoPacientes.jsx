import { Paciente } from './Paciente';  // Asegúrate de importar el componente Paciente
import { motion } from "framer-motion";

export const ListadoPacientes = ({ pacientes, eliminarPaciente }) => {
  return (    
    <div className="w-full lg:w-3/4 p-4">
      <h2 className="text-2xl font-bold mb-4">Listado de Pacientes</h2>
      <p> Cant. de pacientes: {''}
        <span className="text-indigo-600 font-bold">{pacientes.length}</span>
      </p>

      <motion.ul
        className="bg-white rounded-lg shadow-md p-4"
        initial={{ opacity: 0, y: 20 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Animación de entrada
        exit={{ opacity: 0, y: -20 }} // Animación de salida
      >
        {pacientes.map((paciente, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }} // Estado inicial
            animate={{ opacity: 1, x: 0 }} // Animación de entrada
            exit={{ opacity: 0, x: 20 }} // Animación de salida
          >
            <Paciente
              nombre={paciente.nombre}
              apellido={paciente.apellido}
              telefono={paciente.telefono}
              fecha={paciente.fecha}
              sintomas={paciente.sintomas}
              onEliminar={() => eliminarPaciente(index)}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
