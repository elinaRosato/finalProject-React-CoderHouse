import '../App.css';
import ItemListContainer from '../components/ItemListContainer';

function Home() {
    
    return (
        <div className="container">
            <ItemListContainer greeting="Welcome to my first e-commerce!" />
        </div>
    );
}

export default Home;