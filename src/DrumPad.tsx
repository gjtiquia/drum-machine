import React from "react";

interface IDrumPad {
    letter: string
}

export function DrumPad({ letter }: IDrumPad) {
    return (
        <button className='drum-pad bg-slate-600 hover:bg-slate-500 active:bg-slate-700 active:border-slate-400 active:border-4 text-3xl sm:text-4xl rounded-lg'>
            {letter}
        </button>
    );
}
