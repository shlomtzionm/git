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
class currencies {
    constructor(type) {
        this.type = type;
    }
}
function getData(searchFor) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(`https://restcountries.com/v3.1${searchFor}`);
        let data = yield res.json();
        console.log(data);
        return data;
    });
}
let textToSearch = document.querySelector("#textToSearch");
let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let searchFor = textToSearch.value;
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
    restTables();
    totalCountriesResultF(data);
    totalCountriesPopulationF(data);
    averagePopulationF(data);
    showData(data);
    getRegions(data);
    currency(data);
}
let tbody = document.querySelector("#tbody");
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
        let tr = document.createElement("tr");
        let tdR = document.createElement("td");
        let tdNum = document.createElement("td");
        tdR.innerHTML = region;
        tdNum.innerHTML = regions[region].toString();
        tr.appendChild(tdR);
        tr.appendChild(tdNum);
        tbody.appendChild(tr);
    });
}
let tbodyCurrencies = document.querySelector("#currency");
function currency(data) {
    tbodyCurrencies.innerText = "";
    let currenciesObj = {};
    for (let i = 0; i < data.length; i++) {
        for (const key in data[i].currencies) {
            if (currenciesObj[key]) {
                currenciesObj[key]++;
            }
            else {
                currenciesObj[key] = 1;
            }
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            let td2 = document.createElement("td");
            td.innerHTML = key;
            td2.innerHTML = currenciesObj[key].toString();
            tr.appendChild(td);
            tr.appendChild(td2);
            tbodyCurrencies.appendChild(tr);
        }
    }
    console.log(currenciesObj);
}
function restTables() {
    table2.innerHTML = "";
    tbody.innerHTML = "";
    totalCountriesResult.innerHTML = "";
    totalCountriesPopulation.innerHTML = "";
    averagePopulation.innerHTML = "";
}
