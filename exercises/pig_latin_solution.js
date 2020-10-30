//Things we will use:
//split
//splice
//string interpolation
//single line arrow functions


function pigLatin(sentence) {
    let piggy = [];
    
    let words = sentence.split(" ");

    words.forEach(word => {

        if(isVowel(word[0])) {
            piggy.push(`${word}way`)
        } else {
            piggy.push(getConsonantPigLatin(word))
        }
    });

    console.log(piggy);
}

isVowel = (letter) => ["a", "e", "i", "o", "u"].indexOf(letter) >= 0

getConsonantPigLatin = (word) => `${word.slice(1)}${word[0]}ay`

pigLatin("this is a test translation");