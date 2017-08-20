let ranOutter = 0;
let ranInner = 0;

const bubbleSort = function(list) {    
    for (let i = 0; i < list.length; i++) {
        ranOutter++;
        let madeSwitch = false;
        
        for (let j = list.length - 1; j > 0; j--) {
            ranInner++;
            let rightMost = list[j];
            let next = list[j-1];

            if (list[j] < list[j-1]) {
                madeSwitch = true;
                let temp = list[j];
                list[j] = list[j-1];
                list[j-1] = temp;
            }
        }

        if (!madeSwitch) {
            break;
        }
    }

    console.log({
        list, ranInner, ranOutter
    });
};

bubbleSort([3, 2, 2, 1, 9, 1, 15, 4, 7, 6, 8]);
//bubbleSort([1,2,3]);