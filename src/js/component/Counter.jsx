import React, { useState, useEffect } from "react";
import { ClockNumber } from "./ClockNumber";

export const Counter = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timeInterval = setInterval(() => {
            setTime(time + 1);
        }, 1000)
        return () => clearInterval(timeInterval);
    })

    return (
        <div className="counter d-flex justify-content-center gap-3 mt-5 p-3">

            <ClockNumber number={Math.floor(time / 100000) % 10} />
            <ClockNumber number={Math.floor(time / 10000) % 10} />
            <ClockNumber number={Math.floor(time / 1000) % 10} />
            <ClockNumber number={Math.floor(time / 100) % 10} />
            <ClockNumber number={Math.floor(time / 10) % 10} />
            <ClockNumber number={Math.floor(time / 1) % 10} />
        </div>
    )
}