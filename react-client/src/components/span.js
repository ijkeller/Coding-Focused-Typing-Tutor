


function Span(props) {

    return (

        <span
            key={props.i}
            className={
                `${props.correctClass ? 'correct' : ''}${props.incorrectClass ? 'incorrect' : ''}`
            }
            id={`sp${props.id}`} >
            {props.snippetCharacter}
        </span>

    )
}

export default Span;