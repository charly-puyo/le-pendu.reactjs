import NavBar from "./Navbar.jsx";
import ItemListContainer from './componentes/ItemListContainer.jsx';

function Header () {

    return (

        <header>
            <div>
            
            <ItemListContainer greeting="Bienvenidos a nuestra tienda!" />

            </div>
            
            <div>
                <img src="/logo.png" alt="" />
            </div>
            
            <NavBar/>
            
        </header>
    )

}

export default Header;