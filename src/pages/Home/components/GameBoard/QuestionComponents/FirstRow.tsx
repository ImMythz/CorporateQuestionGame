import React from 'react';
import Question1 from './QuestionTiles/Question1/Question1';
import Question2 from './QuestionTiles/Question2/Question2';
import Question3 from './QuestionTiles/Question3/Question3';
import Question4 from './QuestionTiles/Question4/Question4';
import Question5 from './QuestionTiles/Question5/Question5';

export default function FirstRow() {
    return (
        <div className='flex flex-row items-center h-full w-full'>
            <Question1 />
            <Question2 />
            <Question3 />
            <Question4 />
            <Question5 />
        </div>
    );
}