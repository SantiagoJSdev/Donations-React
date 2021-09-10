
import { useState } from 'react';


export const useCounter = ( initialState = 0 ) => {
    
    const [counter, setCounter] = useState(initialState); 

    const reset = () => {
        setCounter( initialState = counter );
    }

    const increment = () => {
       
        setCounter( counter + 3 );
    }

    const decrement = () => {
       
        setCounter( counter - 3 );
    }
    return {
        counter,
        increment,
        decrement,
        reset
    };

}