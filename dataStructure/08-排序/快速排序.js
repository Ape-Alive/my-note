function quickSort(ary){
  if(ary.length===0||ary.length===1){
    return ary
  }
  let midIndex=Math.floor(ary.length/2)
  let currentItem=ary.splice(midIndex,1)
  let leftList=[],rightList=[]
  ary.forEach(item=>{
    if(item<currentItem){
     leftList.push(item)
    }else{
     rightList.push(item)
    }
  })
  return quickSort(leftList).concat(currentItem).concat(quickSort(rightList))
}

let ary=[7,8,9,2,4]
console.log(quickSort(ary));