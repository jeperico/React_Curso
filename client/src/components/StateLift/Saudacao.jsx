function Saudacao({ name }){

    function Sau(name){
        return `Olá ${name}, tudo certo?`
    }

    return(
        <>
            {name && <p>{Sau(name)}</p>}
        </>
    )
}

export default Saudacao