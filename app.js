const yargs = require("yargs");
const handling = require("./handler.js");

yargs.command({
  command: "addperson",
  describe: "Add a new person",
  builder: {
    id: {
      describe: "Person ID",
      demandOption: true,
      type: "number",
    },
    fname: {
      describe: "First Name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "Last Name",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "Age",
      demandOption: false,
      type: "number",
    },
    city: {
      describe: "City",
      demandOption: false,
      type: "string",
    },
  },

  handler: (x) => {
    handling.addperson(x.id, x.fname, x.lname, x.age, x.city);
  },
});

yargs.command({
  command: "removeperson",
  describe: "Remove a person",
  builder: {
    id: {
      describe: "Person ID",
      demandOption: true,
      type: "number",
    },
  },

  handler: (x) => {
    handling.removeperson(x.id);
  },
});

yargs.command({
  command: "listperson",
  describe: "List a person",
  builder: {
    id: {
      describe: "Person ID",
      demandOption: true,
      type: "number",
    },
  },

  handler: (x) => {
    handling.listperson(x.id);
  },
});
yargs.command({
  command: "listallpersons",
  describe: "List all persons",
  builder: {},
  handler: (x) => {
    handling.listallpersons(x.id);
  },
});

yargs.command({
  command: "removeallpersons",
  describe: "Remove all persons",
  builder: {},
  handler: (x) => {
    handling.removeallpersons(x.id);
  },
});
yargs.parse();
