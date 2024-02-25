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
class Episode {
    constructor(id, name, air_date, episode, characters, url, created) {
        this.id = id;
        this.name = name;
        this.air_date = air_date;
        this.episode = episode;
        this.characters = characters;
        this.url = url;
        this.created = created;
    }
}
class character {
    constructor(name, status, image) {
        this.name = name;
        this.status = status;
        this.image = image;
    }
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch("https://rickandmortyapi.com/api/episode");
        let data = yield res.json();
        return data.results;
    });
}
let numberOfCHaracters = document.querySelector("#numberOfCHaracters");
let number = numberOfCHaracters.valueAsNumber;
let table = document.querySelector("#tbody");
let btnToSearch = document.querySelector("#btnToSearch");
btnToSearch.addEventListener("click", start);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        table.innerHTML = "";
        const results = yield getData();
        const number = numberOfCHaracters.valueAsNumber;
        for (const episode of results) {
            if (episode.characters.length >= number) {
                const tr = document.createElement("tr");
                buildTable(tr, episode.episode);
                buildTable(tr, episode.name);
                for (const characterURL of episode.characters) {
                    const response = yield fetch(characterURL);
                    const characterData = yield response.json();
                    const td = buildTable(tr, characterData.name, characterData.image.toString());
                    checkBox(characterData, td);
                }
            }
        }
    });
}
function buildTable(tr, key, image) {
    let td = document.createElement("td");
    td.innerHTML = key;
    tr.appendChild(td);
    if (image) {
        let img = document.createElement("img");
        img.src = image;
        td.appendChild(img);
    }
    table.appendChild(tr);
    return td;
}
function checkBox(data, td) {
    let input = document.createElement("input");
    input.type = "checkBox";
    input.checked = isAlive(data);
    td.appendChild(input);
}
function isAlive(data) {
    return data.status === "Alive";
}
