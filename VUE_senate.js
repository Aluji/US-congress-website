const url = "https://api.propublica.org/congress/v1/113/senate/members.json";
const apiKey = "MjftNKbr3tuIihAmLUinxUqMTG98lJH26kAoR1DM";
//var members = [];
const header = {
  method: "GET",
  headers: {
    "X-API-Key": apiKey
  }
};

var app = new Vue({
  el: "#app",
  data: {
    members: [],
    data: []
  }
});

function myFunctionParty(p) {
  var checkBox = [];

  var checkBoxR = document.getElementById("mySelect1");
  var checkBoxD = document.getElementById("mySelect2");
  var checkBoxI = document.getElementById("mySelect3");

  checkBox.push(checkBoxR);
  checkBox.push(checkBoxD);
  checkBox.push(checkBoxI);

  var checkedPartyMembers;

  //despues d filtrar las concateno

  var Republicans = [];
  var Democrats = [];
  var Independents = [];

  //devuelveme los party members que sean iguales al valor de checkBox[0]

  if (checkBox[0].checked === true) {
    Republicans = p.filter(member => {
      return member.party === checkBox[0].value;
    });
  }

  if (checkBox[1].checked === true) {
    Democrats = p.filter(item => {
      return item.party === checkBox[1].value;
    });
  }

  if (checkBox[2].checked === true) {
    Independents = p.filter(item => {
      return item.party === checkBox[2].value;
    });
  }

  checkedPartyMembers = [].concat(Republicans, Democrats, Independents);

  if (!checkBox[0].checked && !checkBox[1].checked && !checkBox[2].checked) {
    checkedPartyMembers = p;
  }

  return checkedPartyMembers;
  // poltable.innerHTML = tableCreate(partyMembers);
}

//***********FILTRO LOS STATES*********************************************** */

//filtro solo estados para poderlos poner como input en el html.

function FilterStates(n) {
  var statesArray = [];

  for (var i = 0; i < n.length; i++) {
    statesArray.push(n[i].state);
  }
  return statesArray;
}

var states = FilterStates(app.members);
console.log("states: ", states);

//why is it empty?
//idea to remove the duplicates :D

const names = ["John", "Paul", "George", "Ringo", "John"];

let unique = [...new Set(names)];
//console.log(unique); // 'John', 'Paul', 'George', 'Ringo'

function PutInput(n) {
  var string = "";

  for (var i = 0; i < n.length; i++) {
    string += `
  <option name="state"
      option value=${n[i]}
    />${n[i]}<br>`;
  }
  return string;
}

var input = PutInput(states);

//1.se recorre el array de los estados que reunimos cuando clicamos en ellos.
//2. se recorre otro array (el de miembros) (se filtra los miembros.)hacerlo luego manual para entenderlo.
//3. se saca el state de miembros y se compara con el array de los estados.

function myFunctionStates(checkedParties) {
  var id = document.getElementById("mySelect4");
  //var strUser = e.options[e.selectedIndex].value;
  var valueofarray = id.value;

  if (valueofarray === "All States") return checkedParties;

  var stateMembers = [];

  stateMembers = checkedParties.filter(item => {
    return item.state === valueofarray;
  });

  return stateMembers;
}

function updateResults(pmembers) {
  var checkedParties = myFunctionParty(pmembers);

  var selectedStates = myFunctionStates(checkedParties);

  var ResultBothFilters = selectedStates;
  app.members = ResultBothFilters;
  return ResultBothFilters;
}

async function updateResultsAsync() {
  return await fetch(url, header)
    .then(res => res.json())
    .then(data => updateResults(data.results[0].members))
    .catch(error => console.error(error));
}

var el = document.getElementById("mySelect1");
el.addEventListener("change", updateResultsAsync);
var el2 = document.getElementById("mySelect2");
el2.addEventListener("change", updateResultsAsync);
var el3 = document.getElementById("mySelect3");
el3.addEventListener("change", updateResultsAsync);
var el4 = document.getElementById("mySelect4");
el4.addEventListener("change", updateResultsAsync);

// function FilterStates(n) {
//   var statesArray = [];

//   for (var i = 0; i < n.length; i++) {
//     statesArray.push(n[i].state);
//   }
//   return statesArray;
// }1
// FilterStates(app.data);

// function PutInput(n) {
//   var string = "";

//   for (var i = 0; i < n.length; i++) {
//     string += `
//     <option name="state"
//         option value=${n[i]}
//       />${n[i]}<br>`;
//   }
//   return string;
// }
// var input = PutInput(states);

updateResultsAsync();

//ROAD MAP DE COMO LEER EL ARCHIVO

//1. updateResultsAsync carga la data asincrona. el fetch está dentro.
//2. updateResultsAsync  llama a updateResults, que llama las funciones de filtrar.
//3. ir a la funciones de filtrar de partido y de estado. 1 filtra partido, y luego, con el partido filtrado, se filtra el estado.
