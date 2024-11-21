let products = []
function parseDataToProducts() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["description"], map["price"], map["image"], map["Sizes"], map["Color"], map["name"])
        products.push(product)
    }
}

function renderAllProducts() {
    let container = document.getElementById("products")
    for (let i = 0; i < products.length; i++) {
        let product = products[i]
        container.innerHTML += product.htmlCard()
    }
}

function productSelected(pos) { 
    let selectedProduct = data[pos];


    sessionStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    window.location.href = "./Producto.html";
}

function toggleFavorite(index) {
    const product = products[index];
    const isFavorited = product.toggleFavorite(); 
    const allProducts = document.querySelectorAll('.product');
    const productCard = allProducts[index];
    const favoriteIcon = productCard.querySelector('.favorite-icon');

    favoriteIcon.style.color = isFavorited ? 'orange' : 'gray';
}



parseDataToProducts()
renderAllProducts()