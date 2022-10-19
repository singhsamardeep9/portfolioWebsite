const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent);

const phrases = ["Student...","Learner...","Developer..."];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 75;
function printletters(phrases){
    if(letterIndex == phrases.length){
        clearLetters()
    }
    else if(letterIndex < phrases.length){
        dynamicContent.textContent+=phrases.charAt(letterIndex);
        letterIndex+=1;
        setTimeout(function(){
            printletters(phrases);
        },typingSpeed)
    }
}

function clearLetters(){
    if(letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex = 0;
        printletters(phrases[phraseIndex])
    }
    else if(letterIndex > -1){
        let updatedPhrase="";
        for(let index = 0; index < letterIndex; index++){
            updatedPhrase+=phrases[phraseIndex].charAt(index);
        }
        dynamicContent.textContent=updatedPhrase;
        letterIndex-=1;
        setTimeout(clearLetters,erasingSpeed);
    }
}

printletters(phrases[phraseIndex]);