/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const shoeMap = new Map();
    const output = [];

    for (const shoe of shoes) {
        const key = `${shoe.size}-${shoe.type}`;
        const complementKey = `${shoe.size}-${shoe.type === 'I' ? 'R' : 'I'}`;

        if (shoeMap.get(complementKey)) {
            // Encontramos un complemento, emparejamos
            shoeMap.set(complementKey, shoeMap.get(complementKey) - 1);
            if (shoeMap.get(complementKey) === 0) {
                shoeMap.delete(complementKey);
            }
            output.push(shoe.size);
        } else {
            // No hay complemento, guardamos la bota actual
            shoeMap.set(key, (shoeMap.get(key) || 0) + 1);
        }
    }

    return output;
}

// Ejemplo de uso
const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];

console.log(organizeShoes(shoes)); // [38, 42]
