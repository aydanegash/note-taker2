const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});  
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});


require('./routes/apiRoutes')(app);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});
