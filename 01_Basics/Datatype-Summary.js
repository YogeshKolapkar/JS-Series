/* Primitive Datatypes(7):
    String ,
    Number,
    Boolean,
    null,
    undefined,
    symbol,
    BigInt.
    
Reference type or Non-Primitive Datatype :
    Array,
    Objets, 
    functions,
    
***********************************************************************************************************************************
JavaScript is Dynamically type Langugae

*/
const score =100
const  scoreValue =100.2

const isLoggedIn =true;

const outsideTemp =null
let userEmail;

const id=Symbol('12234') //defining of Symbol Datatype
const anotherId =Symbol('12234')

// console.log(id ===anotherId);

const bigNumber = 1545446464646n 

const heros =  [1,5,"Yogesh"] // defining the array or Declaration of Array
// console.log(heros); 
const obj={
    name :"Yogesh",
    age :22


}



const myFunc= function(){
    console.log("Hello");
    
}
// myFunc()
// *********************************************************************************************

/* Stack Memory(Primitive) and Heap Memory(Non-Primitive) */
