import React, {useState} from 'react'

export const Search = () => {
    const api = 'http://localhost:3001/api/resources/'
    const [text, setText] = useState(''); 

    const getAllResourcesByType = async (type, auth) => {
        const response = await fetch (`${api}${type}/${auth}`);
        const data = await response.json();
        console.log(data)
    }
    const searching = (valueText) => {
        getAllResourcesByType("title",text)
    }

    return (
        <div>
            <form>
                <input type="text" name="" id="text" onChange={e => setText(e.target.value)}/>
            </form>
            <h1>text = {text}</h1>
            <button onClick={e => searching(text)}>Buscar</button>
        </div>
    )
}