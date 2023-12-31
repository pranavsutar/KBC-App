import { useEffect, useState } from "react";

export default function Timer({ setStop, queNum }) {
    const [time, setTime] = useState(30);

    
    useEffect(() => {
    if (time < 0)  setStop(true);

    const interval = setInterval(() => {
        setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
    }, [time, setStop]);
    
    useEffect(() => {
        setTime(30);
    }, [queNum]);
    return time;
}