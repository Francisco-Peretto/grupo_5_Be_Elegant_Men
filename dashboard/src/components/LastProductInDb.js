import React, {useEffect, useState} from 'react';

import "./LastProductInDb.css"

function LastProductInDb(){

    const [ lastProduct, setLastProduct ] = useState();

    useEffect(() => {
        console.log("me monté");
        fetch("http://localhost:3030/api/products/lastproduct")
            .then(response => response.json())
            .then(product => setLastProduct(product.product))
    },[])

    if (lastProduct === undefined) {
        return <p>Cargando</p>;
    }
    const {image, name, detail, price} = lastProduct;
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto en DB</h5>
                </div>
                {lastProduct.length === 0 && <div className="card-body"><div className={`lds-dual-ring-lastproduct`}></div></div>}
                {lastProduct.length !== 0 && 
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-2 px-sm-2 mt-2 mb-4" style={{width: 18 +'rem'}} src={`${image}`} alt="Last Product in Data Base"/>
                        </div>
                        <h3>
                            {name}
                        </h3>
                        <p>
                            {detail}
                        </p>
                        <h5>
                            $ {price}
                        </h5>
                    </div>
            }   
            </div>
        </div>
    )
}

export default LastProductInDb;
