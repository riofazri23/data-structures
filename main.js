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
        map.set(caseInsensitiveLetter,1);
    }
}

console.log(map);
// 

console.log(Array.from(map, ([key, value])=>({key, value})));
console.log(Array.from(newSet, item=>item));

const arr = [1,2,3,4,5];

console.log("some ", arr.some(item=> item %2 == 0));
console.log("some ", arr.every(item=> item %2 == 0));

// map which converts one type of array to another type it
// return it as new array
let kvArray = Array.from(map, ([key, value])=>({key, value}));
console.log(kvArray);
console.log(kvArray.map(currentItem => currentItem.value));

console.log(kvArray);


// Array.filter modify it's default behaviout using the prototype

let originalFilterFn = Array.prototype.filter;



Array.prototype.filter = function(cb){
    // this refrence to the array on which filter is being applied
    return originalFilterFn.call(this,(item)=>{
        console.log(item)
        return cb(item);
    });
}

console.log([1,3,6,8].filter(item=>item % 2 == 0));