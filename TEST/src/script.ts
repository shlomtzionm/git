class Country {
  name: Name;
  population: number;
  currencies: {};
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

async function getData(searchFor: string): Promise<Array<Country>> {
  let res: Response = await fetch(`https://restcountries.com/v3.1${searchFor}`);
  let data: Array<Country> = await res.json();
  return data;
}

let textToSearch = document.querySelector("#textToSearch") as HTMLInputElement;
let searchBtn = document.querySelector("#searchBtn") as HTMLElement;

searchBtn.addEventListener("click", async function () {
  let searchFor: string = textToSearch.value.toLocaleLowerCase();
  let data = await getData(`/name/${searchFor}`);
  handleBtn(data);
});

let all = document.querySelector("#all") as HTMLButtonElement;
all.addEventListener("click", async function () {
  let data = await getData("/all");
  handleBtn(data);
});

function totalCountriesResult(data: Country[]): number {
  let totalCountriesResult = document.querySelector(
    "#totalCountriesResult"
  ) as HTMLTableElement;
  totalCountriesResult.innerHTML = data.length.toString();
  return data.length;
}

function totalCountriesPopulation(data: Country[]): number {
  let totalCountriesPopulation = document.querySelector(
    "#totalCountriesPopulation"
  ) as HTMLElement;
  let popSum: number = 0;
  data.forEach((country) => {
    popSum += country.population;
  });
  totalCountriesPopulation.innerHTML = popSum.toString();
  return popSum;
}

function averagePopulation(data: Country[]) {
  let averagePopulation = document.querySelector(
    "#averagePopulation"
  ) as HTMLElement;
  averagePopulation.innerHTML = (
    totalCountriesPopulation(data) / totalCountriesResult(data)
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
  table2.innerHTML = "";
resetTable()
  totalCountriesResult(data);
  totalCountriesPopulation(data);
  averagePopulation(data);
  showData(data);
getRegions(data)
}

function resetTable(){
    Americas.innerHTML = "";
    Asia.innerHTML = "";
     Europe.innerHTML = "";
    Africa.innerHTML = "";
    Oceania.innerHTML = "";
    Antarctic.innerHTML = "";

}

let Americas = document.querySelector("#Americas") as HTMLElement
let Asia = document.querySelector("#Asia") as HTMLElement
let Europe = document.querySelector("#Europe") as HTMLElement
let Africa = document.querySelector("#Africa") as HTMLElement
let Oceania = document.querySelector("#Oceania") as HTMLElement
let Antarctic = document.querySelector("#Antarctic") as HTMLElement


function getRegions(data: Country[]) {
    let regions: Record<string, number> = {};

    for (let i = 0; i < data.length; i++) {
      
        if (regions[data[i].region]) {
            regions[data[i].region]++;
        } else {
            regions[data[i].region] = 1;
        }

       
        let element = document.querySelector(`#${data[i].region}`) as HTMLElement;
        element.innerHTML = regions[data[i].region].toString();
    }
}




