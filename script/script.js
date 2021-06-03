'use strict';

// let num = 266219;
// let numStr = num.toString();
// let mult = 1;
//  for(let i = 0; i < numStr.length; i++){

//     mult = mult * numStr[i];
//  }
// let degree = mult **3;
// console.log(mult);
// console.log(degree);
// console.log(degree.toString().substring(0,2));


// let arr = ['12' , '24' , '29' , '455' , '1024', '660', '4267'];

// arr.forEach(i =>{
//    if(i.startsWith('2') || i.startsWith('4')){
//       console.log(i);
//    }
// });




// for(let i = 1; i <= 100; i++){
//    for(let x = 1; x < i; x++){
//       if(i % x == 0) continue;
//       console.log('простое :' + i + ' ' + ' Делители этого числа: 1 и ' + i);
//    }

   
// };






let isStr = function(str){
   if(typeof str !== 'string'){
      alert('Это не строка!');
      return;
   }

   str = str.trim();
   return str.length > 50 ? str.slice(0,50) + '...' : str;
}
alert(isStr('    привет приветприветприветприветприветприветприветприветприветприветприветприветприветприветприветприветприветприветприветпривет '));