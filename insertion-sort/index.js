const insertionSort = function(list) {
    let switchIndex;
    
    for (let i = 0; i < list.length; i++) {
        let requiresSwitch = false;
        let switchIndex = i + 1;
        let nextIndex = i;

        while (list[switchIndex] < list[nextIndex] && nextIndex > 0) {
            nextIndex--;
            requiresSwitch = true;
        }

        if (requiresSwitch) {
            let targetIndex = nextIndex < 0 ? 0 : nextIndex;
            let temp = list[targetIndex];
            list[targetIndex] = list[switchIndex];
            list[switchIndex] = temp;
        }
    }

    console.log(list);
};

insertionSort([4, 2, 5, 2, 1, 9, 7, 10]);