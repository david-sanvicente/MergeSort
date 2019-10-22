function split(wholeArray){
    let splitValue = Math.ceil(wholeArray.length/2)
    let secondHalf = wholeArray.splice(splitValue)
    let firstHalf = wholeArray;
    return [firstHalf, secondHalf]
}

function merge(arr1, arr2){
    let sortedArr = []

    if(!arr2){
        return arr1
    }

    while(arr1.length && arr2.length){
        if(arr1[0] < arr2[0]){
            sortedArr.push(arr1.shift())
        }else {
            sortedArr.push(arr2.shift())
        }
    }

    if(arr1.length){
        sortedArr = sortedArr.concat(arr1)
    }if (arr2.length){
        sortedArr = sortedArr.concat(arr2)
    }

    return sortedArr;
}