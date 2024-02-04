/**----
### Task-3: 
Write a function to count the number of vowels in a string.
*/
function countVowels(str){
    const vowels='aeiouAEIOU'
    let count=0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
 return count;
}
const str= 'my name is sujauddoula sohel'
const count=countVowels(str);
console.log(count);