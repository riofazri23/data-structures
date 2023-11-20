let setOfNumbers = new Set();

setOfNumbers.add(2);
setOfNumbers.add(5);
setOfNumbers.add(7);

console.log(setOfNumbers);
console.log(setOfNumbers.has(3));
setOfNumbers.delete(7);
console.log(setOfNumbers);
// setOfNumbers.clear();

let listOfNumbers = [2,2,3,4,5,5,6,7];
console.log(new Set(listOfNumbers));

let newSet = new Set(listOfNumbers);
for(let item of newSet){
    console.log(item);
}

// maps
// key value pair

// let map = new Map();
// map.set("1","One")

// find the occurence of each letter  in a sentence
let map = new Map();
let sentence = "This is a Sentence";
for(letter of sentence.split("")){
    let caseInsensitiveLetter = letter.toLowerCase();
    if(map.has(caseInsensitiveLetter)){
        //Add the count by1
        let count = map.get(caseInsensitiveLetter);
        map.set(caseInsensitiveLetter, count+1);
    }else{
        map.set(letter,1);
    }
}