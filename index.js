let TIME_INTERVAL = 100;

let toSort = [];

//creating divs to be arranged
function showArray(toSort) {
  let context = document.getElementById("main_context");
  let sizeOfElements = document.getElementById("control_value");
  TIME_INTERVAL = document.getElementById("control_interval").value*1000;

  while (context.firstChild) {
    context.removeChild(context.firstChild);
  }

  for (let i = 0; i < sizeOfElements.value; i++) {
    toSort.push(Math.floor(Math.random() * 100));
  }
  toSort.map((elem, key) => {
    let div = document.createElement("div");
    div.id = `${key}`;
    div.style.width = "50px";
    div.style.height = `${elem * 7}px`;
    div.style.backgroundColor = "red";
    context.appendChild(div);
  });
}

function swap(myArray, min, max) {
  let minDiv = document.getElementById(`${min}`);
  minDiv.style.backgroundColor = "blue";
  let maxDiv = document.getElementById(`${max}`);
  maxDiv.style.backgroundColor = "green";
  let temp = myArray[min];
  minDiv.style.height = `${myArray[max] * 7}px`;
  myArray[min] = myArray[max];
  maxDiv.style.height = `${temp * 7}px`;
  myArray[max] = temp;
}
let myInterval;

function compare(toSort) {
  let max = 0;

  for (let i = 0; i < toSort.length - 1; i++) {
    if (toSort[i] > toSort[i + 1]) {
      max = toSort[i];
      swap(toSort, i, i + 1);
    }
    // console.log(toSort);
  }
}

let button = document.getElementById("main_start");
button.onclick = handleStart;

function handleStart() {
  toSort = [];
  showArray(toSort);
  compare(toSort);

  for (let i = 0; i < toSort.length; i++) {
    setTimeout(() => {
      compare(toSort);
      // console.log("Heppened");
    }, TIME_INTERVAL * i);

    //patchy solution to get rid of blue lines that were not changed to green
    setTimeout(() => {
      toSort.map((elem, key) => {
        let div = document.getElementById(key);
        div.style.backgroundColor = "green";
      });
    }, TIME_INTERVAL * toSort.length);
  }
}

// console.log(toSort);
