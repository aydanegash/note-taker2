const uuid = require("uuid-random");
const notesTemplate = require("../db/notesArray");
const noteTemplate = require('../db/notesArray');



module.exports = (app) => {
    app.get('./api/notes', (req, res) => res.json(noteTemplate));


    // app.post('./api/notes', (req, res) => {
    //     res.json(noteTemplate)
    // };


    app.post('/api/notes', (req, res) => {
        res.json(notesTemplate);
        console.log(notesTemplate)
        
      });
    
    


    app.delete('./api/notes', (req, res) => res.json(noteTemplate));
};


// const fs = require('fs');
// const util = require('fs');

// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);



//     app.post("/api/notes", (req, res) => {
//         readFile("./db/db.json", "utf8").then((notes) => {
//           const currentNotes = JSON.parse(notes);
//           const newNote = {
//             title: req.body.title,
//             text: req.body.text,
//             id: uuid(),
//           };
//           currentNotes.push(newNote);
//           writeFile("./db/db.json", JSON.stringify(currentNotes));
//           res.json(200);
//         });
//       });
    
//     app.get("/api/notes", (req, res) => {
//         let db = [];
//         readFile("./db/db.json", "utf8").then((notes) => {
//           console.log(notes, db);
//           try {
//             db = JSON.parse(notes);
//             console.log(db);
//           } catch (error) {
//             console.log("error: " + error);
//             db = [];
//           }
//           return res.json(db);
//         });
//       });
        
//       app.delete("/api/notes/:id", (req, res) => {
//         readFile("./db/db.json", "utf8").then((notes) => {
//           let currentNotes = JSON.parse(notes);
//           currentNotes = currentNotes.filter((note) => note.id !== req.params.id);
//           writeFile("./db/db.json", JSON.stringify(currentNotes));
//           res.json(200);
//         });
//       });    

  
  