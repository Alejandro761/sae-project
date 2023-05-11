import React from 'react'

export const Resource = ({title, author, editorial, img, link}) => {
  return (
    <div className='Resource' key={title} >
        <img src={img} ></img>
        <div className='info-container'>

            <h3> {title} </h3>
            <p><b>Autor: </b> {author}</p>
            <p><b>Editorial:</b> {editorial}</p> 
            <p><b>Enlace:</b> <a href={link} >Click aqui para abrir</a> </p> 
        </div>

    </div>
  )
}

