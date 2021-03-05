const fetch = require('node-fetch');

exports.handler = async () => {
const catReq = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=blL6q4LY1T6xeiDQVp8074QTX0eosIaL&q=cat&limit=1&offset=${Math.floor((Math.random() * 100) + 1)}&rating=g&lang=en`)
cat = await catReq.json()
console.log(cat.data[0])
return {
    "statusCode": 200,
    "headers": {
        "my_header": "my_value"
    },
    "body": JSON.stringify({catgif: cat.data[0].url}),
    "isBase64Encoded": false
};
}