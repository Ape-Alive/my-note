function bubble(ary){
  for(let i=0;i<ary.length-1;i++){
    for(let j=0;j<ary.length-1-i;j++){
      if(ary[j]>ary[j+1]){
        var temp=ary[j]
        ary[j]=ary[j+1]
        ary[j+1]=temp
      }
    }
  }
  return ary
}


let ary=[7,3,51,6,1]
console.log(bubble(ary));