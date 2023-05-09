const api = 'http://localhost:3001/api/resources/'

const getAllResources = async () => {
    const response = await fetch (api);
    // const response = await fetch (api, {
    //     method: 'GET'
    // });
    const data = await response.json();
    console.log(data)
}

const getAllResourcesByType = async (type, auth) => {
    // const response = await fetch (api + 'author/puta');
    const response = await fetch (`${api}${type}/${auth}`);
    // const response = await fetch (api, {
    //     method: 'GET'
    // });
    const data = await response.json();
    console.log(data)
}

// getAllResources()
// getAllResourcesByType("author","rIchARd")
// getAllResourcesByType("area","medicina")
// getAllResourcesByType("area","ciencias")
// getAllResourcesByType("editorial","sueño")
getAllResourcesByType("title","algo")
// console.log("Paul Hola".includes("ul H"));