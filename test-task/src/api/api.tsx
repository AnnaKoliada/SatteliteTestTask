import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  headers: {
  },
});

export const wordDataAPI = {
  async getWordData(word: string){
    console.log(word);

    const response = instance.get(`${word}`);
    console.log(response);
    return response;
  },
 
};