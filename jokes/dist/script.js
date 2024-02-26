"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Joke {
    constructor(error, category, type, joke, flags, safe, id, lang, setup, delivery) {
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
let favJokes = [];
let jokeContainer = document.querySelector("#jokeContainer");
let likedJokes = document.querySelector("#like");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let theJoke = yield getData();
        console.log(theJoke);
        showJoke(theJoke, jokeContainer);
        like(theJoke, likedJokes);
    });
}
function pushToFav(favJokes, jokeId) {
    favJokes.push(jokeId);
    console.log(favJokes);
}
let fromFav = document.querySelector("#fav");
fromFav.addEventListener("click", function () {
});
function showJoke(theJoke, jokeContainer) {
    if (theJoke.joke) {
        jokeContainer.innerText = theJoke.joke;
    }
    else if (theJoke.setup && theJoke.delivery) {
        jokeContainer.innerText = `${theJoke.setup} 
        ${theJoke.delivery}`;
    }
}
function like(theJoke, likedJokes) {
    likedJokes.addEventListener("click", function () {
        pushToFav(favJokes, theJoke.id);
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch("https://v2.jokeapi.dev/joke/Any");
        let data = yield res.json();
        return data;
    });
}
let refresh = document.querySelector("#refresh");
refresh.addEventListener("click", main);
document.addEventListener("DOMContentLoaded", main);
