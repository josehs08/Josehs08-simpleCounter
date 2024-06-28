import React, { useState, useEffect } from "react";
import { ClockNumber } from "./ClockNumber";

export const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (start && seconds > 0) {
            const interval = setInterval(() => {
                setSeconds(seconds - 1)
            }, 1000)
            return () => clearInterval(interval);
        }
        setStart(false);
    })

    return (
        <div className="timer d-flex flex-column mt-5 gap-3 p-3">
            <h2 className="text-center">Cronometro</h2>
            <div className="d-flex justify-content-center">
                <input
                    className="w-50 px-5"
                    type="number"
                    onChange={(e) => { setSeconds(e.target.value) }}
                    value={seconds === 0 ? "" : seconds}
                    placeholder="Introduzca la cantidad de segundos..."
                />
            </div>
            <div className="d-flex justify-content-center gap-3">
                <ClockNumber number={Math.floor(seconds / 100000) % 10} />
                <ClockNumber number={Math.floor(seconds / 10000) % 10} />
                <ClockNumber number={Math.floor(seconds / 1000) % 10} />
                <ClockNumber number={Math.floor(seconds / 100) % 10} />
                <ClockNumber number={Math.floor(seconds / 10) % 10} />
                <ClockNumber number={Math.floor(seconds / 1) % 10} />
            </div>
            <div className="d-flex justify-content-center">
                <button
                    className={start ? "stop" : "start"}
                    onClick={() => { setStart(!start) }}>{start ? "Stop" : "Start"}
                </button>
                <button
                    onClick={() => { setSeconds(0); setStart(false) }}>
                    Reset
                </button>
            </div>
        </div>
    )
}