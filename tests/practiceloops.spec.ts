import{test, expect} from "@playwright/test"

test('loops', async({page})=>{

//********* even/odd ***************
const i = 11

if (i%2==0){

    console.log('even number')
}
else {

    console.log('odd number')
}

// //********** * vote expample *************
// let a=25

// if(a>=18){

//     console.log('eligible for vote')
// }
// else{

//     console.log('not eligible for vote')
// }

// ************ print even/odd numbers *****************
// print 0 to 20 numbers

// let c =20
// for(let d=0; d<=c; d++)
// {
// console.log(d)
// }

// print odd numbers

// let b=1
// for(let j=20;j>=b;j--){

//     if(j%2!==0){

//      console.log(j)

//     }

// }

// // print even numbers

// for (let p=0; p<=20; p++){

//     if(p%2==0){

//         console.log(p)
//     }
// }

// // ************** print * (star) from des to asc
// const symbol = '*'
// for(let s=5; s>=0; s++)
// {
//     //symbol = symbol+'*'

//     console.log(symbol.repeat(s))
// }

//  let k=10
// for(let m=0; m<=k; m++)
// {
//     if(m%2==1)
// console.log(m)

// }
let m=20
for(let v=0;v<20;v++)
{
if(v%2==0)
{
console.log(v)
}
}

})