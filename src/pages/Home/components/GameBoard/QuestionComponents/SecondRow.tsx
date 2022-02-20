import React from 'react';
import Question6 from './QuestionTiles/Question6/Question6';
import Question7 from './QuestionTiles/Question7/Question7';
import Question8 from './QuestionTiles/Question8/Question8';
import Question9 from './QuestionTiles/Question9/Question9';
import Question10 from './QuestionTiles/Question10/Question10';

export default function SecondRow() {
    return (
        <div className='flex flex-row items-center h-full w-full'>
            <Question6 />
            <Question7 />
            <Question8 />
            <Question9 />
            <Question10 />
        </div>
    );
}