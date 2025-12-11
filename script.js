let arrayNum = [1,2,3,4,5,6]
let arrayStr = ['daisohgtfiouwdg','adfuiygijhjklhgjkhgkjhfgufjlhgvljhfdaiuyf','DHJSGFAJHSDGFDOSUAYFGADHSUIJFGDWAEFUIOY']

//return the sum of an array of numbers 
function addArrayNum (array) {
let sum = 0;
for (let i = 0;i<array.length;i++){
    sum+= array[i]
}
return sum
}
//return the average of an array of numbers  
function averageArrayNum (array) {
    let sum = 0;
for (let i = 0;i<array.length;i++){
    sum+=array[i]
}
let average = sum/array.length
return average
}
//return the longest str 
function longestArrayStr (array){
let longest = "";
for (let i = 0; i < array.length; i++) {
  if (array[i].length > longest.length) {
    longest = array[i];
  }
}
return longest
}
//array of strings and given number, return strings longer than number 
function arrayLength (array, num){
    for (let i = 0;i<array.length;i++){
        if (array[i].length > num) {
console.log(array[i])
        }   
    }
}
//print every number between 1 and N 
function logNum (n){
    if (n===0)return;
    logNum(n-1)
    console.log(n)
}
//part 2
let array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
   { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

//sort by age 
console.log(array.sort((a,b) => b.age - a.age));
//filter >50
console.log(array.map(({ name, age, occupation }) => ({
    name,
    age+=1,
    job: occupation
  })))


