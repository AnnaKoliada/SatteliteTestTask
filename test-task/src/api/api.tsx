import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  headers: {
  },
});

export const wordDataAPI = {
  async getWordData(word: string): Promise<any>{
    const response = instance.get(`${word}`);
    return response;
  },
};