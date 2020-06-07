function fibCheck(n) {
    let myArray=[0];
    if (n == 1) {
       return myArray;
    } else if (n == 2) {
        myArray.push(1);
        return myArray;
    } else { 
        myArray.push(1);
         for (let i=2; i < n ; i++) {
            myArray.push(myArray[myArray.length-1] + myArray[myArray.length-2]);
         }
    return(myArray);
}
}