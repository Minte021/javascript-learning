//0, 1, 1, 2, 3, 5, 8, 13
let n = 13;
let f_arr = [];
let i = 1;
f_arr.push(0);
while (i <= 13) {
    f_arr.push(i);
    i = f_arr[i] + f_arr[i-1];
    f_arr.push(i);
}

console.log(f_arr);