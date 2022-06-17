import React, { Fragment, useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Forumario = ({guardarGasto, guardarCrearGasto}) => {
  //State
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    // validar
    if (!nombre.trim() || cantidad === 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    guardarError(false);

    //Construir el gasto
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }

    

    //Pasarlo al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //resetear este form
    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <Fragment>
      <form onSubmit={agregarGasto}>
        <h2>Agrega tu gastos aqui</h2>

        {error ? (
          <Error mensaje={"Error en la cantidad o en el gasto "} />
        ) : null}

        <div className="campo">
          <label>Nombre del gasto</label>
          <input
            type="text"
            className="u-full-width one-half"
            placeholder="Ej. Transporte"
            value={nombre}
            onChange={(e) => {
              guardarNombre(e.target.value);
            }}
          />
        </div>

        <div className="campo">
          <label>Cantidad del gasto</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={!cantidad ? 0 :cantidad}
            onChange={(e) => {
              guardarCantidad(parseInt(e.target.value, 10));
            }}
          />
        </div>

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar gasto"
        />
      </form>
    </Fragment>
  );
};

export default Forumario;
