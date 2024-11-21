 
const selectedProduct = JSON.parse(sessionStorage.getItem("selectedProduct"));  


if (selectedProduct) {
    document.querySelector('.main-image img').src = selectedProduct.image;
    document.querySelector('.right-column h2').textContent = selectedProduct.name; 
    document.querySelector('.right-column p').textContent = selectedProduct.description; 
    document.querySelector('.price').textContent = `$${selectedProduct.price}`;

   
    const sizeSelection = document.querySelector('.size-selection');
    selectedProduct.Sizes.forEach(size => {
        const button = document.createElement('button');
        button.textContent = size;
        sizeSelection.appendChild(button);
    });

    const colorSelection = document.querySelector('.color-selection');
    selectedProduct.Color.forEach(color => {
        const colorOption = document.createElement('span');
        colorOption.textContent = color;
        colorOption.className = "color-option";
        colorSelection.appendChild(colorOption);
    });
} else {
    console.error("No se encontró ningún producto seleccionado en sessionStorage.");
}
