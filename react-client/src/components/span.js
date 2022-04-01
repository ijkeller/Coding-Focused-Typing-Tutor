


function Span(props) {

    return (

        <span
            key={props.i}
            className={
                `${props.correctClass ? 'correct' : ''}${props.incorrectClass ? 'incorrect' : ''}`
            }>
            {props.snippetCharacter}
        </span>

    )
}

export default Span;