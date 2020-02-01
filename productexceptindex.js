arr= [1,4,7,3];

var productExceptSelf = function(nums) {
    const len = nums.length;
  
    const res = [];
  
    let product = 1; // Our product acc
  
    // Pass Right, calculate all values to the right of i
    for (let i = 0; i < len; i++) {
      res.push(product);
      product *= nums[i];
    }
    console.log(res);
    product = 1;
  
    // Pass Left, calculate the product of res[i] and
    // the product of all items to the left of i
    for (let i = len - 1; i >= 0; i--) {
      console.log(res[i],product);
        res[i] *= product;
      product *= nums[i];
      console.log(i, product);
    }
  
    return res;
  };
console.log(productExceptSelf(arr));