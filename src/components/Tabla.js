import React from "react";
import Fila from "./Fila";

class Tabla extends React.Component {

  render() {
    var filas = [];
    this.props.datos.forEach((dato, i) => {
      if (dato.info.indexOf(this.props.filterText) === -1) {
        return;
      }
      filas.push(<Fila dato={dato} key={i} />);
    });

    return (
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>info</th>
            <th>lugar</th>
            <th>tipo</th>
          </tr>
        </thead>
        <tbody>{filas}</tbody>
      </table>
    );
  }

}
export default Tabla;
