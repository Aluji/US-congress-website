var members = data.results[0].members;
console.log(members);

function getPartyPolititians() {
  let ObjectPolititians = {
    D: [],
    R: [],
    I: [],
    T: []
  };

  for (var i = 0; i < members.length; i++) {
    ObjectPolititians.T.push(members[i]);

    if (members[i].party === "D") {
      ObjectPolititians.D.push(members[i]);
    } else if (members[i].party === "R") {
      ObjectPolititians.R.push(members[i]);
    } else if (members[i].party === "I") {
      ObjectPolititians.I.push(members[i]);
    }

    return ObjectPolititians;
  }
}
console.log(getPartyPolititians());

console.log(getPartyPolititians()["D"].length);
console.log(getPartyPolititians()["R"].length);
console.log(getPartyPolititians()["I"].length);

//tengo que hacer un condicional aquí?

function GetNumofMembers() {
  //no me deja pasar una función a otra función
  var AllMembers = getPartyPolititians()["D"].length;
  console.log(AllMembers);

  return AllMembers;
}

console.log(GetNumofMembers());

function getAllVotes() {
  let AllVotes = getPartyPolititians()["D"];
  let sumOfVotes = 0;
  let average = 0;
  for (var i = 0; i < AllVotes.length; i++) {
    sumOfVotes += getPartyPolititians()["D"][i].votes_with_party_pct;

    average = sumOfVotes / AllVotes.length;
    console.log(average);
  }
  return average;
}

console.log(getAllVotes());

function GetNumofMembersD() {
  //no me deja pasar una función a otra función
  var AllMembers = getPartyPolititians()["D"].length;

  return AllMembers;
}

console.log(GetNumofMembersD());

function GetNumofMembersR() {
  //no me deja pasar una función a otra función
  var AllMembers = getPartyPolititians()["R"].length;

  return AllMembers;
}

console.log(GetNumofMembersR());

function GetNumofMembersI() {
  //no me deja pasar una función a otra función
  var AllMembers = getPartyPolititians()["I"].length;

  return AllMembers;
}

console.log(GetNumofMembersI());

function TotalNumMembers() {
  return GetNumofMembersR() + GetNumofMembersD() + GetNumofMembersI();
}

console.log(TotalNumMembers());

console.log(getAllVotesD());

function getAllVotesD() {
  let AllVotes = getPartyPolititians()["D"];
  let sumOfVotes = 0;
  let average = 0;
  for (var i = 0; i < AllVotes.length; i++) {
    sumOfVotes += getPartyPolititians()["D"][i].votes_with_party_pct;
  }
  average = sumOfVotes / AllVotes.length;
  console.log(average);
  return average;
}

function getAllVotesI() {
  let AllVotes = getPartyPolititians()["I"];
  let sumOfVotes = 0;
  let average = 0;
  for (var i = 0; i < AllVotes.length; i++) {
    sumOfVotes += getPartyPolititians()["I"][i].votes_with_party_pct;
  }
  average = sumOfVotes / AllVotes.length;
  console.log(average);
  return average;
}

console.log(getAllVotesR());

function getAllVotesR() {
  let AllVotes = getPartyPolititians()["R"];
  let sumOfVotes = 0;
  let average = 0;
  for (var i = 0; i < AllVotes.length; i++) {
    sumOfVotes += getPartyPolititians()["R"][i].votes_with_party_pct;
  }
  average = sumOfVotes / AllVotes.length;
  console.log(average);
  return average;
}

console.log(getAllVotesR());

function TotalPercentAverage() {
  let votepercent = getAllVotesR() + getAllVotesD() + getAllVotesI();
  let toaverage = 3;
  let average = votepercent / toaverage;

  return average;
}

console.log(TotalPercentAverage());

function getAllVotesAverage() {
  let AllVotes = getPartyPolititians()["T"];
  let sumOfVotes = 0;
  let average = 0;
  for (var i = 0; i < AllVotes.length; i++) {
    sumOfVotes += getPartyPolititians()["T"][i].votes_with_party_pct;
  }
  average = sumOfVotes / AllVotes.length;
  console.log("hola" + average);
  return average;
}

