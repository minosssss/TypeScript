type Words = {
    [key:string]:string;
}

class Dict {
    private words:Words;
    constructor(){
        this.words = {}
    }
    set(word:Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    get(term:string) {
        return this.words[term]
    }

    delete(term:string) {
        return delete this.words[term]
    }

    showAll() {
        return this.words;
    }

    count() {
        return Object.keys(this.words).length;
    }

    upsert(word:Word) {
        if(this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        } else {
            this.set(word);
        }
    }

    exists(term:string) {
        return this.words.hasOwnProperty(term);
    }

    bulkAdd(words:Word[]) {
        return words.forEach(x=>this.set(x));
    }

    bulkDelete(terms:string[]) {
        return terms.forEach(x=>this.delete(x))
    }
    
}

class Word {
    constructor(
        public term:string,
        public def: string,
    ) {}
}

const pizza = new Word('pizza','Italian Food');
const sushi = new Word('sushi','Japanese Food');


const dict = new Dict();
dict.bulkAdd([pizza,sushi]);
console.log(dict.showAll());
dict.bulkDelete(['pizza']);
console.log(dict.showAll())


