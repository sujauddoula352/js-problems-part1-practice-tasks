/**### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 
sample-input: 
numbers = [5,6,11,12,98, 5]
find: 5
output: 2
<br/>
sample-input: 
numbers = [5,6,11,12,98, 5]
find: 25
output: 0


 */
function repeatArray(numbers){
    const find=5;
    console.log(numbers.includes(find))
    const unique=[]
    const duplicate=[]
    for(const num of numbers){
       if (unique.includes(num) ===false){
        unique.push(num);
       }
       else{
        duplicate.push(num);
       }
    }
     const length=duplicate.length
  return length;
}
const numbers=[5,6,11,12,98,5,11];
const array=repeatArray(numbers);
console.log(array)