export default function (array, typeSort) {
  if (typeSort === 'desc') {
    array.sort((a, b) => {
      if (a.price.value > b.price.value) return -1;
      return 1;
    });
    return array;
  }
  array.sort((a, b) => {
    if (a.price.value > b.price.value) return 1;
    return -1;
  });
  return array;
}
