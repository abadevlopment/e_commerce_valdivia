import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
/*let styleSaludo ={
    width: '100vw',
    height: '60vh',
    border: 'solid #0d6efd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}*/

function ItemListContainer ({greeting}) {
    return (
        <div /*style = {styleSaludo}*/ className="ilc" >
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={5} />
        </div>
    )
}
export default ItemListContainer