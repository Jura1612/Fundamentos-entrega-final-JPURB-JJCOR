const favoritesContainer = document.getElementById('favorites');

async function loadFavorites() {
    // Obtener los productos favoritos guardados en localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (savedFavorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No tienes productos favoritos aún.</p>';
        return;
    }

    // Cargar todos los productos desde la API
    const allProducts = await fetchData();

    // Filtrar solo los productos que están en la lista de favoritos
    const favoriteProducts = allProducts.filter(product => savedFavorites.includes(product.name));

    // Renderizar los productos favoritos
    favoritesContainer.innerHTML = ''; // Limpiar cualquier contenido previo
    favoriteProducts.forEach(product => {
        const favoriteProduct = new Product(
            product.description,
            product.price,
            product.image,
            product.Sizes,
            product.Color,
            product.name
        );

        favoriteProduct.isFavorited = true; // Marcar como favorito para mostrar el color naranja

        favoritesContainer.innerHTML += favoriteProduct.htmlCard();
    });
}

// Ejecutar cuando la página cargue
document.addEventListener('DOMContentLoaded', loadFavorites);

async function fetchData() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/Jura1612/Fundamentos-entrega-final-JPURB-JJCOR/refs/heads/main/products.json");
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
}
