class Activity {
  accessibility: number;
  activity: string;
  key: string;
  link: string;
  participants: number;
  price: number;
  type: string;
  constructor(
    accessibility: number,
    activity: string,
    key: string,
    link: string,
    participants: number,
    price: number,
    type: string
  ) {
    this.accessibility = accessibility;
    this.activity = activity;
    this.key = key;
    this.link = link;
    this.participants = participants;
    this.price = price;
    this.type = type;
  }
}

async function fetchBored(value: string): Promise<Activity> {
  let res = await fetch(`http://www.boredapi.com/api/${value}`);
  let data = await res.json();
  return data as Activity;
}

let p: HTMLElement = document.querySelector("#p") as HTMLElement;

(async function main() {
    let link: HTMLElement = document.querySelector("#link") as HTMLElement
    let select: HTMLSelectElement = document.querySelector(
        "#select") as HTMLSelectElement;

    
  function getBySelected() :string{
    return select.options[select.selectedIndex]?.value || "activity/"
  }

 async function updateActivity():Promise<void>{
    link.innerHTML = ""
    let option:string = getBySelected();
    let theActivity: Activity = await fetchBored( option);
    p.innerHTML = theActivity.activity;
    getLink(theActivity)
let tior:HTMLElement = document.querySelector("#tior") as HTMLElement
tior.innerHTML = `this activity is for: ${theActivity.participants} pepole, and
its categorized as: ${theActivity.type}`
}
let refreshBtn:HTMLButtonElement = document.querySelector("#refreshBtn") as HTMLButtonElement
refreshBtn.addEventListener("click", function(){
    updateActivity()
})

  
  document.addEventListener("DOMContentLoaded", updateActivity)
  select.addEventListener("change", updateActivity)


function getLink(theActivity: Activity){
    if (theActivity.link !== ""){
        link.setAttribute("href", theActivity.link)
    link.style.display = "block"
link.innerHTML = theActivity.link.toString()
    }
}
  
})();
