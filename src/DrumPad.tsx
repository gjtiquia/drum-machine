import React from "react";
import { KeyboardEvent, useEffect, useState } from 'react'


interface IDrumPad {
    letter: string
}

export function DrumPad({ letter }: IDrumPad) {

    useEffect(() => {
        // ComponentDidMount
        console.log(`Drum Pad ${letter} Mounted`);
        document.addEventListener("keydown", onUserKeydown, true);

        // CompomentDidUnmount
        return () => {
            console.log(`Drum Pad ${letter} Unmounted`)
            document.removeEventListener("keydown", onUserKeydown, true);
        };
    }, []);

    const onUserKeydown = (event: globalThis.KeyboardEvent) => {
        if (event.key !== letter.toLowerCase()) return;

        console.log(`${letter} Pressed!`);
    };

    return (
        <button className='drum-pad bg-slate-600 hover:bg-slate-500 active:bg-slate-700 active:border-slate-400 active:border-4 text-3xl sm:text-4xl rounded-lg'>
            {letter}
        </button>
    );
}
