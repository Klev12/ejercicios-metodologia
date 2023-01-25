let nums = [8, 6, 2, 9, 5];
let x = 10;
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === x) {
            console.log("indice " + i + "  indice " + j);
        }
    }
}