const Joi = require("joi");
const express = require("express");
const router = express.Router();

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Romance" },
  { id: 3, name: "Commedy" },
];

router.get("/", (request, response) => {
  response.status(200).send(genres);
});

router.get("/:id", (request, response) => {
  const genre = genres.find(
    (genre) => genre.id === parseInt(request.params.id),
  );
  if (!genre)
    return response
      .status(404)
      .send("The genre with the given id was not found.");
  response.status(200).send(genre);
});

router.post("/", (request, response) => {
  const { error } = validateGenre(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  const newGenre = {
    id: genres.length + 1,
    name: request.body.name,
  };

  genres.push(newGenre);

  response.status(201).send(newGenre);
});

router.put("/:id", (request, response) => {
  const genre = genres.find(
    (genre) => genre.id === parseInt(request.params.id),
  );
  if (!genre)
    return response
      .status(404)
      .send("The genre with the given id was not found");

  const { error } = validateGenre(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  genre.name = request.body.name;

  response.status(200).send(genre);
});

router.delete("/:id", (request, response) => {
  const genreIndex = genres.findIndex(
    (genre) => genre.id === parseInt(request.params.id),
  );
  if (genreIndex === -1)
    return response
      .status(404)
      .send("The genre with the given id was not found");

  const [deletedGenre] = genres.splice(genreIndex, 1);

  response.status(200).send(deletedGenre);
});

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre, schema);
}

module.exports = router;
