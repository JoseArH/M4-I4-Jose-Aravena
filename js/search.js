export function findPokemon(input, callback) {
    const url = isNaN(input) 
        ? `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}` 
        : `https://pokeapi.co/api/v2/pokemon/${parseInt(input)}`;

    setTimeout(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("Pokémon no encontrado");
                return response.json();
            })
            .then(data => {
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    types: data.types.map(typeInfo => typeInfo.type.name),
                    imageUrl: data.sprites.front_default
                };
                callback(pokemon);
            })
            .catch(error => {
                callback(null);
            });
    }, 1000);
}