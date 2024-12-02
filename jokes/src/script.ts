import { jokeServices } from "./jokeServices";
import { Joke } from "./model";

let jokeContainer: HTMLElement = document.querySelector("#jokeContainer") as HTMLElement;
const refresh = document.querySelector("#refresh") as HTMLElement;


async function main() {
 const  theJoke = await jokeServices.getData();
  showJoke(theJoke, jokeContainer);
}


function showJoke(theJoke: Joke, jokeContainer: HTMLElement) {
  if (theJoke.joke) {
    jokeContainer.innerText = theJoke.joke;
  } else if (theJoke.setup && theJoke.delivery) {
    jokeContainer.innerText = `${theJoke.setup} 
        ${theJoke.delivery}`;
  }
}


refresh.addEventListener("click", main);

document.addEventListener("DOMContentLoaded", main);
