const url = "https://api.propublica.org/congress/v1/113/house/members.json";
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
    members: []
  }
});

var update = fetch(url, header)
  .then(response => {
    return response.json();
  })
  .then(data => {
    app.members = data.results[0].members;
    app.members = updateResults(app.members);
    return app.members;
  })

  .catch(error => console.error(error));

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
//var states = FilterStates(members);

//function put input x pereza a escribirlo mil veces. state=ACCOMPLISHED.xD

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
// var input = PutInput(states);

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
/*
var taula = "";
function tableCreate(p) {
  // taula = lo que hay + lo que viene del for.
  taula = `

<tr>
<th> Name</th>
<th> "Party</th>
<th> State</th>
<th> Years in office</th>
<th> % Votes w/ Party</th>
</tr>

`;

  for (i = 0; i < p.length; i++) {
    taula += `
    <tr>
      <td>
        <a href="${i.url}">${p[i].first_name}
          ${p[i].middle_name || " "}
          ${p[i].last_name}
        </a>
      </td>
      <td>${p[i].party}</td>
      <td>${p[i].state}</td>
      <td>${p[i].seniority}</td>
      <td>${p[i].votes_with_party_pct + `%`}</td>
      </tr>
      `;
  }

  return taula;
}
*/
function updateResults(pmembers) {
  var checkedParties = myFunctionParty(pmembers);

  var selectedStates = myFunctionStates(checkedParties);

  var ResultBothFilters = selectedStates;
  app.members = ResultBothFilters;
  return ResultBothFilters;
}
