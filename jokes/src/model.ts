export class Joke {
    error: boolean;
    category: string;
    type: string;
    joke: string;
    flags: string[];
    safe: boolean;
    id: number;
    lang: string;
    setup?: string;
    delivery?: string;
  
    constructor(error: boolean, category: string, type: string, joke: string, flags: string[], safe: boolean, id: number, lang: string, setup?: string, delivery?: string) {
      this.error = error;
      this.type = type;
      this.category = category;
      this.joke = joke;
      this.flags = flags;
      this.safe = safe;
      this.id = id;
      this.lang = lang;
      this.delivery = delivery;
      this.setup = setup;
    }
  }