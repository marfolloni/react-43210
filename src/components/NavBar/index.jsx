import './NavBar.css';
import CardWidget from '../CardWidget';

function NavBar() {
    return (
    <div className ="navbar">
        <ul>
            <li>
                <button>Pantalon</button>
            </li>
            <li>
                <button>Camisa</button>
            </li>
            <li>
                <button>Remera</button>    
            </li>
            <li>
                <button>Campera</button>        
            </li>
            <li>
                <button>Medias</button>    
            </li>
        </ul>
        < CardWidget />
    </div>
    );
}

export default NavBar;