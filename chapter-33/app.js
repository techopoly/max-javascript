let a1 = [1, 7, 1, 2, 5, 6, -9, 2, 0, 1, 3, 0, 1, 17,-22];

function getMin(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    console.log(min)
} 
getMin(a1);
