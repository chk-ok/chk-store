import React from 'react'

export default function Input(props) {
    return (
        <input id={props.id} type="text" className="form-control text-center" value={props.data} onChange={props.changeAction}/>
    )
}