console.log(getAllVotesAverage());

//********FINAL PRIMERA TABLA***************************************

function ToSort(n) {
  let newarray = [...n];
  return newarray.sort(function(a, b) {
    return a.missed_votes - b.missed_votes;
  });
}

function ToSortReverse(n) {
  let newarray = [...n];
  return newarray
    .sort(function(a, b) {
      return a.missed_votes - b.missed_votes;
    })
    .reverse();
}

function Percentage(num, per) {
  return (num / 100) * per;
}

//******************* */FINAL SEGUNDA TABLA******************************************

//Ya tengo toda la info, ara, a hacer las tablas.

//EMPIEZA LA TABLA********************************************************************

var taulaSenateAtGlance = "";

function taulaSenateAtGlanceCreate() {
  // taula = lo que hay + lo que viene del for.
  taulaSenateAtGlance = `

<tr>
<th> Party</th>
<th> Number of Reps</th>
<th> % Votes with Party</th>
</tr>

<tr> 
<td>Republicans</td>
<td>${GetNumofMembersR()}</td>
<td>${getAllVotesR()}</td>
<td></td>
      </tr>
      <tr> 
      <td>Democrats</td>
      <td>${GetNumofMembersD()}</td>
      <td>${getAllVotesD()}</td>
      <td></td>
            </tr>

            <tr> 
            <td>Independents</td>
            <td>${GetNumofMembersI()}</td>
            <td>${getAllVotesI()}</td>
            <td></td>
                  </tr>
                  <tr> 
                  <td>Total</td>
                  <td>${TotalNumMembers()}</td>
                  <td>${getAllVotesAverage()}</td>
                  <td></td>
                        </tr>
                     
`;

  return taulaSenateAtGlance;
}

document.getElementById("taulasenate").innerHTML = taulaSenateAtGlanceCreate(); //coges este id y le pones una tabla.

var taulaleastEngaged = "";

function taulaLeastEngaged() {
  let orderedmembers = ToSort(members);

  // taula = lo que hay + lo que viene del for.
  taulaleastEngaged = `

<tr>
<th> Name</th>
<th> Number of missed voted</th>
<th> Missed %</th>
</tr>


`;

  for (var i = 0; i < Percentage(orderedmembers.length, 10); i++) {
    taulaleastEngaged += ` 
      <tr> 
      
      <td>${orderedmembers[i].first_name}
      
      ${orderedmembers[i].middle_name || " "}
      ${orderedmembers[i].last_name}</td> 
            <td>${orderedmembers[i].missed_votes}</td>
            <td>${orderedmembers[i].missed_votes_pct}</td>
            <td></td>

 
        </tr>
        `;
  }
  console.log(orderedmembers);
  return taulaleastEngaged;
}

document.getElementById("taulaleastEngaged").innerHTML = taulaLeastEngaged();

function taulaMostEngaged() {
  let orderedmembersreverse = ToSortReverse(members);
  // taula = lo que hay + lo que viene del for.

  var taulaMostEngaged = "";

  taulaMostEngaged = `

<tr>
<th> Name</th>
<th> Number of missed voted</th>
<th> Missed %</th>
</tr>


`;
  for (var i = 0; i < Percentage(orderedmembersreverse.length, 10); i++) {
    taulaMostEngaged += ` 
      <tr> 
      
      <td>${orderedmembersreverse[i].first_name}
      
      ${orderedmembersreverse[i].middle_name || " "}
      ${orderedmembersreverse[i].last_name}</td> 
            <td>${orderedmembersreverse[i].missed_votes}</td>
            <td>${orderedmembersreverse[i].missed_votes_pct}</td>
            <td></td>

 
        </tr>
        `;
  }

  return taulaMostEngaged;
}

document.getElementById("taulaMostEngaged").innerHTML = taulaMostEngaged();
