import './PersonData.css'

function PersonData({ foto, nome, idade, profissao, email, cpf }){

    return(
        <div id="dataContainer">
            <img src={foto} alt={nome} id='foto'/>
            <p><strong>Nome:</strong> {nome}.</p>
            <p><strong>Idade:</strong> {idade}. </p>
            <p><strong>Profissão:</strong> {profissao}. </p>
            <p><strong>Email:</strong> {email}. </p>
            <p><strong>CPF:</strong> {cpf}. </p>
        </div>
    )
}

export default PersonData