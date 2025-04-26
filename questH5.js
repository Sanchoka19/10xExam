const nodeArr = ['node1', 'node2', 'node3'];


function callback(param) {
    console.log(`procesed: ${param}`);
}

function processNodes(callback, list) {
    for (const item of list) {
        callback(item);
    }
}

let rez = processNodes(callback, nodeArr);