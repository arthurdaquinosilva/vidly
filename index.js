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

app.get("/api/genres/:id", (request, response) => {
  const genre = genres.find(
    (genre) => genre.id === parseInt(request.params.id),
  );
  if (!genre)
    return response
      .status(404)
      .send("The genre with the given id was not found.");
  response.status(200).send(genre);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
