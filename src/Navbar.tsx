import logo from "./assets/images/spider-logo.png"
import "./assets/css/Navbar.css"

export function Navbar() : JSX.Element 
{
    return(
        <header className="bar">
            <img src={logo} alt="spider logo" className="image"/>
        </header>
    )
}