import { Joke } from "./model";

class JokeServices {


  async getData(): Promise<Joke> {
    let res = await fetch("https://v2.jokeapi.dev/joke/Any");
    let data = await res.json();
    return data as Joke;
  }
}

export const jokeServices = new JokeServices();
