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
  }

  return ObjectPolititians;
}

console.log(getPartyPolititians());

var taula = "";
function tableCreate() {
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

  for (i = 0; i < members.length; i++) {
    taula += ` 
      <tr> 
      
      <td><a href="${i.url}">${members[i].first_name}
      
      ${members[i].middle_name || " "}
      ${members[i].last_name}</a></td> 
            <td>${members[i].party}</td>
            <td>${members[i].state}</td>
            <td>${members[i].seniority}</td>
            <td>${members[i].votes_with_party_pct + `%`}</td>
        
        </tr>
        `;
  }

  return taula;
}

//<a class="decoration" href="MyDesign_home.html">
//HOME
//</a>;

//var taula = tableCreate(); //pones en la variable la funcion tabla

document.getElementById("table").innerHTML = tableCreate(); //coges este id y le pones una tabla.
