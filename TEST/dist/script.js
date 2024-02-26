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
class Country {
    constructor(name, population, currencies, region) {
        this.name = name;
        this.population = population;
        this.currencies = currencies;
        this.region = region;
    }
}
class Name {
    constructor(official) {
        this.official = official;
    }
}
function getData(searchFor) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(`https://restcountries.com/v3.1${searchFor}`);
        let data = yield res.json();
        return data;
    });
}
let textToSearch = document.querySelector("#textToSearch");
let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let searchFor = textToSearch.value.toLocaleLowerCase();
        let data = yield getData(`/name/${searchFor}`);
        handleBtn(data);
    });
});
let all = document.querySelector("#all");
all.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield getData("/all");
        handleBtn(data);
    });
});
function totalCountriesResult(data) {
    let totalCountriesResult = document.querySelector("#totalCountriesResult");
    totalCountriesResult.innerHTML = data.length.toString();
    return data.length;
}
function totalCountriesPopulation(data) {
    let totalCountriesPopulation = document.querySelector("#totalCountriesPopulation");
    let popSum = 0;
    data.forEach((country) => {
        popSum += country.population;
    });
    totalCountriesPopulation.innerHTML = popSum.toString();
    return popSum;
}
function averagePopulation(data) {
    let averagePopulation = document.querySelector("#averagePopulation");
    averagePopulation.innerHTML = (totalCountriesPopulation(data) / totalCountriesResult(data)).toString();
}
let table2 = document.querySelector("#table2");
function showData(data) {
    data.forEach((country) => {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdPop = document.createElement("td");
        tdName.innerHTML = country.name.official;
        tdPop.innerHTML = country.population.toString();
        tr.appendChild(tdName);
        tr.appendChild(tdPop);
        table2.append(tr);
    });
}
function handleBtn(data) {
    table2.innerHTML = "";
    resetTable();
    totalCountriesResult(data);
    totalCountriesPopulation(data);
    averagePopulation(data);
    showData(data);
    getRegions(data);
}
function resetTable() {
    Americas.innerHTML = "";
    Asia.innerHTML = "";
    Europe.innerHTML = "";
    Africa.innerHTML = "";
    Oceania.innerHTML = "";
    Antarctic.innerHTML = "";
}
let Americas = document.querySelector("#Americas");
let Asia = document.querySelector("#Asia");
let Europe = document.querySelector("#Europe");
let Africa = document.querySelector("#Africa");
let Oceania = document.querySelector("#Oceania");
let Antarctic = document.querySelector("#Antarctic");
function getRegions(data) {
    let regions = {};
    for (let i = 0; i < data.length; i++) {
        if (regions[data[i].region]) {
            regions[data[i].region]++;
        }
        else {
            regions[data[i].region] = 1;
        }
        let element = document.querySelector(`#${data[i].region}`);
        element.innerHTML = regions[data[i].region].toString();
    }
}
