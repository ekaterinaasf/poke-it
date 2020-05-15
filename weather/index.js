"use strict";

const fetch = require("node-fetch");
const terminalImage = require("terminal-image");
const jimp = require("jimp");
/*
const WEATHER_API_KEY = "your API Key";
//const weatherAPIKey = require("../config").WEATHER_API_KEY; //myself
const weatherAPIKey = WEATHER_API_KEY;
/**
 * @typedef WeatherData
 *
 * @property {object} location
 * @property {string} location.name
 * @property {string} location.country
 *
 * @property {object} condition
 * @property {string} condition.text
 * @property {string} condition.icon
 */

/**
 * @ param {string} cityName
 * @ returns {Promise<WeatherData>}
 
async function getWeatherForCity(cityName) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${cityName}`
  );
  const jsoned = await response.json();

  if (jsoned.error) {
    if (jsoned.error.code === 1006) {
      return {
        success: false,
        error: `City ${cityName} not found, please check input.`,
      };
    }

    return {
      success: false,
      error: jsoned.error.message,
    };
  }

  const icon = await getIcon(`https:${jsoned.current.condition.icon}`);

  return {
    success: true,
    data: {
      location: {
        name: jsoned.location.name,
        country: jsoned.location.country,
      },
      condition: {
        text: jsoned.current.condition.text,
        icon: icon,
      },
    },
  };
}


 @ param {string} url
 @ returns {Promise<string>}
 
async function getIcon(url) {
  const iconResponse = await fetch(url);
  const iconData = await iconResponse.buffer();

  const jimpImage = await jimp.read(iconData);
  const resizedIcon = await jimpImage
    .resize(12, 12)
    .quality(100)
    .getBufferAsync(jimp.MIME_JPEG);

  return await terminalImage.buffer(resizedIcon);
}

module.exports = {
  getWeatherForCity,
}; */

const url = "https://pokeapi.co/api/v2/pokemon/";

async function getPoke(id) {
  const response = await fetch(url + id);
  const jsoned = await response.json();

  if (jsoned.error) {
    if (jsoned.error.code === 1006) {
      return {
        success: false,
        error: `Pokemon with id ${id} not found, please check input.`,
      };
    }

    return {
      success: false,
      error: jsoned.error.message,
    };
  }

  return {
    success: true,
    data: {
      id: jsoned.id,
      name: jsoned.name,
      height: jsoned.height,
      weight: jsoned.weight,
      base_experience: jsoned.base_experience,
    },
  };
}

//url = "https://pokeapi.co/api/v2/pokemon/";
//pokemon/6
// forms[0].name="charizard"
//https://pokeapi.co/api/v2/pokemon/charizard
