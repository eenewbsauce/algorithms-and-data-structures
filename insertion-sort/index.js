class InsertionSort {
    static sort(list) {
        this.list = list;
        let compareIndex;
    
        for (let i = 0; i <= this.list.length; i++) {
            let requiresSwitch = false;
            let compareIndex = i + 1;
            let nextIndex = i;

            while (this.list[compareIndex] < this.list[nextIndex] && nextIndex >= 0) {
                nextIndex--;
                requiresSwitch = true;
            }

            if (requiresSwitch) {
                let insertIndex = nextIndex < 0 ? 0 : nextIndex + 1;
                let temp = this.list[insertIndex];
                this._insert(insertIndex, temp, compareIndex, this.list[compareIndex]);
            }
        }

        console.log(this.list);
        return this.list;
    }

    static _insert(insertIndex, insertItem, compareIndex, switchItem) {
        this.list.splice(compareIndex, 1)
        this.list.splice(insertIndex, 0, switchItem);
    }
};

InsertionSort.sort([10, 0, 3, 2, 1, 0, 2, 7, 2, 1]);