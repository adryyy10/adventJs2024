function createXmasTree(height, char) {
    if (height < 1 || height > 100 || !Number.isInteger(height)) {
        throw new Error("La altura debe ser un entero positivo entre 1 y 100.");
    }

    let tree = "";

    // Construir las hojas del árbol
    for (let i = 0; i < height; i++) {
        const spaces = '_'.repeat(height - i - 1);
        const decoration = char.repeat(2 * i + 1);
        tree += spaces + decoration + spaces + '\n';
    }

    // Construir el tronco del árbol
    const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    tree += trunk + '\n' + trunk;

    return tree;
}

// Ejemplos de uso
const tree = createXmasTree(5, '*');
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/