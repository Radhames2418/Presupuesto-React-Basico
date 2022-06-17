import React from "react";
import Gasto from "./Gasto";
import Error from "./Error";

const Listado = ({ gastos, errores }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listados</h2>
      {errores ? <Error mensaje={"Presupuesto insuficiente"} /> : null}

      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};

export default Listado;
