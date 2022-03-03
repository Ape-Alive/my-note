// function mysetTimeout(a,b,fn){
//     this.a=a
//     this.b=b
//     this.time=0
//     this.fn=fn
//     this.handle=-1
//     this.start=()=>{
//         this.handle=this.mySetTimeout=setTimeout(() => {
//             fn();
//             this.time++;
//             // console.log(`$(this.a)+$(this.time)*$(this.b)`);
//             console.log(this.a+'+'+this.time+'*'+this.b);
//             console.log(this.a+this.time*this.b);
//             this.start()
     
//         }, this.a+this.time*this.b);
//     }

//     this.clear=()=>{
//       clearTimeout(this.handle)
//       this.time=0

//     }
   
// }

// let a=new mysetTimeout(100,200,()=>{
//     console.log('计时器');
// }) 

// a.start()

// setTimeout(() => {
//     a.clear()
// }, 50000);

/* 数组扁平化 */

//  let result=ary.toString().split(',').map(item=>Number(item))

 //let result=ary.join().split(',').map(item=>Number(item)) 
// function flatArray(arys){
//  return arys.reduce((initValue,item)=>{
//  return initValue.concat(Array.isArray(item)?item:flatArray(item)) 
//  },[])
// }

// function flatten(arr) {  
//     return arr.reduce((result, item)=> {
//         return result.concat(Array.isArray(item) ? flatten(item) : item);
//     }, []);
// }
// let result=flatten(ary)
// console.log(result)
// const ary=[1,[3,4,5,[6,7]],8,[9],10]

// function flatten(ary){
//     while(ary.some(item=>Array.isArray(item))){
//         ary=[].concat(...ary)
//     }
//     return ary
// }
// let result=flatten(ary)
// console.log(result)
// console.log(/java/i.test('JavaScript'))  

function fn(manySteps) {
  if (manySteps <= 2) {
       return manySteps;
   } else {
           return fn(manySteps - 1) + fn(manySteps - 2);
          }
}
let result = fn(9);
console.log(result);
                         