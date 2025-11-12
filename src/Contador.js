import { useState } from 'react';
import './Contador.css';

export default function Contador() {
    const [count, setCount] = useState(0);

    function incrementarContador() {
        setCount(c => c + 1);
    }

    return (
        <>
            <h2>{count}</h2>
            <button className="btn" onClick={incrementarContador}>Incrementar</button>
        </>
    );
}