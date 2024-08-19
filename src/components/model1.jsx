import { useState } from "react";
import { BASEURL } from "../constants";

function ModelOne() {
    const [modelOutput, setModelOutput] = useState(null)

    async function modelSubmit(e) {
        e.preventDefault();
        try {
            const result = await fetch(`${BASEURL}/ann?text=${e.target[0].value}`);
            const data = await result.json();
            setModelOutput(data)
        } catch (error) {
            console.error(error);
        }
    }




    return (
        <div className="w-full md:w-1/2 h-screen flex flex-col items-center p-4 gap-2 md:gap-5 border border-gray-700">
            <h1 className="text-2xl font-bold">MODEL ONE</h1>
            <form onSubmit={modelSubmit} className="w-full flex flex-col gap-4 items-center">
                <input onChange={() => setModelOutput(null)} required type="text" placeholder="INPUT HERE" className="w-full p-2 focus:outline-none px-4 rounded-full bg-gray-100 text-black" />
                <button className="bg-slate-400 text-black rounded-full px-4 py-2 border border-slate-400 transition-colors ease-linear delay-300 duration-300 hover:bg-transparent hover:text-slate-400" type="submit">Submit Input</button>
            </form>

            <div className="w-full flex gap-5 flex-col">
                <p className="text-2xl md:text font-bold">Output</p>
                {
                    modelOutput && (
                        <>
                            <p>Class: {modelOutput?.Class}</p>
                            <p>Confidence: {modelOutput?.Confidence}</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default ModelOne