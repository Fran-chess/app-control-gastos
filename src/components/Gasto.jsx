// IMPORTANDO DEPENDENDIA DE REACT
import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

// IMPORTANDO INDEX.JS FUNCIONES
import { formatearFecha } from "../helpers";
// IMPORTANDO IMAGENES
import ImageAhorro from "../img/icono_ahorro.svg";
import ImageCasa from "../img/icono_casa.svg";
import ImageComida from "../img/icono_comida.svg";
import ImageGastos from "../img/icono_gastos.svg";
import ImageSalud from "../img/icono_salud.svg";

const diccionarioImages = {
  ahorro: ImageAhorro,
  comida: ImageComida,
  casa: ImageCasa,
  gastos: ImageGastos,
  salud: ImageSalud,
};

const Gasto = ({ gasto, setGastosEditar, eliminarGasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastosEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => {
          eliminarGasto(id);
        }}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioImages[categoria]} alt="imagesUtiles" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
