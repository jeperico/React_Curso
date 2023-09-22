import '../DivsContainer.css'
import Button from './Button'

function EventClicker(){

    function meuEvento(){
        console.log("Opa, fui ativado!")
    }

    return(
        <div className="DivContainer">
            <p>Clique para disparar um evento</p>
            <Button text="Primeiro Evento" event={meuEvento} />
        </div>
    )
}

export default EventClicker