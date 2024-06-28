import React from "react";
import { Counter } from "../component/Counter";
import { Timer } from "../component/Timer";
import { Alarm } from "../component/Alarm"
export const Home = () => {
    return (
        <>
            <Counter />
            <Timer />
            <Alarm />
        </>
    )
}