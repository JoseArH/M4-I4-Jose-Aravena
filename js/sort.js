export function sortPokemon(data, by, callback) {
    let sortedData;
    if (by === 'id') {
        sortedData = [...data].sort((a, b) => a.id - b.id);
    } else if (by === 'name') {
        sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    }
    callback(sortedData);
}
