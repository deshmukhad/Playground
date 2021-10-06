import React from 'react'

function Greet(props) 
{
    const {skill}=props
    return (
        <div>
            <h1>Name : {props.name} | Skill : {skill}</h1>
        </div>
    )
}

export default Greet

