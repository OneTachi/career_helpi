import "./assets/css/Navbar.css"
import { Button } from 'react-bootstrap';
import { PageProps } from "./interfaces/page"

export function Navbar({page, setPage} : PageProps) : JSX.Element
{
    const linkHome = () =>
        {
            setPage("home");
        }
    return(
        <header className="bar">
            <Button className="image" onClick={linkHome} > Homebutton </Button> 
        </header>
    )
} 