// 1- Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function createArray() {        
        var newArray = [];        
        for (var i = 1; i <= 255; i++) {                
            newArray.push(i);        
        }        
        return newArray;        // added the return statement
    }
var y = createArray();        // now y is the variable that is calling on createArray

console.log(y)

//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function createArray() {        
    var sum = 0;   
    var i = 1     
    for (i = 0; i <= 1000; i+=2) {               
        sum+=i;        
    }        
    return sum;        
    }
var y = createArray();        

console.log(y)

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function createArray() {        
    var sum = 0;   
    var i = 1     
    for (i = 1; i <= 5000; i+=2) {               
        sum+=i;        
    }        
    return sum;        
    }
var y = createArray();        

console.log(y)

//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14)

function createArray() {        
    var arr =  [1,2,5] ;   
    var sum = 0 ;    
    for (var i = 0; i < arr.length; i++) {               
        sum+=arr[i]; 
        //sum++       
    }        
    return sum;        
    }
var y = createArray();        

console.log(y)

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function createArray(arr) {        
    //var arr =  [1,2,5] ;    
    for (var i = 0; i < arr.length; i++) { 
        //x=arr[i]
        if(arr[i] < arr[i+1]){
            //console.log(arr[i+1]);
            if(arr[i+1]<arr[i+2]){
                console.log(arr[i+2]);
            }
        }            
        //sum+=arr[i]; 
        //sum++       
    }        
    //return sum;        
    }
createArray([1,2,5]);    
// var y = createArray();        

// console.log(y)