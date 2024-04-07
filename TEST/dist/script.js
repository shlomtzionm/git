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
let searchBtn = document.querySelector("#searchBtn");
let all = document.querySelector("#all");
function getData(searchFor) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res = yield fetch(`https://restcountries.com/v3.1${searchFor}`);
            if (!res.ok) {
                throw new Error(`Failed to fetch data. Status: ${res.status}`);
            }
            let data = yield res.json();
            return data;
        }
        catch (error) {
            console.error("An error occurred:", error);
            restTables();
            throw error;
        }
    });
}
let textToSearch = document.querySelector("#textToSearch");
searchBtn.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let searchFor = textToSearch.value;
        let data = yield getData(`/name/${searchFor}`);
        handleBtn(data);
        textToSearch.value = "";
    });
});
all.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield getData("/all");
        handleBtn(data);
        textToSearch.value = "";
    });
});
function handleBtn(data) {
    restTables();
    totalCountriesResultF(data);
    totalCountriesPopulationF(data);
    averagePopulationF(data);
    mainTable(data);
    getRegions(data);
    currency(data);
}
let totalCountriesResult = document.querySelector("#totalCountriesResult");
function totalCountriesResultF(data) {
    totalCountriesResult.innerHTML = data.length.toString();
    return data.length;
}
let totalCountriesPopulation = document.querySelector("#totalCountriesPopulation");
function totalCountriesPopulationF(data) {
    let popSum = 0;
    data.forEach((country) => {
        popSum += country.population;
    });
    totalCountriesPopulation.innerHTML = popSum.toString();
    return popSum;
}
let averagePopulation = document.querySelector("#averagePopulation");
function averagePopulationF(data) {
    averagePopulation.innerHTML = (totalCountriesPopulationF(data) / totalCountriesResultF(data)).toString();
}
function mainTable(data) {
    data.forEach((country) => {
        buildTable(tbody2, country.name.official, country.population);
    });
}
function getRegions(data) {
    let regions = {};
    for (let i = 0; i < data.length; i++) {
        if (regions[data[i].region]) {
            regions[data[i].region]++;
        }
        else {
            regions[data[i].region] = 1;
        }
    }
    Object.keys(regions).forEach((region) => {
        buildTable(tbody3, region, regions[region]);
    });
}
function currency(data) {
    let currenciesObj = {};
    for (let i = 0; i < data.length; i++) {
        for (const key in data[i].currencies) {
            if (currenciesObj[key]) {
                currenciesObj[key]++;
            }
            else {
                currenciesObj[key] = 1;
            }
        }
    }
    for (const currency in currenciesObj) {
        buildTable(tbody4, currency, currenciesObj[currency]);
    }
}
function restTables() {
    tbody4.innerHTML = "";
    tbody2.innerHTML = "";
    tbody3.innerHTML = "";
    totalCountriesResult.innerHTML = "";
    totalCountriesPopulation.innerHTML = "";
    averagePopulation.innerHTML = "";
}
function buildTable(body, text1, text2) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    td.innerHTML = text1;
    td2.innerHTML = text2.toString();
    tr.appendChild(td);
    tr.appendChild(td2);
    body.appendChild(tr);
}
let tbody4 = document.querySelector("#currency");
let tbody3 = document.querySelector("#tbody3");
let tbody2 = document.querySelector("#tbody2");