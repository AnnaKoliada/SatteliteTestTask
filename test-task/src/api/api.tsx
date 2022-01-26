import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
 
});

export const wordDataAPI = {
  async getWordData(word: string){
    const response = instance.get(`${word}`);
    return (await response).data;
  },
 
};