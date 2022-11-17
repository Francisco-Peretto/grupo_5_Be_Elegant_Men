import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td>{props.sku}</td>
                    <td>{props.name}</td>
                    <td>${props.price}</td>
                    <td>{props.relaciones.categoria}</td>
                </tr>
            )
    }

export default ChartRow;