

let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
    count += 1;
    countEl.innerHTML = count;
}



function decrement() {
    count -= 1;
    countEl.innerHTML = count;

}


function save() {
    let countStr = count + " , "
    saveEl.textContent += countStr;
    countEl.innerHTML = 0;
    count = 0;


}

