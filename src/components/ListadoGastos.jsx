import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastosEditar,
  eliminarGasto,
  gastosFiltrados,
  filtro,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos"}</h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              key={gasto.id}
              gasto={gasto}
              setGastosEditar={setGastosEditar}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              key={gasto.id}
              gasto={gasto}
              setGastosEditar={setGastosEditar}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
