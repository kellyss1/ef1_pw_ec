import axios from "axios";

const consumirAPI = async () => {
    const num = Math.floor(Math.random() * 5) + 1; // Generate a random number between 1 and 5
    const respuesta = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg`;
    const nombre = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then(r => r.data.name);
    return { respuesta, nombre };
};

export async function consumirAPIFacade() {
    return await consumirAPI();
}