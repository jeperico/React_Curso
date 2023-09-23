import '../DivsContainer.css'
import Button from './Button'

function EventClicker(){

    function meuEvento(){
        console.log("Opa, fui ativado!")
    }

    function segundoEvento(){
        console.log("Segundo Evento")
    }

    return(
        <div className="DivContainer">
            <p>Clique para disparar um evento</p>
            <Button text={"Primeiro Evento!"} event={meuEvento} />
            <Button text={"Segundo Evento!"} event={segundoEvento} />
        </div>
    )
}

export default EventClicker