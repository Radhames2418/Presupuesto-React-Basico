import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Forumario from "./components/Formulario";
import Listado from "./components/Listado";
import Presupuesto from "./components/ControlPresupuesto";

function App() {
  //Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, actualizarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);
  const [errores, guardarErrores] = useState(false);

  //UseEffect
  useEffect(() => {
    const presupuestoRestante = restante - gasto.cantidad;

    if (presupuestoRestante < 0) {
      guardarErrores(true);
      return;
    }

    if (creargasto) {
      actualizarGastos([...gastos, gasto]);
    }

    guardarErrores(false);
    guardarRestante(presupuestoRestante);

    guardarCrearGasto(false);
  }, [gasto]);

  console.log(gastos);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Forumario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado errores={errores} gastos={gastos} />
                <Presupuesto presupuesto={presupuesto} restante={restante} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
