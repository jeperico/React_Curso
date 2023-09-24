function Nome({ state }){

    return(
        <>
            <input type="text" placeholder="Digite seu nome:" onChange={(e) => {state(e.target.value)}} />
        </>
    )
}

export default Nome