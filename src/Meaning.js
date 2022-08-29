

export default function Meaning(props){
    console.log(props.meaning)
    return (<div>
    <h3>{props.meaning.partOfSpeech}</h3>
    <ul>{props.meaning.definitions[0].definition}</ul>
    </div>
    )
}