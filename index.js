const arr = [1,2,3,1];
const arr1 = [1,2,3,4,5]

function toFindDuplicates(arr) {
    const uniqueElements = new Set(arr);
        if (uniqueElements.size === arr.length){
            console.log('true')
        } else {
            console.log('false')
        }
}

toFindDuplicates(arr);
toFindDuplicates(arr1);

///fisrt task