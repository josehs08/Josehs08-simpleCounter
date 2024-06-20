// Contador

import React, { useEffect, useState } from "react";

export const Clock = () => {

    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSegundos(segundos + 1);
        }, 1000);
        if (segundos == 60) {
            setSegundos(0);
            setMinutos(minutos + 1);
            if (minutos == 60) {
                setMinutos(0);
                setHoras(horas + 1);
            }
        }

        return () => clearInterval(interval);
    });

    return (
        <div id="appTimer" className="d-flex justify-content-center p-3 gap-3">
            <div id="timerHours" className="timerElement col-2 d-flex gap-3">
                <div className="timerElemento">
                    <h1>{Math.floor(horas / 10)}</h1>
                </div>
                <div className="timerElemento">
                    <h1>{horas % 10}</h1>
                </div>
            </div>

            <div id="timerMinutes" className="timerElement col-2 d-flex gap-3">
                <div className="timerElemento">
                    <h1>{Math.floor(minutos / 10)}</h1>
                </div>
                <div className="timerElemento">
                    <h1>{minutos % 10}</h1>
                </div>
            </div>

            <div id="timerSeconds" className="timerElement col-2 d-flex gap-3">
                <div className="timerElemento">
                    <h1>{Math.floor(segundos / 10)}</h1>
                </div>
                <div className="timerElemento">
                    <h1>{segundos % 10}</h1>
                </div>
            </div>
        </div>
    );
};