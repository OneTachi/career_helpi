import "./assets/css/Navbar.css"
import { PageProps } from "./interfaces/page"

export function Footer({page, setPage} : PageProps) : JSX.Element
{   
    return(
        <footer className="footer">
                <a href="https://github.com/OneTachi/career_helpi">Github</a>
            <>
                <h3>Created by:</h3>
                <p>Siddharth Lokula | Justin Burger | Christopher Rasquin</p>
            </>
        </footer>
    )
} 