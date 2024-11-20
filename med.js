let MyArray = [3,4,6,3,5,6,3,6,7,8,9,4,3,4,3,3,4];  

// Sort the array in ascending order  
let acc = MyArray.sort((a, b) => a - b); // Fixed sorting to correctly order numbers  
// console.log("Sorted Array:", acc); // For debugging  

let lenn = acc.length; // Get the length of the sorted array  
let index; // Declare index variable  
// calculating if even or odd
if (lenn % 2 === 0) {  
    // If the length is even  
    let mid1 = acc[lenn / 2 - 1]; // First middle element  
    let mid2 = acc[lenn / 2]; // Second middle element  
    let answer = (mid1 + mid2) / 2; // Calculate the median  
    console.log("Median:", answer); // Output the median for even-length  
} else {  
    // If the length is odd  
    index = Math.floor(lenn / 2); // Median index  
    let answer = acc[index]; // Median value  
    console.log("Median:", answer); // Output the median for odd-length  
}