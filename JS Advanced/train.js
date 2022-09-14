function solve(arr) {
    let firstArr = arr.shift();
    let train = firstArr.split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let commandInfo of arr) {
        let command = commandInfo.split(' ')
        let waggon = Number(command.pop());
    
        if (command.includes('Add')) {
            train.push(waggon);
        } else {
            for (let freeWaggon of train) {
                if (waggon <= maxCapacity) {
                    
                    
                    
                }
            }
        }

    }
console.log(train);
}

solve(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])