let nums = [-1, 0, 3, 5, 9, 12], target = 9;
const search = function(nums2, target2) {
  let index = nums2.indexOf(target2);
  if (nums2.length > 0 || index != 0) {
    return index;
  } else {
    return -1;
  }
};
console.log(search(nums, target));
//# sourceMappingURL=index.js.map
