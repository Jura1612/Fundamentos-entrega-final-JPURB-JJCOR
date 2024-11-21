let products = [];

async function parseDataToProducts() {
    const data = await fetchData();

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let product = new Product(
            item.description,
            item.price,
            item.image,
            item.sizes || [],
            item.colors || [],
            item.name
        );
        products.push(product);
    }
}

async function renderAllProducts() {
    let container = document.getElementById("products");
    container.innerHTML = ""; 
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        container.innerHTML += `
 <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <!-- Botón con el ID del producto -->
        <button onclick="productSelected(${product.id})">Ver detalles</button>
        <span class="favorite-icon" onclick="toggleFavorite(${i})" 
              style="color: ${product.isFavorited ? 'orange' : 'gray'};">❤</span>
    </div>
`;
    }
}



renderAllProducts();

async function renderAllProducts() {
    let container = document.getElementById("products");
    container.innerHTML = "<p>Cargando productos...</p>";

    await parseDataToProducts(); 
    container.innerHTML = ""; 
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        container.innerHTML += product.htmlCard();
    }
}
