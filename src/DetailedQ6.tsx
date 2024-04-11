import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";

const LOCATIONS= ["beach", "city", "rainforest", "mountain"]

export function DetailedQ6(): JSX.Element {
    // This is the State (Model)
    const [location, setLocation] = useState<string>("_____");

    // This is the Control
    function updateLocation(event: React.ChangeEvent<HTMLSelectElement>) {
        setLocation(event.target.value);
    }

    // This is the View
    return (
        <div></div>
    );
}