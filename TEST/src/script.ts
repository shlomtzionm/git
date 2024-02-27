class Country {
  name: Name;
  population: number;
  currencies: { [key: string]: string };
  region: string;
  constructor(name: Name, population: number, currencies: {}, region: string) {
    this.name = name;
    this.population = population;
    this.currencies = currencies;
    this.region = region;
  }
}

class Name {
  official: string;
  constructor(official: string) {
    this.official = official;
  }
}

class Currencies {
  type: {};
  constructor(type: string) {
    this.type = type;
  }
}

let textToSearch = document.querySelector("#textToSearch") as HTMLInputElement;
let searchFor: string = textToSearch.value;
let searchBtn = document.querySelector("#searchBtn") as HTMLElement;
let all = document.querySelector("#all") as HTMLButtonElement;

async function getData(searchFor: string): Promise<Array<Country>> {
  try {
    let res: Response = await fetch(
      `https://restcountries.com/v3.1${searchFor}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    let data: Country[] = await res.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    restTables();
    throw error;
  }
}

searchBtn.addEventListener("click", async function () {
  let data = await getData(`/name/${searchFor}`);
  handleBtn(data);
});

all.addEventListener("click", async function () {
  let data = await getData("/all");
  handleBtn(data);
});

let totalCountriesResult = document.querySelector("#totalCountriesResult") as HTMLElement;
function totalCountriesResultF(data: Country[]): number {
  totalCountriesResult.innerHTML = data.length.toString();
  return data.length;
}

let totalCountriesPopulation = document.querySelector("#totalCountriesPopulation") as HTMLElement;
function totalCountriesPopulationF(data: Country[]): number {
  let popSum: number = 0;
  data.forEach((country) => {
    popSum += country.population;
  });
  totalCountriesPopulation.innerHTML = popSum.toString();
  return popSum;
}

let averagePopulation = document.querySelector("#averagePopulation") as HTMLElement;
function averagePopulationF(data: Country[]) {
  averagePopulation.innerHTML = (
    totalCountriesPopulationF(data) / totalCountriesResultF(data)
  ).toString();
}

function showData(data: Country[]) {
  data.forEach((country) => {
  buildTable(tbody2, country.name.official ,country.population)
  
    // let tr: HTMLElement = document.createElement("tr");
    // let tdName: HTMLElement = document.createElement("td");
    // let tdPop: HTMLElement = document.createElement("td");

    // tdName.innerHTML = country.name.official;
    // tdPop.innerHTML = country.population.toString();

    // tr.appendChild(tdName);
    // tr.appendChild(tdPop);

    // tbody2.append(tr);
  });
}

function handleBtn(data: Country[]) {
  restTables();
  totalCountriesResultF(data);
  totalCountriesPopulationF(data);
  averagePopulationF(data);
  showData(data);
  getRegions(data);
  currency(data);
}

function getRegions(data: Country[]) {
  let regions: Record<string, number> = {};

  for (let i = 0; i < data.length; i++) {
    if (regions[data[i].region]) {
      regions[data[i].region]++;
    } else {
      regions[data[i].region] = 1;
    }
  }

  Object.keys(regions).forEach((region) => {
buildTable(tbody3, region,regions[region])

    // let tr = document.createElement("tr") as HTMLElement;
    // let tdR = document.createElement("td") as HTMLElement;
    // let tdNum = document.createElement("td") as HTMLElement;

    // tdR.innerHTML = region;
    // tdNum.innerHTML = regions[region].toString();

    // tr.appendChild(tdR);
    // tr.appendChild(tdNum);
    // tbody3.appendChild(tr);
  });
}

function currency(data: Country[]) {
  let currenciesObj: Record<string, number> = {};

  for (let i = 0; i < data.length; i++) {
    for (const key in data[i].currencies) {
      if (currenciesObj[key]) {
        currenciesObj[key]++;
      } else {
        currenciesObj[key] = 1;
      }
      buildTable(tbody4, key, currenciesObj[key])
      // let tr = document.createElement("tr") as HTMLElement;
      // let td = document.createElement("td") as HTMLElement;
      // let td2 = document.createElement("td") as HTMLElement;

      // td.innerHTML = key;
      // td2.innerHTML = currenciesObj[key].toString();

      // tr.appendChild(td);
      // tr.appendChild(td2);
      // tbody4.appendChild(tr);
    }
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

let tbody4 = document.querySelector("#currency") as HTMLElement;
let tbody3 = document.querySelector("#tbody3") as HTMLElement;
let tbody2 = document.querySelector("#tbody2") as HTMLElement;




function buildTable(body: HTMLElement, text1:string, text2: number){
  let tr = document.createElement("tr") as HTMLElement;
    let td = document.createElement("td") as HTMLElement;
    let td2 = document.createElement("td") as HTMLElement;

    td.innerHTML = text1;
    td2.innerHTML = text2.toString();

    tr.appendChild(td);
    tr.appendChild(td2);
    body.appendChild(tr);
}