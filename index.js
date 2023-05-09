const api = 'http://localhost:3000/api/resources'

const getAllResources = async () => {
    const response = await fetch (api, {
        method: 'GET',
        headers: {
        }
    });
    const data = await response.json();
    console.log(data)
}

getAllResources()