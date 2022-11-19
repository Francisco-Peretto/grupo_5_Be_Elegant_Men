import React, { useEffect, useState } from 'react';
import ChartRow from './ChartRow';

function Chart (){

    const [ productsInDB , setProductsInDB ] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3030/api/products')
        .then(response => response.json())
        .then(({product}) => {
            setProductsInDB(product);
            })

            .catch(error => console.error(error))

    },[]);

    return (
 
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <h5 className="mb-10 font-weight-bold text-gray-800">Lista de Productos en DB</h5>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">                        
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>PRECIO</th>
                                <th>CATEGORIA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            productsInDB.map((product , i) => {
                                return <ChartRow { ...product} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;