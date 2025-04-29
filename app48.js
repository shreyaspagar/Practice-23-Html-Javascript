let array = [2 , 5 , 56 , 12 , 100 , 85 , 96];
let largest = 0;

for (let i = 0; i<=array.length; i++) {
    if (largest < array[i]) {
         largest = array[i];
    }
}

console.log(largest);