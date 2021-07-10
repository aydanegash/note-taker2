const util = require('util');
const fs = require('fs');

const uuid = require("uuid-random");

module.exports = (app) => {

    const readNote = util.promisify(fs.readFile);
    const writeNote = util.promisify(fs.writeFile);

    
    app.post("/api/notes", (req, res) => {
        readNote('./db/db.json', "utf8").then((notes) => {
          let thisNote = JSON.parse(notes);
          let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid(),
          };
          thisNote.push(newNote);
          writeNote('./db/db.json', JSON.stringify(thisNote));
          res.json(200);
        });
      });

    
    app.get("/api/notes", (req, res) => {
        let note = [];
        readNote("./db/db.json", "utf8").then((notes) => {
            note = JSON.parse(notes);
            console.log(note);
          return res.json(note);
        });
      });


    app.delete("/api/notes/:id", (req, res) => {
        readNote("./db/db.json", "utf8").then((notes) => {
          let thisNote = JSON.parse(notes);
          thisNote = thisNote.filter((note) => note.id !== req.params.id);
          writeNote("./db/db.json", JSON.stringify(thisNote));
          res.json(200);
          console.log(`Deleting note: ${note}`)
        });
    });
};

