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

  pronoun.forEach(p => {
    adjective.forEach(a => {
      noun.forEach(n => {
        extensions.forEach(e => {
          console.log(p + a + n + e);
        });
      });
    });
  });
};


