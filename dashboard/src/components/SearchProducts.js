import React, { useEffect, useState, useRef } from 'react';

function SearchProducts(){
	
	// Credenciales de API
	const apiKey = '371754cf';

	// Estados
	const [ movies, setMovies ] = useState([]);
	const [ keyword, setKeyword ] = useState("action");


	// Lo que vendria a reemplazar a componentDidMount()
	useEffect( () => {
		console.log("%cme monté", "color: green");
		fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
			.then(response => response.json())
			.then(data => {
				if(!data.Error){
					setMovies(data.Search);
				} else {
					setMovies([]);
				}
			})
			.catch(error => {
				console.error();
			})
	}, [keyword]);

	// const searchForm = useRef();
	const inputRef = useRef();

	const nuevaBusqueda = async(e) => {

		e.preventDefault();

		const inputValue = inputRef.current.value;	

		await setKeyword(inputValue);

		inputRef.current.value = ""
	} 

	
	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<React.Fragment>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={nuevaBusqueda}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={inputRef} type="text" className="form-control" />
								</div>
								<button className="btn btn-info" type="submit">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3 text-center">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p className="text-center">{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ !movies.length && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</React.Fragment>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchProducts;
