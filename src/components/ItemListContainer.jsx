import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className='greeting-container'>
                <h1 className='greeting'>{greeting}</h1>
            </div>
            <ItemCount stock="10" initial="1" />
        </>
    )
}

export default ItemListContainer;