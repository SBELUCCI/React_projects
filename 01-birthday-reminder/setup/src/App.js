import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
function App() {


  // Lo que empieza llamado como USE se lo denomina HOOK
  const [
    people, // Variable de estado
    setPeople // Funcion SETTER de la varible estado
  ] = useState([]); // entre parentesis de useState va su estado inicial si queres)

  // const manejarClick = () => setPeople(data) // Funcion no anonima

  const [contador, setContador] = useState(0);
  const [nuevoNombre, setNuevoNombre] = useState("")
  const [nuevaEdad, setNuevaEdad] = useState()
  const [fotoURL, setFotoURL] = useState()
  const [fecha, setFecha] = useState()

  const manejarContador = (contadorActual) => {
    setContador(contadorActual + 1);
  }

  useEffect(() => { // tiene una funcion adentro anonima que hace lo que quieras
    // console.log("Cantidad de personas: ", people.length)
    console.log("Mi nuevo nombre es: ", nuevoNombre, nuevaEdad)
  }, [nuevoNombre, nuevaEdad]) // el array de dependencias puede estar vacio o no

  return <main>

    <section className="container">
      <h3>{people.length} birthays today</h3>
      <List miGente={people} />
      <input
        onChange={(e) => setNuevoNombre(e.target.value)}
        placeholder="Ingresa tu nombre" />
      <input
        type="number"
        onChange={(e) => setNuevaEdad(e.target.value)}
        placeholder="Ingresa tu edad" />
      <input
        onChange={(e) => setFotoURL(e.target.value)}
        placeholder="Ingresa la foto" />
      <input type="date" onChange={(e) => setFecha(e.target.value)} />
      {/* {people.map((persona) => {
         const { id, name, age } = persona
         return (
          <div >
            {id}
            {name}
            {age}

          </div>
         )
      } )} */}
      <button
        onClick={
          () => {
            if (!!data[contador]) {
              manejarContador(contador);
              // hacemos una copia de el array people con ...
              setPeople([...people, data[contador]])
            } else {
              manejarContador(contador);
              // hacemos una copia de el array people con ...
              setPeople(
                [
                  ...people,
                  {
                    id: contador + 1,
                    name: nuevoNombre,
                    age: nuevaEdad,
                    image: fotoURL,
                    birthDate: fecha
                    // birthDate
                  }
                ]
              )

            }
          }
          // () => setPeople(data) funcion lambda anonima
          // function(){
          //   setPeople(data) funcion estandar anonima
          // }
          // manejarClick Funcion anonima linea 17
        }>
        Agregar a los usuarios
        </button>
    </section>
  </main>
}

export default App;
