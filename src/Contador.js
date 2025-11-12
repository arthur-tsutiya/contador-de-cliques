import { useState } from 'react';
import './Contador.css';

export default function Contador() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>
            <button className="btn" onClick={() => setCount(c => c + 1)}>Incrementar</button>
        </>
    );
}