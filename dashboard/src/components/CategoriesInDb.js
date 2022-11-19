import React, {useEffect, useState} from "react";

function CategoriesInDb() {

  const [ categories, setCategories ] = useState();
  const [ products, setProducts ] = useState();
  const [ categoryCount, setCategoryCount ] = useState();


  useEffect(() => {

    fetch("http://localhost:3030/api/products/categories")    
      .then(response => response.json())
      .then(categories => {
        setCategories(categories.categories);
      })

      fetch("http://localhost:3030/api/products")    
      .then(response => response.json())
      .then(products => {
        setProducts(products.product);
      })

  }, []);

  useEffect (() => {
  if (categories && products) {
    console.log ("if", products);
    setCategoryCount (categories.map(cat => {return { name : cat.name, count : products.filter(prod => prod.relaciones.categoria == cat.name).length }}))
  } }, [categories,products])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos por categoria en DB
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categoryCount &&

            categoryCount.map((category, i) => {
              let categoryName = category.name;
              let categoryCap = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
                return(
                  <div className="col-lg-6 mb-4" key={i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{`${categoryCap} : ${category.count}`}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
