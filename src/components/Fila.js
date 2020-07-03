import React from 'react';

class Fila extends React.PureComponent{
    render(){
        return(
            <tr>
                <td>{this.props.dato.info}</td>
                <td>{this.props.dato.lugar}</td>
                <td>{this.props.dato.tipo}</td>
            </tr>
        );
    }
}
export default Fila;