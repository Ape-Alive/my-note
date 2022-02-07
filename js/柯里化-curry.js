//方法一
// function curry(x){
// let sum=x;
// let tem=function(y){
// sum+=y
// return tem
// }
// tem.toString=function(){
//   return sum 
// }
// return tem 
// }


// console.log(curry(1)(2).toString());//3

//方法二

function add(){
  let arg=Array.prototype.slice.call(arguments)
  let tem =function(){
    arg.push(...arguments)
    return tem
  }
  tem.toString=function(){
    return arg.reduce((pre,cur)=>{
      return pre+cur
    })
  }
  return tem 
}


console.log(add(1)(5).toString()); 