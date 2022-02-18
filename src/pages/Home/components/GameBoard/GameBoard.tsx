import React from 'react';
import GameContainer from './GameContainer';

export default  function GameBoard() {
    return (
        <div className='flex flex-col items-center justify-center h-fit mb-16'>
            <GameContainer />
            <div className='w-fit h-fit mb-24'>
            <button className="bg-blue hover:bg-light-blue text-white font-bold py-2 px-36 rounded-full"
            onClick={() => window.location.href = 'mailto:email@email.com?subject=This is the subject&cc=srunge@infiniteelectronics.com&body=This is a body of text'}>
                Submit
            </button>
            </div>
        </div>
    );
}

