

import Cat from './modules/Cat.js';


var cat = new Cat({name: 'Matroskin'});


console.log(cat.name);
console.log(cat.meow(1, 2, 3));
console.log(...cat.meow(1, 2, 3));


cat.climbTo = (to) => `I'm climbing to ${to}!`;


console.log(cat.climbTo('tree'));


cat.getEmotion = function*() {
    var emotions = ['=(', '=)', 'O_o'];
    while(emotions.length) {
        yield emotions.pop();
    }
};


var emotionGenerator = cat.getEmotion();


console.log(emotionGenerator.next().value);
console.log(emotionGenerator.next().value);
console.log(emotionGenerator.next().value);

