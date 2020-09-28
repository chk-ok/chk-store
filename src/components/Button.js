import React from 'react'

export default function Button(props) {
    let style = 'btn mainBackground text-white w-100';
    if (props.outlined) {
        style = 'btn mainOutline w-100';
    }
    return (
    <button className={style} type="button" onClick={props.action}>
        {props.label}
    </button>
    )
}
