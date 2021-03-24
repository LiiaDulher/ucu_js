function truncIn(arr1, arr2){
    const [arr1_start, ...arr1_end] = arr1;
    return [arr1_start, ...arr2, ...arr1_end];
}

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

function canNest(arr1, arr2){
    const [min1, max1] = minMax(arr1);
    const [min2, max2] = minMax(arr2);
    return (min1 > min2) && (max1 < max2);
}