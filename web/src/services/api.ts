import axios from 'axios';

const api = axios.create({
    baseURL: /* process.env.TESTE_CARAIO */ 'http://localhost:3333' //TODO: Colocar nas variaveis de ambiente para alternância entre ambiente de produção.
});

export default api;