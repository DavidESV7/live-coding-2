// API
const API_ENDPOINT = 'https://yesno.wtf/api';
let button = document.getElementById("button");
let answer = document.getElementById("answer");
const input = document.getElementById("input");
const error_message = document.getElementById("error");



/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function fetchAnswer(){
    if (input.value === ""){
        error_message.innerHTML = "Por favor ingresa una pregunta";
        return;
    }
error_message.innerHTML = "";

fetch(API_ENDPOINT)
.then(res => res.json())
.then(data => {
    answer.innerHTML = data.answer; 
    document.getElementById("ball").style.display = "block";
    setTimeout(() => {
        input.value = "";
        answer.innerHTML = "";
        document.getElementById("ball").style.display = "none";
    }, 5000)
})
.catch(err => console.log(err));
}

button.addEventListener("click", fetchAnswer);

input.addEventListener("input", () => {
    if(input.value === ""){
        button.disabled = true;
    } else{
        button.disabled = false;
    }
});