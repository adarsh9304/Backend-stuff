function promisePractice(value:number):Promise<string>{
   return new Promise((resolve,reject)=>{
     if(value==5){
        resolve('success')
     }
     else reject('not success')
   })
}
promisePractice(5).then((data)=>console.log(data))