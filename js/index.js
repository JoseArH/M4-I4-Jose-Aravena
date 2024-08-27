import { findPokemon } from './search.js';

document.getElementById('search-button').addEventListener('click', () => {
    const input = document.getElementById('pokemon-input').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Buscando...";

    findPokemon(input, (pokemon) => {
        if (pokemon) {
            resultDiv.innerHTML = `
                <div class="pokemon-card">
                    <img src="${pokemon.imageUrl}" alt="${pokemon.name}" class="pokemon-image">
                    <h2>${pokemon.name}</h2>
                    <p>ID: ${pokemon.id}</p>
                    <p>Tipos: ${pokemon.types.join(', ')}</p>
                </div>
            `;
        } else {
            resultDiv.innerHTML = "No se encontró ningún Pokémon con ese nombre o ID.";
        }
    });
});