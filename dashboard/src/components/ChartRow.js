import React from 'react';

function ChartRow(props){
    let category = props.relaciones.categoria;
    let categoryCap = category.charAt(0).toUpperCase() + category.slice(1);
    return (
                <tr>
                    <td>{props.sku}</td>
                    <td>{props.name}</td>
                    <td>${props.price}</td>
                    <td>{categoryCap}</td>
                </tr>
            )
    }

export default ChartRow;