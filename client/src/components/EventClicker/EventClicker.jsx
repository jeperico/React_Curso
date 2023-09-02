import '../DivsContainer.css'

function EventClicker(){

    function meuEvento(){
        console.log("Opa, fui ativado!")
    }

    return(
        <div className="DivContainer">
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default EventClicker