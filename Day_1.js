// Rotate by K

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
    return arr.slice(-k).concat(arr.slice(0, n - k));
}
// Example usage:
const arr = [1, 2, 3, 8, 9, 4,8, 5];
const k = 4;
const rotatedArr = rotateArray(arr, k);
console.log(rotatedArr); // Output: [4, 5, 1, 2, 3]

function rotateArrayOtimized(arr, k) {
    const n = arr.length;
    k = k % n; 

    function reverse(arr, start, end){
        while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }}
    reverse(arr,0, n-1)
    reverse(arr,0, k -1)
    reverse(arr, k, n-1)
    return arr
}


const rotatedArrr = rotateArrayOtimized(arr, k);
console.log(rotatedArrr); //

//2 remove duplicate from sorted array

function removeDuplicates(arr){
    let i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1
}

const nums = [1, 1, 2, 2, 3, 4, 4];
const length = removeDuplicates(nums);

console.log("Unique length:", length);
console.log("Modified array:", nums.slice(0, length));