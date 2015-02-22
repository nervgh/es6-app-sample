

import Animal from './Animal.js';


class Cat extends Animal {
    /**
     * @param {Object} options
     */
    constructor(options = {name: 'cat'}) {
        super(options);
    }
    /**
     *
     */
    meow(...sound) {
        return sound;
    }
}



export default Cat;