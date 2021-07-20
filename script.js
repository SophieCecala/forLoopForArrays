//task 1
let arr1 = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr1.length; i++){
    console.log('arr1', arr1[i]);
}

//task 2
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++) {
    console.log('arr2', arr2[i]);
}

//task 3
let arr3 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr3.length; i++){
    if(arr3[i] % 2 === 1){
        console.log('arr3', arr3[i]);
    }
}

//task 4
let result = 0;
let arr4 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr4.length; i++){
    result += arr4[i];
}

console.log('arr4', result);

//task 5
let result1 = 0;
let arr5 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr5.length; i++){
    result1 += arr5[i] ^ 2;
}

console.log('arr5', result1);

//task 6
let arr6 = [2, 5, 9, 15, 1, 4];

for (let i = 0; i < arr6.length; i++){
    if (arr6[i] < 10 && arr6[i] > 3){
       console.log('arr6', arr6[i]);
    }
}

//task7
let result2 = 0;
let arr7 = [-24, 18, -5, 12, 2];

for (let i = 0; i < arr7.length; i++){
    if (arr7[i] > 0){
        result2 += arr7[i];
    }
}
console.log('arr7', result2);

//task8
const arr8 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr8.length; i++){
    sum += arr8[i];
}
let result8 = sum / arr8.length;
console.log('arr8', result8);

//task9
const arr9 = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr9.length; i++) {
    let string = arr9[i].toString();
    if(string[0] === '1' || string[0] === '2' || string[0] === '5'){
        console.log('arr9', arr9[i]);
    }
}

//task10
const arr10 = [10, 20, 30, 50, 235, 3000];
// let reverse = arr10.reverse();
//
// console.log('arr10', reverse);

for(let i = arr10.length - 1; i >= 0; i--){
    console.log('arr10', arr10[i]);
}


//task 11
const arr11 = [1, 3, 2, 6, 7, 5];

for (let i = 0; i < arr11.length; i++){
    if(arr11[i] === i){
        console.log('arr11', arr11[i]);
    }
}

//task12
const arr12 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr12.length; i ++){
    document.write(arr12[i] + "<br>")
}

//task13
const arr13 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr13.length; i ++){
    document.write(`<p> ${arr13[i]} </p>`)
}
