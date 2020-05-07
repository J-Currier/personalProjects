const functions = {

    binaryOutside: (arr1, arr2) => {
        let arr1Array = arr1.split('');
        let arr2Array = arr2.split('');
        let revArray1 = arr1Array.reverse();
        let revArray2 = arr2Array.reverse();
        let maxArrLength = Math.max(arr1.length, arr2.length);
        let z = 0;
        let revAnswer=[];
        console.log(revArray1.length, maxArrLength);
        
        while (revArray1.length < maxArrLength) {
            
            revArray1.push(0);
        };
        while (revArray2.length < maxArrLength) {
            revArray2.push(0);
        };

        for (let i = 0; i < maxArrLength; i++) {
            let x = parseInt(revArray1[i]);
            

            let y = parseInt(revArray2[i]);
            let tempArr = functions.binarySubtract(x,y,z);
            revAnswer.push(tempArr[0]);
            z = tempArr[1];

        }
        if (z == 1) {
            revAnswer.push(1);
        }

       
   
        let arrAnswer = revAnswer.reverse();
        let strAnswer = arrAnswer.join('');
        

        return strAnswer;
    },
    
// VVVVVVVVVVV  SUBTRACTOR  VVVVVVVVVV

    binarySubtract: (x,y,z) => {
        let b = 9;
        let myArr = [];

        // compare array 1 and 2 to find largest
        // instructions for if array 2 is largest set largest array as top, smallest as bottom. also set negative at end 

        if (x == 0 && y == 0 && z == 0) {
            b = 0;
            z = 0;
            myArr.push(b);
            myArr.push(z);
            return myArr;
        };
        if (!x && (( y || z) && !(z && y))) {
            b = 1;
            z = 1;
            myArr.push(b);
            myArr.push(z);
            return myArr;
        };

        if (x && (!y && !z)) {
            b = 1;
            z = 0;
            myArr.push(b);
            myArr.push(z);
            return myArr;
        };

        if (x && (( y || z) && !(z && y))) {
            b = 0;
            z = 0;
            myArr.push(b);
            myArr.push(z);
            return myArr;
        };

        if (x && (y && z)) {
            b = 1;
            z = 1;
            myArr.push(b);
            myArr.push(z);
            return myArr;
        };


    },

};

export default functions;
