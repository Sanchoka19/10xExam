const arr = ["A1", "B2", "X5", "C3"];

const tmp = (param) => {
    let foundCode = null;
    for(let i=0; i<param.length; i++) {
        if(param[i] === "X5") {
            return foundCode = arr[i];
        }
    }
}

console.log(`Found code: ${tmp(arr)}`);