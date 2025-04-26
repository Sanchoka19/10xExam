const dataA = { sector: 'X', load: 70 };

const dataB = { uptime: '99%', status: 'online' };

const uniteObj = Object.assign(dataA, dataB);


// Sector X – load 70%, uptime 99%, status online

console.log(`Sector ${uniteObj.sector} - lead ${uniteObj.load}, uptime ${uniteObj.uptime}, status ${uniteObj.status}`);