import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(1)
    
    return (
        <>
            <button onClick={() => {
                console.log('Click');
                // window.location.href = 'https://ya.ru'
                // document.body.style.backgroundColor = 'black'
                setCounter(prevState => prevState + 2)
            }}>+</button>
            <p>{counter}</p>
            <button onClick={() => {
                setCounter(prevState => prevState - 2)
            }}>-</button>
        </>
    );
}

export default Counter;