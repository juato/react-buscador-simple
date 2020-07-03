import React from "react";

class Buscador extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(e) {
    this.props.onFilterText(e.target.value);
  }

  render() {
    return (
      <form className="mb-4">
        <input
          id="buscador"
          type="text"
          placeholder="Buscar..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInput}
        />
      </form>
    );
  }
}
export default Buscador;
