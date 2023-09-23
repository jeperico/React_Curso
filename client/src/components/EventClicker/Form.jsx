import '../DivsContainer.css'
import { useState } from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Nome do usuario: ${name}  Senha: ${password}`)
        console.log('Usuario cadastrado')
    }

    const [name, setName] = useState('Matheus')
    const [password, setPassword] = useState('123milhas')

    return(
        <div className="DivContainer">
            <h2>Formulário</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder='Digite seu nome'
                      onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder='Digite a sua senha'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form