const fetch = require("node-fetch");
const options = (verb, token, body) => {
    const obj = {
        method: verb,
        headers: new fetch.Headers(),
        redirect: 'follow',
    }
    if(token) obj.headers.append("Authorization", token);
    if(body) obj.body = JSON.stringify(body);
    return obj
};

const fep = {
    montarSimulador: ()=>{
        return fetch("https://api.json-generator.com/templates/RJ2IEMY493l2/data?delay=1000", options('GET', 'Bearer 8jbzbqj1srm00qqk3185uy3mn6u9n6oq4o0p89cx'))
    }
}

module.exports = fep;