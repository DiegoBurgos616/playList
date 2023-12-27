import { useEffect, useRef, useState } from "react";

type TimerArgs = {
    miliSegundos: number;

}

export const Timer = ({miliSegundos}:TimerArgs) => {
    const [segundos, setSegundos] = useState(0);
    const ref= useRef<NodeJS.Timeout>();
    
    
    useEffect(() => {
    ref.current && clearInterval(ref.current);

        ref.current=setInterval(()=> setSegundos(s=> s+1),miliSegundos); 

        // Clear the interval when the component unmounts
        
    }, [miliSegundos])

    return (
        <>
            <h4>Timer: <small>{segundos}</small> </h4>
        </>
    );
};
