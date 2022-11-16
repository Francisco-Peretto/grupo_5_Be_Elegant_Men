import React, {useEffect, useState} from "react";

function CategoriesInDb() {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {

     fetch("http://localhost:3030/api/products/categories")
       .then(response => response.json())
       .then(products => {
         setCategories(products.categories);
       })

  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Generos y productos por genero en DB
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories &&

              categories.map((category, i) => {
                return(
                  <div className="col-lg-6 mb-4" key={i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{`${category.name}: ${category.id}`}</div>
                    </div>
                  </div>
                )
              })
            
            }
            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Acción</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Animación</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Aventura</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Ciencia Ficción</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Comedia</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Documental</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Drama</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Fantasia</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Infantiles</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Musical</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
