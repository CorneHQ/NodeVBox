
    const VBoxNode = require('../lib/main');

    VBoxNode.setVmCpu('addc8f49-2460-45db-a412-f5c288a90795', 2).then(() => {
        console.log('Cpu cores changed!');
    }).catch(error => {
        console.log(error);
    });