// Async example

"use strict";

const weather = require("./weather");
const renderer = require("./renderer");

(async function () {
  const rawInputs = process.argv;
  const cleanedInputs = rawInputs.slice(2);

  const pokeId = cleanedInputs[0];

  if (!pokeId) {
    renderer.renderError("Please input a pokemon id.");
    process.exit(1);
  }

  try {
    const pokeData = await weather.getPoke(pokeId);

    if (!pokeData.success) {
      renderer.renderError(pokeData.error);
      return;
    }

    const id = poke.data.id;
    const name = poke.data.name;
    const height = poke.data.height;
    const weight = poke.data.weight;
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + name;
    console.log(
      `Pokemon with id: ${id} has name: ${name} and its weight and height are ${weight}, ${height}`
    );
    console.log(`You can download it via ${pokeUrl}`);

    renderer.renderSuccess(`${name}, ${height}`, `${weight}`);
  } catch (error) {
    renderer.renderError(error.message);
    process.exit(1);
  }
})();
