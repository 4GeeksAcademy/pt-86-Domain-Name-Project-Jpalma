import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener('click',generateScript)
};
const generateScript = () =>{
    let pronoun = ['the', 'our','what','that','which'];
    let adjective = ['great', 'big','happy','small','fast'];
    let noun = ['jogger', 'racoon','teacher','lake','dog'];
    let extensions=['.com','.net','.us','.io','.org'];

    let pronounDiv =document.getElementById('pronoun');
    let adjectiveDiv =document.getElementById('adjective');
    let nounDiv =document.getElementById('noun');
    let extensionsDiv =document.getElementById('extensions');

    for(let i=0; i < generateScript.length; i++){

        pronounDiv.innerHTML = pronoun[i];
        adjectiveDiv.innerHTML = adjective[i];
        nounDiv.innerHTML = noun[i];
        extensionsDiv.innerHTML = extensions[i];


      console.log(pronoun[i] + adjective[i] + noun[i] + extensions[i])
    }
}
