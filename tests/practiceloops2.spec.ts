import { test, expect } from "@playwright/test"

test('loops', async ({ page }) => {

    // //  print 1 to 10 numbers
    // let a = 1
    // while(a<=10)
    // {
    // console.log(a)
    // a++;
    // }

    // // print 10 to 1 numbers

    // let b = 10
    // while(b>=0)
    // {
    // console.log(b)
    // b--;
    // }


    // // print via array[]

    // let days:string[] = ['sunday','monday','tuesday']
    // let c=0

    // while(c<days.length)
    // {

    // console.log(days[c])
    // c++
    // }


    // // using break statement
    // let d =0
    // while(d<=10)
    // {
    //     if(d==5)
    //     {

    //         break;
    //     }

    // console.log(d)
    // d++;
    // }


    // to print even numbers

    let i = 1;

    while (i < 20)
    {
        i++;

        // Skip even numbers
        if (i % 2 == 0) {
            continue;
        }

        // Stop when we reach 15
        if (i === 15)
        {
            break;
        }

        console.log(i);

        // wait 
    }











})