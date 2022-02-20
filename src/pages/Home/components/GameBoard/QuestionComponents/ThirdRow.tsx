import React from 'react';
import Question11 from './QuestionTiles/Question11/Question11';
import Question12 from './QuestionTiles/Question12/Question12';
import FreeSpace from './QuestionTiles/FreeSpace/FreeSpace';
import Question13 from './QuestionTiles/Question13/Question13';
import Question14 from './QuestionTiles/Question14/Question14';

export default function ThirdRow() {
    return (
        <div className='flex flex-row items-center h-full w-full'>
            <Question11 />
            <Question12 />
            <FreeSpace />
            <Question13 />
            <Question14 />
        </div>
    );
}