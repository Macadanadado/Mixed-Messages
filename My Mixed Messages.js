const nonsense ={
    verbs: ['hug', 'lick', 'kick', 'punch', 'love'],
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    animals: ['cow', 'dog', 'monkey', 'giraffe', 'bird', 'cat'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'],
    getRandVerb: function (){
        let randVerbIndex = Math.floor(Math.random() * this.verbs.length);
        return this.verbs[randVerbIndex];
    },
    getRandColor: function (){
        let randColorIndex = Math.floor(Math.random() * this.colors.length);
        return this.colors[randColorIndex];
    },
    getRandAnimal: function (){
        let randAnimalIndex = Math.floor(Math.random() * this.animals.length);
        return this.animals[randAnimalIndex];
    },
    getRandDay: function (){
        let randDayIndex = Math.floor(Math.random() * this.days.length);
        return this.days[randDayIndex]
    },
    getFinalMessage: function (){
        let grammer = 'a';
        const myColor = this.getRandColor()
        switch (myColor[0]) {
            case 'a':
                grammer = 'an';
                break;
            case 'e':
                grammer = 'an'
                break;
            case 'i':
                grammer = 'an'
                break;
            case 'o':
                grammer = 'an'
                break;
            case 'u':
                grammer = 'an'
                break;
            default:
                grammer = 'a'
                break;
        }
        return `Never ${this.getRandVerb()} ${grammer} ${myColor} ${this.getRandAnimal()}, especially if its ${this.getRandDay()}!`
    }
};
console.log(nonsense.getFinalMessage())