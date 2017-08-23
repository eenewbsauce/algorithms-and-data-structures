class InsertionSort {
    static sort(list) {
        this.list = list;
        let compareIndex;
    
        for (let i = 0; i <= this.list.length; i++) {
            let requiresInsertion = false;
            let compareIndex = i + 1;
            let nextIndex = i;

            while (this.list[compareIndex] < this.list[nextIndex] && nextIndex >= 0) {
                nextIndex--;
                requiresInsertion = true;
            }

            if (requiresInsertion) {
                let insertIndex = nextIndex < 0 ? 0 : nextIndex + 1;
                this._insert(insertIndex, compareIndex);
            }
        }

        console.log(this.list);
        return this.list;
    }

    static _insert(insertIndex, compareIndex) {
        let insertItem = this.list[insertIndex];
        let compareItem = this.list[compareIndex];
        let newArray = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i === insertIndex) {
                newArray[i] = compareItem;
            } else if (i === insertIndex + 1) {
                newArray[i] = insertItem;
            } else if (i < insertIndex || i > compareIndex) {
                newArray[i] = this.list[i];
            } else if (i <= compareIndex) {
                newArray[i] = this.list[i-1];
            } 
        }

        this.list = newArray;
    }

    static _insertWithSplice(insertIndex, compareIndex) {
        let compareItem = this.list[compareIndex];
        this.list.splice(compareIndex, 1)
        this.list.splice(insertIndex, 0, compareItem);
    }
};

InsertionSort.sort([2, 3, 1, 0, 1, 16, 9, 3, 2, 0, 4, 2, 1, 80, 0]);