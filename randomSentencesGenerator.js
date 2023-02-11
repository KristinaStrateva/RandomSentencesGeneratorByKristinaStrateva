function randomSentencesGenerator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let names = ['Georgi', 'Dayana', 'Hristina', 'Kristina'];
    let places = ['Pleven', 'Dobritch', 'Varna', 'Sofia'];
    let verbs = ['plays with', 'eats', 'smells', 'dreams of'];
    let nouns = ['socks', 'unicornes', 'pizza', 'ball'];
    let adverbs = ['slowly', 'happily', 'gently', 'rapidly'];
    let details = ['at home.', 'on the clouds.', 'at the center.', 'in the forest.'];

    function getRandomWord(arr) {
        let currWord = arr[Math.floor(Math.random() * arr.length)];

        return currWord;
    }

    let randomNames = getRandomWord(names);
    let randomPlaces = getRandomWord(places);
    let randomVerbs = getRandomWord(verbs);
    let randomNouns = getRandomWord(nouns);
    let randomAdverbs = getRandomWord(adverbs);
    let randomDetails = getRandomWord(details);

    let who = `${randomNames} from ${randomPlaces}`;
    let action = `${randomAdverbs} ${randomVerbs} ${randomNouns}`;
    let sentence = `${who} ${action} ${randomDetails}`;

    console.log('Hello! Here is your funny generated sentence:');
    console.log(sentence);

    let recursiveAsyncReadLine = function () {
        readline.question('Click [Enter] to generate a new one.'), string => {
        }
    }
}

randomSentencesGenerator();