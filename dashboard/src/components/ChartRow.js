import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.title}</td>
                    <td>$ {props.price}</td>
                    <td>{props.CategoryId}</td>
                </tr>
            )
    }
    
        

export default ChartRow;