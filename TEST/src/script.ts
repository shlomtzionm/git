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

class currencies {
  type: {};
  constructor(type: string) {
    this.type = type;
  }
}

async function getData(searchFor: string): Promise<Array<Country>> {
  let res: Response = await fetch(`https://restcountries.com/v3.1${searchFor}`);
  let data: Array<Country> = await res.json();
  console.log(data);

  return data;
}

let textToSearch = document.querySelector("#textToSearch") as HTMLInputElement;
let searchBtn = document.querySelector("#searchBtn") as HTMLElement;

searchBtn.addEventListener("click", async function () {
  let searchFor: string = textToSearch.value;
  let data = await getData(`/name/${searchFor}`);

  handleBtn(data);
});

let all = document.querySelector("#all") as HTMLButtonElement;
all.addEventListener("click", async function () {
  let data = await getData("/all");

  handleBtn(data);
});

let totalCountriesResult = document.querySelector(
  "#totalCountriesResult"
) as HTMLElement;
function totalCountriesResultF(data: Country[]): number {
  totalCountriesResult.innerHTML = data.length.toString();
  return data.length;
}

let totalCountriesPopulation = document.querySelector(
  "#totalCountriesPopulation"
) as HTMLElement;
function totalCountriesPopulationF(data: Country[]): number {
  let popSum: number = 0;
  data.forEach((country) => {
    popSum += country.population;
  });
  totalCountriesPopulation.innerHTML = popSum.toString();
  return popSum;
}

let averagePopulation = document.querySelector(
  "#averagePopulation"
) as HTMLElement;
function averagePopulationF(data: Country[]) {
  averagePopulation.innerHTML = (
    totalCountriesPopulationF(data) / totalCountriesResultF(data)
  ).toString();
}

let table2 = document.querySelector("#table2") as HTMLElement;

function showData(data: Country[]) {
  data.forEach((country) => {
    let tr: HTMLElement = document.createElement("tr");
    let tdName: HTMLElement = document.createElement("td");
    let tdPop: HTMLElement = document.createElement("td");

    tdName.innerHTML = country.name.official;
    tdPop.innerHTML = country.population.toString();

    tr.appendChild(tdName);
    tr.appendChild(tdPop);

    table2.append(tr);
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

let tbody = document.querySelector("#tbody") as HTMLElement;
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
    let tr = document.createElement("tr") as HTMLElement;
    let tdR = document.createElement("td") as HTMLElement;
    let tdNum = document.createElement("td") as HTMLElement;

    tdR.innerHTML = region;
    tdNum.innerHTML = regions[region].toString();

    tr.appendChild(tdR);
    tr.appendChild(tdNum);
    tbody.appendChild(tr);
  });
}
let tbodyCurrencies = document.querySelector("#currency") as HTMLTableElement
function currency(data: Country[]) {
  tbodyCurrencies.innerText = ""
  let currenciesObj: Record<string, number> = {};

  for (let i = 0; i < data.length; i++) {
    for (const key in data[i].currencies) {
      if (currenciesObj[key]) {
        currenciesObj[key]++;
      } else {
        currenciesObj[key] = 1;
      }
      let tr = document.createElement("tr")
      let td = document.createElement("td")
      let td2 = document.createElement("td")
      
      td.innerHTML = key
      td2.innerHTML = currenciesObj[key].toString()


      tr.appendChild(td)
      tr.appendChild(td2)
tbodyCurrencies.appendChild(tr) 
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
