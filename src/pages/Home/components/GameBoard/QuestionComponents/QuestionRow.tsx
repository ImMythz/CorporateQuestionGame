import React from 'react';
import QuestionTile from './QuestionTile';
import Question1 from './QuestionTiles/Question1';

export default function QuestionRow() {
    return (
        <div className='flex flex-row items-center h-full w-full'>
            <Question1 />
            <QuestionTile />
            <QuestionTile />
            <QuestionTile />
            <QuestionTile />
        </div>
    );
}