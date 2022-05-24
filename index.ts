let nums = [-1,0,3,5,9,12], target = 9

const search = function(nums: number[], target: number): number {
  let index: number = nums.indexOf(target)
  if (nums.length > 0 || index != 0) {
    return index
  } else {
    return -1
  }
};

console.log(search(nums,target))