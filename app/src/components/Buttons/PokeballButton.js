import "./Buttons.css"

const PokeballButton = (props) => {

    function clicked(){
        props.onClick()
    }
    let check = ""
    if(props.check===true){
        check="pokeball-button-wrapper-magic"
    }

    return (
        <div className={"pokeball-button-wrapper "+ check}>
        <button onClick={clicked} className="pokeball-button"></button>
        </div>
    )

}

export default PokeballButton;