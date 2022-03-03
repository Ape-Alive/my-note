//暴力解法
// function towSum(nums,target){
//   const resultArr=[]
//   for(let i=0;i<nums.length-1;i++){
//     for(let j=i+1;j<nums.length;j++){
//       if(nums[i]+nums[j]===target){
//         resultArr.push([i,j])
//       }
//     }
//   }
//   return resultArr
// }

//利用map方法
function towSum(nums,target){
  let map=new Map()
  let len=nums.length
  const resultArr=[]
  for(let i=0;i<len;i++){
    map.set(nums[i],i)
    x=target-nums[i]
    if(map.has(x)){
      resultArr.push([map.get(x),i])
    }
    
  }
  return resultArr
}



let nums=[1,8,3,6,7,6,2]
console.log(towSum(nums,9));//[ [ 0, 1 ], [ 2, 3 ], [ 2, 5 ], [ 4, 6 ] ]
