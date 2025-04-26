const config = {
    mode: 'active',
    maxLoad: 100,
    secure: true
}

const auditConfig = (cfg) => {
    let entries = [];

    for (let key in cfg) {
        entries.push(`${key}: ${cfg[key]}`)
    }

    return entries;
}


console.log(auditConfig(config));
