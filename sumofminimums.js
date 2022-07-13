// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
function sumOfMinimums(arr) {
    let arr1 = []
    for(i=0; i<=arr.length-1; i++){
        // console.log(arr[i])
        // console.log(Math.min(...arr[i]))
        arr1.push(Math.min(...arr[i]))
    }
    // console.log(arr1)
    let sum = 0
    let finalarr = []
    for(i=0; i<=arr1.length-1; i++){
        // console.log(arr1[i])
        finalarr.push(arr1[i])
        sum += arr1[i]
    }
    // console.log(finalarr)
    // console.log(sum)
    console.log(`The sum of the minimum values in each row: [${finalarr.join(' + ')}] = ${sum}`)
}
sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])
console.log('========')
sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])