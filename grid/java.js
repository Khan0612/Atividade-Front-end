const url ="https://hp-api.onrener.com/api/characters"
console.log("Hello World!");

fetch(url)
    .then((response) => console.log (response))
    .catch((error) => console.log(error));