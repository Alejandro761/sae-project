import React, {useState} from 'react'

export const Search = () => {
    const api = 'http://localhost:3001/api/resources/'
    const [text, setText] = useState(''); 
    const [option, setOption] = useState(''); 
    const [area, setArea] = useState('todas'); 

    const getAllResourcesByType = async (option, params) => {
        const response = await fetch (`${api}${option}/${params}`);
        const data = await response.json();
        console.log(data)
    }

    const searching = () => {
        getAllResourcesByType(option,text)
    }

    return (
        <div>
            <form>
                <select name='Seleccione un filtro para su busqueda' onChange={e => setOption(e.target.value)}>
                    <option value={'author'}>Autor</option>
                    <option value={'editorial'}>Editorial o canal</option>
                    <option value={'title'}>Titulo del recurso</option>
                </select>
                <input type="text" name="" id="text" onChange={e => setText(e.target.value)}/>
                <select name='Selecciona un área de estudio' onChange={e => setArea(e.target.value)}>
                    <option value = {'economico'}>Económico administrativa</option>
                    <option value={'ingenieria'}>Ingeniería y ciencias exactas</option>
                    <option value={'medicina'}>Ciencias naturales y de la salud</option>
                    <option value={'sociales'}>Ciencias sociales y humanidades</option>
                    <option value={'todas'}>Cualquiera</option>
                </select>
            </form>
            <h1>text = {text}</h1>
            <button onClick={e => searching()}>Buscar</button>
        </div>
    )
}