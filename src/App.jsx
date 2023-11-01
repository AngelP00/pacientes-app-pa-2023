import {useState} from 'react'
import { Formulario } from './compoments/Formulario'
import { Header } from './compoments/Header'
import { ListadoPacientes } from './compoments/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([])

  // Imprimir los datos de pacientes en la consola
  console.log(pacientes);

  const eliminarPaciente = (index) => {
    const nuevosPacientes = [...pacientes];
    nuevosPacientes.splice(index, 1);
    setPacientes(nuevosPacientes);
  };

  return (
    <div className='container mx-auto mt-20'>
      <Header
       />

      <div className='mt-12 md:flex'>
        <Formulario 
          setPacientes={setPacientes}
        />
        <ListadoPacientes pacientes={pacientes} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}

export default App
