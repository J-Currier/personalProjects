import adderFunctions from './functions.js'


const multiplierFunctions = {

    binaryOutside: (arr1, arr2) => {
        // let arr1Array = arr1.split('');
        let arr1Array = arr1;
        let arr2Array = arr2.split('');
        let z = '0';
        let ansArray = [0];

        for (let i = 0; i < arr2Array.length; i++)   {
            if (arr2Array[arr2Array.length-(i+1)] == 1) {
                console.log('in for loop')
                let total = arr1Array;
                console.log(total, typeof total, 'tot type')
                console.log (i, 'i')
                for ( let j = 0; j < i; j++) {
                    console.log('nested for loop')
                    total.push(0);
                }
                console.log(total, typeof total, 'tot type')
                ansArray.push(total);
            }

        }
        console.log(ansArray, typeof ansArray, 'ansarray')
        ansArray.forEach( element => {
            // String(myVar);
            console.log(element, typeof element, 'myele')
            let myVar = element.toString();
            console.log(myVar, typeof myVar, 'myele2')

            z = adderFunctions.binaryOutside(z, myVar);
            //call adder send z and element. get number back and store as z)
        })
        // return z;
        console.log("hello");
        return z;
    },
 // for loop (for ech digit in num 2)
        
    // if digit is 1 
        //write down num 1 and add zeroes equal to num 2 digit place value
        //store as new number (append to array? )
    //if digit is 0
        //do noghting       

//send each number in array to adder
//return total

};
export default multiplierFunctions;