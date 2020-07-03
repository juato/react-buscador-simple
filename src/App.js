import React from "react";

import './App.css';

import Header from "./components/Header";
import Buscador from "./components/Buscador";
import Tabla from "./components/Tabla";

var DATOS = [
  {
    info: "detalle 1",
    lugar: "lugar 1",
    tipo: "tipo 1",
  },
  {
    info: "detalle 2",
    lugar: "lugar 2",
    tipo: "tipo 2",
  },
  {
    info: "detalle 3",
    lugar: "lugar 3",
    tipo: "tipo 3",
  },
  {
    info: "detalle 4",
    lugar: "lugar 4",
    tipo: "tipo 4",
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
    this.handleFilterText = this.handleFilterText.bind(this);
  }

  handleFilterText(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  render() {
    return (
        <div className="container">
          <Header />
          <Buscador
            filterText={this.state.filterText}
            onFilterText={this.handleFilterText}
          />
          <Tabla
            datos={DATOS}
            filterText={this.state.filterText}
          />
        </div>
    );
  }
}

