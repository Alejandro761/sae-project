const api = 'http://localhost:3000/api/resources/'

const getAllResources = async () => {
    const response = await fetch (api);
    // const response = await fetch (api, {
    //     method: 'GET'
    // });
    const data = await response.json();
    console.log(data)
}

const getAllResourcesByAuthor = async (auth) => {
    // const response = await fetch (api + 'author/puta');
    const response = await fetch (`${api}author/${auth}`);
    // const response = await fetch (api, {
    //     method: 'GET'
    // });
    const data = await response.json();
    console.log(data)
}

getAllResources()
getAllResourcesByAuthor("pAuL h")
// console.log("Paul Hola".includes("ul H"));