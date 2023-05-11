import React, {useState} from 'react'
import { Resource } from './Resource';

export const Search = () => {
    const api = 'http://localhost:3001/api/resources/'
    const [text, setText] = useState(''); 
    const [option, setOption] = useState('author'); 
    const [area, setArea] = useState('economico'); 
    const [resources, setResources] = useState([]);

    const getAllResourcesByType = async () => {
        console.log(`${api}${option}/${text}/area/${area}`);
        const response = await fetch (`${api}${option}/${text}/area/${area}`);
        const data = await response.json();
        return data;
    }

    const searching = async () => {
        const {data} = await getAllResourcesByType(option,text);
        setResources(data)
        console.log(resources.length);
    }

    return (
        <div className='Search'>
            <form>
                <select name='Seleccione un filtro para su busqueda' onChange={e => setOption(e.target.value)} className = 'input' id='filtro' >
                    <option value={'author'}>Autor</option>
                    <option value={'editorial'}>Editorial o canal</option>
                    <option value={'title'}>Título del recurso</option>
                </select>
                <input type="text" name="" id="text" onChange={e => setText(e.target.value)} className = 'input' />
                <select name='Selecciona un área de estudio' onChange={e => setArea(e.target.value)} className = 'input' id='area' >
                    <option value = {'economico'}>Económico administrativa</option>
                    <option value={'ingenieria'}>Ingeniería y ciencias exactas</option>
                    <option value={'medicina'}>Ciencias naturales y de la salud</option>
                    <option value={'sociales'}>Ciencias sociales y humanidades</option>
                    <option value={'todas'}>Cualquiera</option>
                </select>
            </form>
            <button onClick={e => searching()}>Buscar</button>
            <h2>Resultados de la busqueda</h2>
            <div className='Resources' >
                {
                    resources.map(resource => (
                        <Resource title={resource.title} author={resource.author} editorial={resource.editorial} img={resource.img} link={resource.link} ></Resource>
                    ))
                }
            </div>
        </div>
    )
}