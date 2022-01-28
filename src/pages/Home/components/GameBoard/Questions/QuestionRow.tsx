import React from 'react';
import QuestionTile from './QuestionTile';

export default function QuestionRow() {
    return (
        <div className='flex flex-row items-center h-1/6 w-full'>
            <QuestionTile />
            <QuestionTile />
            <QuestionTile />
        </div>
    );
}