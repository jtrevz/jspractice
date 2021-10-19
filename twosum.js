const nums = [3,2,4]
const nums1 = [3,3]

const target = 6

// var twoSum = function(nums, target) {
//     let a = 0
//     let aPos = 0
//     let b = 0
//     let bPos = 0
    
//     for (let i= 0 ; i< nums.length ; i++) {
//         a = nums.shift();
//         if (bPos > 0) {aPos ++}
//         for (let j= 0 ; j< nums.length ; j++) {
//             console.log('here again')
//             bPos++
//             b = nums[j] 
//             if((a + b) === target) {
//                 console.log(a,b)
//                 console.log(nums)
//                 return ([aPos, bPos])
//             } else {
//                 break
//             }
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     let hash = {}

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] in hash) {
//         console.log(i, hash[nums[i]])
//         return [i, hash[nums[i]]]
//         }

//         hash[target - nums[i]] = i
//     }
// }


// console.log(twoSum(nums1, target))


var twoSum = function (nums, target) {
    let previousValues = {}

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        let needed = current - target
        let index = previousValues[needed]
        if (index != null) {
            return [index, i]
        }
        else {
            previousValues[current] = i
        }
    }
}