let products = [];

async function parseDataToProducts() {
    const data = await fetchData();
    

    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    for (let i = 0; i < data.length; i++) {
        const product = new Product(
            data[i].description,
            data[i].price,
            data[i].image,
            data[i].Sizes,
            data[i].Color,
            data[i].name
        );

        if (savedFavorites.includes(data[i].name)) {
            product.isFavorited = true;
        }

        products.push(product);
    }

    renderProducts();
}

function renderProducts() {
    const productGrid = document.getElementById('products');
    productGrid.innerHTML = ''; 

    products.forEach(product => {
        productGrid.innerHTML += product.htmlCard();
    });
}

function toggleFavorite(productId) {
    const product = products[productId];

    const isFavorited = product.toggleFavorite();

    const productCard = document.querySelectorAll('.product')[productId];
    const favoriteIcon = productCard.querySelector('.favorite-icon');
    favoriteIcon.style.color = isFavorited ? 'orange' : 'gray';

    let savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorited) {
        savedFavorites.push(product.name);
    } else {
        savedFavorites = savedFavorites.filter(favorite => favorite !== product.name);
    }

    localStorage.setItem('favorites', JSON.stringify(savedFavorites));
}

document.addEventListener('DOMContentLoaded', parseDataToProducts);
