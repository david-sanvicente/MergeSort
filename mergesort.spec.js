describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    let unsortedArray = [10, 3, 1, 7, 54];
    expect(split(unsortedArray)).toEqual([[10, 3, 1], [7, 54]]);
  });
});
describe("Merge function", function() {
  it("is able to merge two single value arrays into one sorted array", function() {
    let arr1 = [0];
    let arr2 = [50];
    expect(merge(arr1, arr2)).toEqual([0, 50]);
  });
  it("is able to handle a single array", function() {
      let arr1 = [1];
      expect(merge(arr1)).toEqual([1]);
  });
  it("is able to merge two sorted arrays into one sorted array", function() {
    let arr1 = [3, 27, 38, 43];
    let arr2 = [9, 10, 82];
    expect(merge(arr1, arr2)).toEqual([3, 9, 10, 27, 38, 43, 82]);
  });
});
