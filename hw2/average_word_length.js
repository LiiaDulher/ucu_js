function myMap(arr, func){
    var result = []
    let i;
    for (i=0; i<arr.length; i++){
      result.push(func(arr[i]));
    }
    return result;
}

function myReduce(arr, func){
  var result;
  result = func(arr[0]);
  let i;
  for (i=1; i<arr.length; i++){
    result += func(arr[i]);
  }
  return result;
}

function avgWordLengthCalc(str){
    const punct_regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    var words = str.split(' ');
    words = myMap(words, s => s.replace(punct_regex, ''));
    words_len = myReduce(words, s => s.length);
    return words_len/words.length;
}
