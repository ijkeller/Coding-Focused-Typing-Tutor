import React from 'react';

function KeySpan(props) {

    const identifier = props.line + props.index

    return (
            <li
                className='keys'
                id={identifier}>
                {props.value}
            </li>
    )
}

export default KeySpan;