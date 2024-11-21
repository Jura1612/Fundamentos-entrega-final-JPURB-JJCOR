// Define la URL de tu API
const API_URL = "https://raw.githubusercontent.com/Jura1612/Fundamentos-entrega-final-JPURB-JJCOR/refs/heads/main/products.json"; // Cambia esto por la URL real

// Función para obtener los datos desde la API
async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        return result; // Suponiendo que la API devuelve un array de productos
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return []; // Retorna un array vacío si ocurre un error
    }
}
