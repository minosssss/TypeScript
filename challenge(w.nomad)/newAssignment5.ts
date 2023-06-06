type Dictionary = {
    [key:string]:string;
}

class Dict {
    private dictionary:Dictionary;
    constructor() {
        this.dictionary = {};
    }

    add(term:string, definition:string):void {
        if (this.dictionary[term] === undefined) {
            this.dictionary[term] = definition;
        } else {
            return;
        }
    }

    get(term:string):string | undefined {
        return this.dictionary[term];
    }

    delete(term:string):void {
        delete this.dictionary[term];
    }

    upsert (term:string, definition:string):void {
        if (this.dictionary[term] !== undefined) {
            this.dictionary[term] = definition;
        } else {
            this.add(term,definition);
        }
    }
    
     count(): number {
        return Object.keys(this.dictionary).length;
    }

    showAll():void {
        for (const [key, value] of Object.entries(this.dictionary)) {
             console.log(`${key}: ${value}`);
        }
    }

    exists(term: string): boolean {
        return this.dictionary.hasOwnProperty(term);
    }

    bulkAdd(termList: {term:string, definition:string}[]):void {
        termList.forEach(({term, definition})=>this.add(term,definition))
        
    }

    bulkDelete(termList:string[]):void {
        termList.forEach(term => this.delete(term));
    }
}