function largestSubarraySum(array){
    let best_sum = 0
    let current_sum = 0
    for (const [index, number] of array.entries()) {
        if (current_sum <= 0) {
            current_sum = number
        } else {
            current_sum += number
        }

        if (current_sum > best_sum) {
            best_sum = current_sum
        }
    }
    return best_sum
}