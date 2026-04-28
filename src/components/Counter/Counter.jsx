
import { useEffect, useRef, useState } from "react";

const Counter = ({ themeDark }) => {
    const [Count, setCount] = useState(0)
    const [running, setRunning] = useState(false);
    const timerRef = useRef(null);
    const [speed, setSpeed] = useState(600);
    const HandleCounterINC = () => {
        setCount(Count + 1)
    }
    const HandleCounterDEC = () => {
        if (Count <= 0) {
            setCount(0)
            alert("Cant decrement below zero")
        } else {
            setCount(Count - 1)
        }
    }
    const HandleCounterREC = () => {
        setCount(0)
    }
    const startInterval = () => {
        timerRef.current = setInterval(() => {
            setCount((c) => c + 1);
        }, speed);
    };
    const HandleCounterAUTO = () => {
        if (running) return;
        setRunning(true);
        timerRef.current = setInterval(() => {
            setCount((c) => c + 1);
        }, 600);

    }
    const HandleStop = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setRunning(false);
    }
    useEffect(() => {
        if (running) {
            clearInterval(timerRef.current);
            startInterval();
        }
    }, [speed]);

    useEffect(() => {
        if (running) {
            startInterval();
        }
        return () => clearInterval(timerRef.current);
    }, [running]);

    return (
        <div className="space-y-5 text-white">
            <div className={`text-2xl ${themeDark ? "text-white" : "text-[#220901]"}`}>
                <h1>*React Counter</h1>
            </div>
            <div className="grid place-content-center grid-flow-col gap-5">
                {
                    running &&
                    <div className="relative">
                        <button onClick={HandleStop} className={`bg-orange-500 absolute -left-10 ${themeDark ? "border-white " : "border-orange-800 "} rounded-3xl p-2 border-2`}>Stop</button>
                    </div>
                }
                <span className={`text-3xl place-content-center ${themeDark ? "text-[#e9edc9]" : "text-black"}`}>Count : </span><h3 className={`text-7xl  ${themeDark ? "" : "text-[#2ec4b6]"}`}>{Count}</h3>
            </div>
            <div className="grid md:place-content-center md:grid-cols-4 gap-5 p-3 ">
                <button disabled={running} onClick={HandleCounterREC} className={`${running ? "bg-blue-400 hover:cursor-not-allowed" : "bg-blue-700"}   ${themeDark ? "border-white " : "border-blue-800 "} rounded-3xl p-2 border-2`}>Reset</button>
                <button disabled={running} onClick={HandleCounterDEC} className={`${running ? "bg-red-400 hover:cursor-not-allowed" : "bg-red-700"}  ${themeDark ? "border-white " : "border-red-800 "} rounded-3xl p-2 border-2`}>Decrement</button>
                <button disabled={running} onClick={HandleCounterINC} className={`${running ? "bg-green-400 hover:cursor-not-allowed" : "bg-green-700"}  ${themeDark ? "border-white " : "border-green-800"} rounded-3xl p-2 border-2`}>Incriment</button>
                <button disabled={running} onClick={HandleCounterAUTO} className={`${running ? "bg-purple-400 hover:cursor-not-allowed" : "bg-purple-700"}  ${themeDark ? "border-white " : "border-purple-800 "} rounded-3xl p-2 border-2`}>Auto Incriment</button>
                {
                    running ?
                        <div className="col-span-4">
                            <input
                                type="range"
                                min="100"
                                max="2000"
                                step="100"
                                value={speed}
                                onChange={(e) => setSpeed(Number(e.target.value))}
                                className="w-full"
                            />
                            <p className={`text-sm ${themeDark ? "text-white" : "text-green-600"}`}>
                                Speed: {speed} ms
                            </p>
                        </div>
                        : ""
                }
            </div>
        </div >
    )
}

export default Counter;