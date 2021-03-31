function maxTotal(arr){
    arr = arr.sort((a, b) => (b-a));
    let i;
    var sum=0;
    for (i=0; i<5; i++){
        sum += arr[i];
    }
    return sum;
}
