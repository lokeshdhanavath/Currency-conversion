const BASE_URL =
  'https://v6.exchangerate-api.com/v6/5dc66aedd8e711e9df9a3b17/latest/';


let img    = document.querySelectorAll(".select-container img");
let from = document.querySelector(".from select");
let to = document.querySelector(".to select");
let dropdowns = document.querySelectorAll(".dropdown select");
let msg =document.querySelector(".msg p");

img[0].src = `https://flagsapi.com/US/shiny/64.png`;
img[1].src = `https://flagsapi.com/IN/shiny/64.png`;
for ( let select of dropdowns){
    for (code in countryList){
      let newoptn = document.createElement("option");
      newoptn.innerText = code;
      newoptn.value     = code;
      if (select.name === "from" && code === "USD") {
        newoptn.selected = "selected";
      } else if (select.name === "to" && code === "INR") {
        newoptn.selected = "selected";
      }
      select.append(newoptn);
    }
select.addEventListener('change',(evt) => {
    ele1 = from.value;
    ele2 = to.value;
    updateimg(ele1,ele2);
});
}
const updateimg = (f ,t) => {
     a = countryList[f];
     b = countryList[t];      
    img[0].src = `https://flagsapi.com/${a}/shiny/64.png`;
    img[1].src =  `https://flagsapi.com/${b}/shiny/64.png`;
    };
  msg.innerText = `0 ${from.value} = 0 ${to.value}`;
  const exchangeMoney = async () => {
  url = `${BASE_URL}/${from.value}`;
  let response =  await fetch(url);
  let data = await response.json();
  let amt = data.conversion_rates[to.value];
  let amtval = document.querySelector(".input input");
  let finalamt = amtval.value * amt ;
  console.log(finalamt);
  displaymsg(amtval.value,finalamt); 
}
 const displaymsg = (initial,final) => {
     msg.innerText = `${initial} ${from.value} = ${final} ${to.value}`;
 }
const btn = document.querySelector("form button");
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    exchangeMoney();
});




