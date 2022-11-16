const formatText = text => String(text).toLowerCase().trim();

document.querySelector("#search").addEventListener("input", async (e) =>{
    try {
        let filtro = title => formatText(title).includes(formatText(e.target.value));
        let resultados = e.target.value.length > 1 ? JSON.parse(localStorage.getItem("products")).filter(filtro) : [];
        document.querySelector("#suggestions").innerHTML = null;
        resultados.forEach(element => document.querySelector("#suggestions").innerHTML += `<option value="${element}">${element}</option>`);
    } catch (error) {
        console.log(error);
    }
})

window.addEventListener('load', async (e) => {
    try {
        let petition = await fetch (''); //cambiar a API
        let response = await petition.json();
        localStorage.setItem("products", JSON.stringify(response.data.map(product => product.title)));
    } catch {
        console.log(error)
    }
})