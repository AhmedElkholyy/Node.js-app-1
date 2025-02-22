const fs = require("fs");

function loadinfo() {
  try {
    var info = fs.readFileSync("info.JSON").toString();
    return JSON.parse(info);
  } catch {
    return [];
  }
}

function saveinfo(info) {
  infoJSON = JSON.stringify(info);
  fs.writeFileSync("info.JSON", infoJSON);
}

function addperson(id, fname, lname, age, city) {
  var info = loadinfo();
  var duplicate = info.filter((x) => x.id === id);
  if (duplicate.length === 0) {
    var newperson = {
      fname: fname,
      lname: lname,
      city: city,
      id: id,
      age: age,
    };
    console.log("DONE");
    info.push(newperson);
    saveinfo(info);
  } else {
    console.log("ERROR: ID already exists");
  }
}

function removeperson(id) {
  var info = loadinfo();
  var personExists = info.some((x) => x.id === id);

  if (personExists) {
    let newinfo = info.filter((x) => x.id !== id);
    console.log("DONE");
    saveinfo(newinfo);
  } else {
    console.log("ERROR: ID does not exist");
  }
}

function removeallpersons() {
  saveinfo([]);
  console.log("DONE");
}

function listperson(id) {
  var info = loadinfo();

  var person = info.find((x) => x.id === id);
  if (person) {
    console.log(person);
  } else {
    console.log("Person not found");
  }
}

function listallpersons() {
  var info = loadinfo();
  if (info.length === 0) {
    console.log("No persons found");
  } else {
    console.log(info);
  }
}

module.exports = {
  addperson: addperson,
  removeperson: removeperson,
  removeallpersons: removeallpersons,
  listperson: listperson,
  listallpersons: listallpersons,
};
