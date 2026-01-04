const express = require("express");
const app = express();

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Romance" },
  { id: 3, name: "Commedy" },
];

app.get("/api/genres", (request, response) => {
  response.status(200).send(genres);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
