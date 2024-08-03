// Jawaban no 1
function printFishBash(count) {
  for (let i = 1; i <= count; i++) {
    let output = "";
    if (i % 3 === 0) output += "fish";
    if (i % 5 === 0) output += (output ? " " : "") + "bash";
    console.log(output || i);
  }
}

printFishBash(30);

// Jawaban no 2
function sortAscending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arrayAsc = [5, 3, 8, 4, 2];
console.log(sortAscending(arrayAsc));

function sortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arrayDesc = [5, 3, 8, 4, 2];
console.log(sortDescending(arrayDesc));

// Jawaban no 3
function isPalindrome(str) {
  str = str.replace(/\s+/g, "").toLowerCase();

  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr;
}

console.log(isPalindrome("katak"));
console.log(isPalindrome("halo"));
console.log(isPalindrome("Kasur ini rusak"));
