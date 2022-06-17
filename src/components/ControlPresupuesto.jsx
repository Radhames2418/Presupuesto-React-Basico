import React, { Fragment } from "react";
import {revistarPresupuesto} from '../helpers'

const ControlPresupuesto = ({presupuesto, restante}) => {

  let clase = revistarPresupuesto(presupuesto, restante);

  return (
    <Fragment>
      <div className="alert alert-primary ">Presupuesto : ${presupuesto} </div>
      <div className={clase}>Restante: ${restante} </div>
    </Fragment>
  );
};

export default ControlPresupuesto;
