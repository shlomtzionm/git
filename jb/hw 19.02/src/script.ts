abstract class Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: URL[];
  url: URL;
  created: Date;
  constructor(
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: URL[],
    url: URL,
    created: Date
  ) {
    this.id = id;
    this.name = name;
    this.air_date = air_date;
    this.episode = episode;
    this.characters = characters;
    this.url = url;
    this.created = created;
  }
}

abstract class character {
  name: string;
  status: string;
  image: TexImageSource;
  constructor(name: string, status: string, image: TexImageSource) {
    this.name = name;
    this.status = status;
    this.image = image;
  }
}

async function getData(): Promise<Episode[]> {
  let res = await fetch("https://rickandmortyapi.com/api/episode");
  let data = await res.json();
  return data.results;
}

let numberOfCHaracters: HTMLInputElement = document.querySelector(
  "#numberOfCHaracters"
) as HTMLInputElement;
let number: number = numberOfCHaracters.valueAsNumber;

let table: HTMLTableSectionElement = document.querySelector(
  "#tbody"
) as HTMLTableSectionElement;

let btnToSearch: HTMLButtonElement = document.querySelector(
  "#btnToSearch"
) as HTMLButtonElement;

btnToSearch.addEventListener("click", start);

async function start() {
    table.innerHTML = "";
    const results: Episode[] = await getData();
    const number: number = numberOfCHaracters.valueAsNumber;
  
    for (const episode of results) {
      if (episode.characters.length >= number) {
        const tr: HTMLTableRowElement = document.createElement("tr");
        buildTable(tr, episode.episode);
        buildTable(tr, episode.name);
  
        for (const characterURL of episode.characters) {
            const response:Response = await fetch(characterURL);
            const characterData: character = await response.json();
            const td:HTMLTableCellElement = buildTable(tr, characterData.name, characterData.image.toString());
    
            checkBox(characterData, td);
    
           
      
      
      
        }
      
      
      
        }
    }
  }
  

  function buildTable(tr: HTMLElement, key: string, image?: string): HTMLTableCellElement {
    let td: HTMLTableCellElement = document.createElement("td");
    td.innerHTML = key;
    tr.appendChild(td);
  
    if (image) {
      let img: HTMLImageElement = document.createElement("img");
      img.src = image;
      td.appendChild(img);
    }
  
    table.appendChild(tr);
    return td;
  }
  

function checkBox(data: character, td: HTMLTableCellElement) {
  let input = document.createElement("input");
  input.type = "checkBox";
  input.checked = isAlive(data);
  td.appendChild(input);
}

function isAlive(data: character): boolean {
  return data.status === "Alive";
}
