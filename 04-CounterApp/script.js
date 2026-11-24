// const decreaseBtn = document.getElementById("decrease");
// const increaseBtn = document.getElementById("increase");
// const resetBtn = document.getElementById("reset");
// const countDisplay = document.getElementById("count");

// let count = 0;

// function increase(){
//     count++;
//     countDisplay.textContent = count;
//     countDisplay.style.color = "green"
// }

// function decrease(){
//     count--;
//     countDisplay.textContent = count;
//     countDisplay.style.color = "red"
// }

// function reset(){
//     count = 0;
//     countDisplay.textContent = count;
//     countDisplay.style.color = "grey";
// }

// increaseBtn.addEventListener("click",increase);
// decreaseBtn.addEventListener("click",decrease);
// resetBtn.addEventListener("click",reset);


const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const countDisplay = document.querySelector("#count");


let count = 0;

const updateColor = () =>{
    if(count > 0){
        countDisplay.style.color = "green";
    }
    else if(count < 0 ){
 countDisplay.style.color = "red";
        
    }
    else{
        countDisplay.style.color = "grey";
    }
}

const increase = () =>{
    count++;
    countDisplay.textContent = count;
    updateColor();
    // console.log(count);
    
}

const decrease = () =>{
    count--;
    countDisplay.textContent = count;
    updateColor();

    // console.log(count);
    
}

const reset = () => {
count = 0;
countDisplay.textContent = count;
    updateColor();

}

increaseBtn.addEventListener("click",increase);
decreaseBtn.addEventListener("click",decrease);
resetBtn.addEventListener("click",reset);