import React from 'react';
import Question15 from './QuestionTiles/Question15/Question15';
import Question16 from './QuestionTiles/Question16/Question16';
import Question17 from './QuestionTiles/Question17/Question17';
import Question18 from './QuestionTiles/Question18/Question18';
import Question19 from './QuestionTiles/Question19/Question19';

export default function FourthRow() {
    return (
        <div className='flex flex-row items-center h-full w-full'>
            <Question15 />
            <Question16 />
            <Question17 />
            <Question18 />
            <Question19 />
        </div>
    );
}