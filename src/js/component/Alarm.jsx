import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import { ClockNumber } from "./ClockNumber";

export const Alarm = () => {
    const [time, setTime] = useState(0);
    const [alarm, setAlarm] = useState(0);
    const [start, setStart] = useState(false);


    useEffect(() => {
        if (start) {
            if (time == alarm) {
                Swal.fire({
                    title: "Alarma!",
                    text: "Llegaste al tiempo establecido!",
                    icon: "info"
                });
                setStart(false);
            }
            let timeInterval = setInterval(() => {
                setTime(time + 1);
            }, 1000)
            return () => clearInterval(timeInterval);
        }
        setTime(0);
    })

    return (
        <div className="alarm mt-5 p-3 d-flex flex-column">
            <h2 className="text-center">Alerta</h2>
            <div className="d-flex justify-content-center my-3">
                <input
                    className="w-50 px-5"
                    placeholder="Introduzca los segundos en los que aparecera la alerta..."
                    onChange={(e) => setAlarm(e.target.value)}
                    value={alarm === 0 ? "" : alarm}
                    type="number"
                    id="timeValue"
                />
            </div>
            <div className="d-flex justify-content-center gap-5">
                <div>
                    <h3 className="text-center">Tiempo Transcurrido:</h3>
                    <ClockNumber number={time} />
                </div>
                <div>
                    <h3 className="text-center">Tiempo establecido:</h3>
                    <ClockNumber number={alarm} />
                </div>
            </div>
            <div className="d-flex justify-content-center m-3">
                <button
                    className={start ? "stop" : "start"}
                    onClick={() => { alarm > 0 ? setStart(!start) : null }}>{start ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    )
}