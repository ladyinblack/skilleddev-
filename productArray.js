// Input 
const input = [1, 2, 3, 4, 5];

// Output: buildProductArray(input)
// [2*3*4*5, 1*3*4*5, 1*2*4*5, 1*2*3*5, 1*2*3*4]
// [120, 60, 40, 30, 24]

const buildProductArray = (input) => {
    const results = new Array(input.length).fill(1);
    let leftRunningProduct = 1;
    
    // First use our results array as the running right product array.
    // We fill from the right side.
    for (let i = 1; i < input.length; i++) {
        const endIdx = input.length - 1 - i;
        results[endIdx] = results[endIdx + 1] * input[endIdx + 1];
    }
    
    // Refill the results with the product at each point
    for (let i = 0; i < input.length; i++) {
        const productExceptSelf = leftRunningProduct * results[i];
        
        // We use results[i] above so now it can be replaced
        results[i] = productExceptSelf;
        
        // Now that we have used our left product,
        // we update it to include the current element.
        leftRunningProduct = leftRunningProduct * input[i];
    }
    
    return results;
}

console.log(buildProductArray(input));
