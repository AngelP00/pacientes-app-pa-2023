export const Paciente = ({ nombre, apellido, telefono, fecha, sintomas, onEliminar }) => {
  const handleEliminarClick = () => {
    onEliminar(); // Llama a la función de eliminación proporcionada como prop
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{nombre} {apellido}</h2>
      <p className="text-gray-700">Teléfono: {telefono}</p>
      <p className="text-gray-700">Fecha: {fecha}</p>
      <p className="text-gray-700">Síntomas: {sintomas}</p>
      <button className="bg-red-500 text-white px-2 py-1 mt-2" onClick={handleEliminarClick}>
        Eliminar
      </button>
    </div>
  );
}
