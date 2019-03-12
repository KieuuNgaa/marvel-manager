import _ from "lodash";
import CryptoJS from 'crypto-js';
import { marvelApi as config } from "../config";

const APP_DOMAIN = `${window.location.protocol || 'http'}//gateway.marvel.com/v1/public/`;
const API_KEY = config.publicKey;
const TIMESTAMP = Math.floor(Date.now() / 1000);
const HASH = CryptoJS.MD5(TIMESTAMP + config.privateKey + config.publicKey)
  .toString(CryptoJS.enc.Hex);

const marvelService = {
    getCharacters,
    getDetailCharacter,
    getCharacterComics
};

function getCharacters(limit, offset) {
  return new Promise((resolve, reject) => {
    fetch(`${APP_DOMAIN}characters?apikey=${API_KEY}&ts=${TIMESTAMP}&hash=${HASH}&limit=${limit}&offset=${offset}`) 
      .then((resp) => resp.json())
      .then(characters => resolve(characters.data))
      .catch(error =>  {
        console.log("error: ", error);
        reject(_.isObject(error) ? error.message || error.stack : error);
      });
  });
}

function getDetailCharacter(id) {
  return new Promise((resolve, reject) => {
    fetch(`${APP_DOMAIN}characters/${id}?apikey=${API_KEY}&ts=${TIMESTAMP}&hash=${HASH}`) 
      .then((resp) => resp.json())
      .then(detailCharacter => resolve(detailCharacter.data))
      .catch(error =>  {
        console.log("error: ", error);
        reject(_.isObject(error) ? error.message || error.stack : error);
      });
  });
}

function getCharacterComics(id) {
  return new Promise((resolve, reject) => {
    fetch(`${APP_DOMAIN}characters/${id}/comics?apikey=${API_KEY}&ts=${TIMESTAMP}&hash=${HASH}`) 
      .then((resp) => resp.json())
      .then(characterComics => resolve(characterComics.data))
      .catch(error =>  {
        console.log("error: ", error);
        reject(_.isObject(error) ? error.message || error.stack : error);
      });
  });
}

export default marvelService;
