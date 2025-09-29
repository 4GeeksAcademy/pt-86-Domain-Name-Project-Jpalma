import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  combineArrays()
};
const combineArrays =()=> {
  let pronoun = ['the', 'our','what','that','which'];
  let adjective = ['great', 'big','happy','small','fast'];
  let noun = ['jogger', 'racoon','teacher','lake','dog'];
  let extensions=['.com','.net','.us','.io','.org'];

  for(let i =0; i <pronoun.length; i++){
    for(let a =0; a <adjective.length; a++){
      for(let b =0; b <noun.length; b++){
        for(let c =0; c <extensions.length; c++){
            console.log(pronoun[i] + adjective[a] + noun[b] + extensions[c])
        }
      }
     }
    }
};

