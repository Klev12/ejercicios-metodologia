let nums = [3,6,1,5,9,7,1,2];
let contador = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        contador++;
    }
}
console.log(contador);