document.querySelector("#search").addEventListener("input", async (e) => {
    try {
        let petition = await fetch ('http://localhost:3030/api/products/');
        let response = await petition.json();
        let products = response.product;
        let names = products.map(product => product.name)

        let filtro = name => String(name).toLowerCase().trim().includes(String(e.target.value).toLowerCase().trim());
        let resultados = e.target.value.length > 1 ? names.filter(filtro) : [];
        
        document.querySelector("#suggestions").innerHTML = null;
        resultados.forEach(element => document.querySelector("#suggestions").innerHTML += `<option value="${element}">${element}</option>`);
    } catch (error) {
        console.log(error);
    }
})