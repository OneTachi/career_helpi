import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./assets/images/spider-logo.png"
import "./assets/css/Navbar.css"
import { Button } from 'react-bootstrap';

export function Navbar() : JSX.Element
{
    const navigate = useNavigate();

    const linkHome = () =>
        {
            navigate("/App");
        }

    return(
        <header className="bar">
            <Button className="image" onClick={linkHome}/>
        </header>
    )
} 