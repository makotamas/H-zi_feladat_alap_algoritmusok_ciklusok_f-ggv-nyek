// Task 1
const nums = [3,4,9,6,2];

for (let num of nums) { // iterate the array
    if (num % 2 === 0) {  
        console.log(num + ': osztható')
    } else {
        console.log(num + ': nem osztható')
    }
};

// Task 2
const players = ['Peter', 'Kate', 'John'];

for (let i = 0; i < players.length; i++ ) {
    console.log(`${i+1}. ${players[i]}`);
};

// Task 3 
const x = ['', 4, true];

const a = [];

function problemSolving () {
    for (let b of x) {  // iterate the array
        a.push(typeof(b)); // pushing type of items into the array a
    }
    console.log(a);
};

problemSolving();