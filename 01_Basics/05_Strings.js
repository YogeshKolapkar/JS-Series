const name ="Yogesh-Kolapkar" //string Declaration 

/*another way to declare the string
const gameName = new String("Yogesh ")*/


const repoCount =100

// console.log(name +" "+ repoCount + "This is App.Count");// This is not a good Practice in programming

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// String interpolation => ${} and this is always written in backtick(``).


// ****************************String Methods*******************
console.log(name.length); //Length()
console.log(name.toUpperCase()); //toUpperCase()
console.log(name.toLowerCase());// toLowerCase()
console.log(name.charAt(0)); // charAt() is used to find the what is on the particular index. 

console.log(name.indexOf('s')); //indexOf() is find the index number of the letter.

const newName =name.substring(0,5) //substring() is used to divide the string into sub String with starting index(include) and end index(Exclusive), i.e in this 0=>starting Index(inclusive) and 5=> end Index(exclusive)
console.log(newName);

console.log(name.slice(0,9)); // In slice() we can use negative value to reverse the string
console.log(name.slice(-8,9));



const newNameOne = "   Yogesh   "
console.log(newNameOne);
console.log(newNameOne.trim()); // trim() method is used to remove the spaces from start and end of the String.


const url= "https://yogesh.com/yogesh-20kolapkar"
console.log(url.replace('%20', "-"));

console.log(url.includes("yogesh")); //includes() is Used to find the keyword from the string.


console.log(url.split[2]);












