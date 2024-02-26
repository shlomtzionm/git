class Joke {
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

  constructor(
    error: boolean,
    category: string,
    type: string,
    joke: string,
    flags: string[],
    safe: boolean,
    id: number,
    lang: string,
    setup?: string,
    delivery?: string
  ) {
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

let favJokes: number[] = [];
let jokeContainer: HTMLElement = document.querySelector( "#jokeContainer") as HTMLElement;
let likedJokes: HTMLElement = document.querySelector("#like") as HTMLElement;

async function main() {
  let theJoke = await getData();
  console.log(theJoke);
showJoke(theJoke, jokeContainer);
}


function pushToFav(favJokes: number[], jokeId: number) {
  favJokes.push(jokeId);
  console.log(favJokes);
}


function showJoke(theJoke: Joke, jokeContainer: HTMLElement) {
  if (theJoke.joke) {
    jokeContainer.innerText = theJoke.joke;
  } else if (theJoke.setup && theJoke.delivery) {
    jokeContainer.innerText = `${theJoke.setup} 
        ${theJoke.delivery}`;
  }
}


  likedJokes.addEventListener("click",pushToFav(favJokes, theJoke.id))

async function getData(): Promise<Joke> {
  let res = await fetch("https://v2.jokeapi.dev/joke/Any");
  let data = await res.json();
  return data as Joke;
}

let refresh = document.querySelector("#refresh") as HTMLElement
refresh.addEventListener("click", main)

document.addEventListener("DOMContentLoaded",main)