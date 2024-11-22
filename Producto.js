const selectedProduct = JSON.parse(sessionStorage.getItem("selectedProduct"));

if (selectedProduct) {
    const mainImage = document.querySelector('.main-image img');
    mainImage.src = selectedProduct.image;
    mainImage.alt = selectedProduct.name;

    document.querySelector('.right-column h2').textContent = selectedProduct.name;

    document.querySelector('.right-column p').textContent = selectedProduct.description;

    document.querySelector('.price').textContent = `$${selectedProduct.price}`;

    const sizeSelection = document.querySelector('.size-selection');
    sizeSelection.innerHTML = ''; 
    selectedProduct.Sizes.forEach(size => {
        const button = document.createElement('button');
        button.textContent = size;
        sizeSelection.appendChild(button);
    });


} else {
    console.error("No se encontró ningún producto seleccionado en sessionStorage.");
    document.body.innerHTML = "<h1>Error: Producto no encontrado.</h1>";
}
