import React from 'react';
import GameContainer from './GameContainer';
import questions from '../../../../questions.json';

export default function GameBoard() {
    return (
        <section className='flex flex-col items-center justify-center h-fit w-fit mb-16'>
            <GameContainer />
            <article className='w-fit h-fit mb-24'>
                <button className="bg-navy hover:bg-light-blue text-white font-bold py-2 px-36 rounded-full"
                onClick={() => window.location.href = `mailto:${questions[24].mailTo}?subject=${questions[25].emailSubject}&cc=${questions[26].CC}&body=${questions[27].emailBody}`}>
                    Submit
                </button>
            </article>
        </section>
    );
}

