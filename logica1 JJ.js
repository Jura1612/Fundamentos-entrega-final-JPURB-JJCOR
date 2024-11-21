let products = [];

// Función para convertir los datos de la API a instancias de Product
async function parseDataToProducts() {
    const data = await fetchData(); // Llama a la función fetchData para obtener los datos

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

// Función para renderizar los productos en el DOM
async function renderAllProducts() {
    let container = document.getElementById("products");
    container.innerHTML = ""; // Limpia antes de renderizar nuevos productos.
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


// Llama a renderAllProducts para iniciar el renderizado
renderAllProducts();

async function renderAllProducts() {
    let container = document.getElementById("products");
    container.innerHTML = "<p>Cargando productos...</p>";

    await parseDataToProducts(); // Asegúrate de que los productos se procesen antes de renderizarlos

    container.innerHTML = ""; // Limpia el mensaje de carga
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        container.innerHTML += product.htmlCard();
    }
}

function productSelected(id) {
    const selectedProduct = products.find(product => product.id === id);
    if (selectedProduct) {
        // Almacena el producto completo en sessionStorage
        sessionStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
        window.location.href = "./Producto.html"; // Asegúrate de que esta ruta sea correcta
    } else {
        console.error("Producto no encontrado");
    }
}

