function myFunction() {
  var poltable = document.getElementById("filteredTable");
  var checkedBoxes = document.querySelectorAll("input[name=party]:checked");
  console.log(checkedBoxes);
  //var checkedBoxesnot = document.querySelectorAll(  "input[name=party]:not(:checked)"
  var checkedR = document.querySelector("input[value=Republican]:checked"); //get elementbyId

  var checkedD = document.querySelector("input[value=Democrat]:checked");

  var checkedI = document.querySelector("input[value=Independent]:checked");
  console.log(checkedI);
  if (checkedBoxes) {
    poltable.innerHTML = tableCreate(getPartyPolititians()["T"]);
  } else if (checkedI) {
    poltable.innerHTML = tableCreate(getPartyPolititians()["I"]);
  }
}
myFunction();

//Y LA TABLA

//se como funciona
//*********************************OR***************************************+ */

function getCheckedBoxes(p) {
  var checkboxes = document.getElementsByName(p);
  var checkboxesChecked = [];

  for (var i = 0; i < checkboxes.length; i++) {
    // And stick the checked ones onto an array...
    if (checkboxes[i].checked) {
      checkboxesChecked.push(checkboxes[i]);
    }
  }
  // Return the array if it is non-empty, or null

  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

var checkedBoxes = getCheckedBoxes("party");

function myFunction() {
  poltable = document.getElementById("filteredTable");
  checkedBoxes = getCheckedBoxes("party");

  if (checkedBoxes) {
    poltable.innerHTML = tableCreate(getPartyPolititians()["T"]);
  }
}

//Y LA TABLA

//no se como funciona
