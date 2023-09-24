import {useState} from 'react'

function Conditional(){

    function click(e){
        e.preventDefault()
        console.log(email)
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail("")
    }

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    return(
        <div className="DivContainer">
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder='Digite o seu email:' onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={click}>Enviar e-mail</button>
            </form>
            {userEmail &&(
                <div>
                    <p>O email do Usuario é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </div>
    )
}

export default Conditional