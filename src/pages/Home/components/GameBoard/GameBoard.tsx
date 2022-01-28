import React from 'react';
import GameContainer from './GameContainer';

export default  function GameBoard() {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen'>
            <GameContainer />
        </div>
    );
}

