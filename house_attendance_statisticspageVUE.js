var url = "https://api.propublica.org/congress/v1/113/house/members.json";
const apiKey = "MjftNKbr3tuIihAmLUinxUqMTG98lJH26kAoR1DM";
//var polititians = {}; //OR WITHOUT IT
const header = {
  method: "GET",
  headers: {
    "X-API-Key": apiKey
  }
};

var app = new Vue({
  el: "#table1",
  data: {
    members: [],
    D: [],
    D2: [],
    R: [],
    R2: [],
    I: [],
    I2: [],
    T: [],
    T2: []
  }
});

var app2 = new Vue({
  el: "#table2",
  data: {
    members: []
    //sorted: []
  }
});

var app3 = new Vue({
  el: "#table3",
  data: {
    members: []
  }
});

fetch(url, header)
  .then(response => {
    return response.json();
  })
  .then(data => {
    app.members = data.results[0].members;

    let D = [];
    for (var i = 0; i < app.members.length; i++) {
      if (app.members[i].party === "D") {
        D.push(app.members[i]);
      }
    }

    //para length
    app.D = D;
    app.D2 = D;
    app.D2 = getAllVotesD().toFixed(2);

    let R = [];
    for (var i = 0; i < app.members.length; i++) {
      if (app.members[i].party === "R") {
        R.push(app.members[i]);
      }
    }
    app.R = R;
    // app.R2 = R;
    app.R2 = getAllVotesR(R).toFixed(2);

    let I = [];
    for (var i = 0; i < app.members.length; i++) {
      if (app.members[i].party === "I") {
        I.push(app.members[i]);
      }
    }
    app.I = I;
    app.I2 = I;
    app.I2 = getAllVotesI().toFixed(2);

    let T = [];
    for (var i = 0; i < app.members.length; i++) {
      T.push(app.members[i]);
    }

    app.T = T;
    app.T2 = T;
    app.T2 = getAllVotesT().toFixed(2);

    app2.members = data.results[0].members;
    app2.members = ToSortReverse(app2.members);
    let newarray2 = app2.members.splice(11);

    //pq no puedo poner  app2.members = app2.members.splice(11);

    Percentage(app2.members, 10);

    app3.members = data.results[0].members;
    app3.members = ToSort(app3.members);
    let newarray3 = app3.members.splice(11);
  })

  .catch(error => console.error(error));

function GetDemocratsD() {
  let D = [];
  for (var i = 0; i < app.members.length; i++) {
    if (app.members[i].party === "D") {
      D.push(app.members[i]);
    }
  }
  return D;
}

GetDemocratsD();
console.log("GetDemocratsD(): ", GetDemocratsD());

function getAllVotesD() {
  let AllVotes = app.D2;
  // console.log("AllVotes: ", AllVotes);

  let sumOfVotes = 0;
  let average = 0;
  for (var i = 0; i < AllVotes.length; i++) {
    sumOfVotes += AllVotes[i].votes_with_party_pct;

    average = sumOfVotes / AllVotes.length;
    //console.log(average);
    app2.D = average;
    //console.log("app.D : ", app.D);
  }

  return average;
}

function getAllVotesI() {
  let AllVotes = app.I2;
  // console.log("AllVotes: ", AllVotes);

  let sumOfVotes = 0;
  let average = 0;
  for (var i = 0; i < AllVotes.length; i++) {
    sumOfVotes += AllVotes[i].votes_with_party_pct;

    average = sumOfVotes / AllVotes.length;
    //console.log(average);
    app.I2 = average;
    //console.log("app.D : ", app.D);
  }

  return average;
}

function getAllVotesR(R) {
  let AllVotes = app.R2;
  // console.log("AllVotes: ", AllVotes);

  let sumOfVotes = 0;
  let average = 0;
  for (var i = 0; i < R.length; i++) {
    sumOfVotes += R[i].votes_with_party_pct;

    average = sumOfVotes / R.length;
    //console.log(average);
    // app.R2 = average;
    //console.log("app.D : ", app.D);
  }

  return average;
}

function getAllVotesT() {
  let AllVotes = app.T2;
  // console.log("AllVotes: ", AllVotes);

  let sumOfVotes = 0;
  let average = 0;
  for (var i = 0; i < AllVotes.length; i++) {
    sumOfVotes += AllVotes[i].votes_with_party_pct;

    average = sumOfVotes / AllVotes.length;
    //console.log(average);
    app.T2 = average;
    //console.log("app.D : ", app.D);
  }

  return average;
}

function Percentage(num, per) {
  return (num / 100) * per;
}

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
