import React from 'react'

export default function Button(props) {
    let style = 'btn mainBackground text-white';
    if (props.outlined) {
        style = 'btn mainOutline';
    }
    return (
    <button className={style} type="button" onClick={props.action}>{props.label}</button>
    )
}
