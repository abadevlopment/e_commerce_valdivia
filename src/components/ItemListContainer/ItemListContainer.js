let styleSaludo ={
    width: '100vw',
    height: '15vh',
    border: 'solid #0d6efd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}


function ItemListContainer ({greeting}) {
    return (
        <div style = {styleSaludo}>
            <h1>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer