'use strict';

export default function orderByProps(obg, arr) {
    let newObg = new Object;
    let oldObj = new Object;
    arr.forEach(param => Object.keys(obg).forEach(pramParam =>{
        if (param === pramParam) {
            newObg[obg] = obg.param;
        }
    }));

    for (let key in obg) {
        for (let keyTwo in newObg) {
            if (keyTwo !=) {
                oldObj(key) = Object[param];
            }
        }
    }

    Object.keys(oldObj).sort().forEach((key) => { newObg[key] = obj[key]; });
    return newObg;
}
