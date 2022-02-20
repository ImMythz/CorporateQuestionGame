import React from 'react';
import Question20 from './QuestionTiles/Question20/Question20';
import Question21 from './QuestionTiles/Question21/Question21';
import Question22 from './QuestionTiles/Question22/Question22';
import Question23 from './QuestionTiles/Question23/Question23';
import Question24 from './QuestionTiles/Question24/Question24';

export default function FifthRow() {
    return (
        <div className='flex flex-row items-center h-full w-full'>
            <Question20 />
            <Question21 />
            <Question22 />
            <Question23 />
            <Question24 />
        </div>
    );
}