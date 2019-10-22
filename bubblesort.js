function bubbleSort(array) {
  let length = array.length - 1;
  let bubble = true;

  while (bubble) {
    bubble = false;
    for (let i = 0; i < length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        bubble = true;
      }
    }
    length -= 1;
  }
  return array;
}
