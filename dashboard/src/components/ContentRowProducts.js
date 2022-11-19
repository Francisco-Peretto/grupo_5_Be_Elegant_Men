import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

function ContentRowProducts(){

    // Estados
	const [ products, setProducts ] = useState([]);

	const [ users, setUsers ] = useState([]);
	const [ categories, setCategories ] = useState(0);

    // Lo que vendria a reemplazar a componentDidMount()
	useEffect( () => {
		console.log("%cme monté", "color: green");
        console.log(process.env)
		fetch(`http://localhost:3030/api/products/`)
			.then(response => response.json())
			.then(products => {
				setProducts(products.count);
				setCategories(products.categories);
			})
			.catch(error => {
				console.error();
			})
         fetch(`http://localhost:3030/api/users`)
	 	.then(response => response.json())
	 	.then(users => {
	 		setUsers(users.count);			
	 	})
     	.catch(error => {
 		console.error();
	 	})
         fetch(`http://localhost:3030/api/products/categories`)
			.then(response => response.json())
			.then(categories => {
				setCategories(categories.count);
			})
			.catch(error => {
				console.error();
			})
	 }, []);


    let productsInDB = {
        title: 'Productos en DB',
        color: 'primary', 
        quantity: products,
        icon: 'fas fa-briefcase'
    }

    let usersInDb = {
        title:'Usuarios en DB', 
        color:'success', 
        quantity: users,
        icon:'fas fa-users'
    }

    let categoriesInDB = {
        title: 'Categorías en DB' ,
        color: 'warning',
        quantity: categories,
        icon: 'fas fa-folder-open'
    }

    let cartProps = [productsInDB, usersInDb, categoriesInDB];

    return (
    
        <div className="row">
            
            {cartProps.map( (prop, i) => {

                return <SmallCard {...prop} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;