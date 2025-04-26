nodes = ['core', 'grid', 'relay'];

let rez = nodes.map((item, index) => {
    return ` ${index+1}: ${item.toUpperCase()}`
})

console.log(`Node List: ${rez}`);
