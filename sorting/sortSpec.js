describe("bubbleSort", function() {

  it("handle an empty array", function() {
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it("sort the numbers in an array", function() {
    expect( bubbleSort([34,2,1,6,99]) ).toEqual( [1,2,6,34,99] );
  });

});

describe("merge", function() {
  it("merges two sorted lists", function() {
    expect(merge([2, 5, 9], [1, 4, 8, 10])).toEqual([1, 2, 4, 5, 8, 9, 10]);
  });
  it("merges two single item lists", function() {
    expect(merge([2], [1])).toEqual([1, 2]);
  });

});

describe("mergeSort", function() {
  it("merge sorts a list of integers", function() {
    expect(mergeSort([2, 8, 4, 1, 9, 5, 10])).toEqual([1, 2, 4, 5, 8, 9, 10]);
  });
});
