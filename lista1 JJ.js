
const API_URL = "https://raw.githubusercontent.com/Jura1612/Fundamentos-entrega-final-JPURB-JJCOR/refs/heads/main/products.json"; // Cambia esto por la URL real


async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return [];
    }
}
