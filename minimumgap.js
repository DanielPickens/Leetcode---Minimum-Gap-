var maximumGap = function(nums) {
    if(nums.length < 2) return 0;
    nums = nums.sort((a,b)=>a-b);
    var max = 0;
    for(let i = 0 ; i < nums.length-1; i++){
        if(nums[i+1] - nums[i] > max)
            max = nums[i+1] - nums[i];
    }
    return max;
};
