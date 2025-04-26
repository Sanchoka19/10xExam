const properties = { cpu: 80, memory: 70, disk: 90 };
let propertiesLen = Object.entries(properties).length;


const calcAverage = (stats) => {
    let sum = 0;

    for (const key in stats) {
        sum += stats[key];
    }

    return sum / propertiesLen;
}


console.log(calcAverage(properties));
