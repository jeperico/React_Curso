import '../DivsContainer.css'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Usuario cadastrado')
    }

    return(
        <div className="DivContainer">
            <h1>Formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder='Digite seu nome' />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form